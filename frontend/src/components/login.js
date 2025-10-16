export class Login {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.email = document.querySelector('input[name="email"]');
        this.password = document.querySelector('input[name="psw"]');

        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));

            // Сброс валидации при изменении полей
            this.form.querySelectorAll('.form-control').forEach(input => {
                input.addEventListener('input', () => {
                    if (input.classList.contains('is-invalid')) {
                        input.classList.remove('is-invalid');
                    }
                });
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        this.validateEmail();

        if (this.form.checkValidity()) {
            console.log('Форма логина отправлена');
            this.submitForm();
        } else {
            this.form.classList.add('was-validated');

            // Добавляем классы ошибок к невалидным полям
            this.form.querySelectorAll('.form-control').forEach(input => {
                if (!input.checkValidity()) {
                    input.classList.add('is-invalid');
                }
            });
        }
    }

    validateEmail() {
        if (this.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email.value)) {
                this.email.setCustomValidity('Пожалуйста, введите корректный email адрес');
            } else {
                this.email.setCustomValidity('');
            }
        }
    }

    submitForm() {
        const formData = new FormData(this.form);
        const data = {
            email: formData.get('email'),
            password: formData.get('psw'),
            rememberMe: document.getElementById('rememberMe').checked
        };

        console.log('Данные для логина:', data);

        // Здесь будет отправка на сервер

    }

    showAuthError() {

        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger mt-3';
        errorDiv.textContent = 'Неверный email или пароль';

        const submitButton = this.form.querySelector('button[type="submit"]');
        this.form.insertBefore(errorDiv, submitButton);


        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}