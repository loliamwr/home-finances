export class Register {
    constructor() {
        this.form = document.getElementById('registerForm');
        this.firstName = document.querySelector('input[name="first-name"]');
        this.lastName = document.querySelector('input[name="last-name"]');
        this.email = document.querySelector('input[name="email"]');
        this.password = document.querySelector('input[name="psw"]');
        this.confirmPassword = document.querySelector('input[name="psw-confirm"]');

        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));

            // Валидация в реальном времени
            if (this.firstName) {
                this.firstName.addEventListener('input', () => this.validateName(this.firstName));
            }
            if (this.lastName) {
                this.lastName.addEventListener('input', () => this.validateName(this.lastName));
            }
            if (this.email) {
                this.email.addEventListener('input', () => this.validateEmail());
            }
            if (this.password) {
                this.password.addEventListener('input', () => {
                    this.validatePassword();
                    this.validatePasswordMatch();
                });
            }
            if (this.confirmPassword) {
                this.confirmPassword.addEventListener('input', () => this.validatePasswordMatch());
            }

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

        // Проверяем все валидации
        this.validateName(this.firstName);
        this.validateName(this.lastName);
        this.validateEmail();
        this.validatePassword();
        this.validatePasswordMatch();

        if (this.form.checkValidity()) {
            console.log('Форма регистрации отправлена');
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

    validateName(input) {
        if (input && input.value) {
            const nameRegex = /^[А-Я][а-я]*(?:\s[А-Я][а-я]*)*$/;
            if (!nameRegex.test(input.value)) {
                input.setCustomValidity('Должно содержать только русские буквы и пробелы, начинаться с заглавной буквы');
            } else {
                input.setCustomValidity('');
            }
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

    validatePassword() {
        if (this.password) {
            const password = this.password.value;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasNumber = /\d/.test(password);
            const isValidLength = password.length >= 8;

            // Очищаем предыдущие ошибки
            this.password.setCustomValidity('');

            // Проверяем по порядку и останавливаемся на первой ошибке
            if (!isValidLength) {
                this.password.setCustomValidity('Пароль должен содержать минимум 8 символов');
                return;
            }

            if (!hasUpperCase) {
                this.password.setCustomValidity('Пароль должен содержать хотя бы одну заглавную букву');
                return;
            }

            if (!hasNumber) {
                this.password.setCustomValidity('Пароль должен содержать хотя бы одну цифру');
                return;
            }

            // Если все проверки пройдены
            this.password.setCustomValidity('');
        }
    }
    validatePasswordMatch() {
        if (this.password && this.confirmPassword) {
            const passwordsMatch = this.password.value === this.confirmPassword.value;
            const hasValue = this.confirmPassword.value.length > 0;

            if (hasValue && !passwordsMatch) {
                this.confirmPassword.setCustomValidity('Пароли не совпадают');
            } else {
                this.confirmPassword.setCustomValidity('');
            }
        }
    }

    submitForm() {
        const formData = new FormData(this.form);
        const data = {
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            email: formData.get('email'),
            password: formData.get('psw')
        };

        console.log('Данные для регистрации:', data);

        // Здесь будет отправка на сервер

    }

    showRegistrationError(message) {

        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger mt-3';
        errorDiv.textContent = message || 'Ошибка при регистрации';

        const submitButton = this.form.querySelector('button[type="submit"]');
        this.form.insertBefore(errorDiv, submitButton);

        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}