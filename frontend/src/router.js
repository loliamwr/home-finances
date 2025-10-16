import {Dashboard} from "./components/dashboard";
import {Login} from "./components/login";
import {Register} from "./components/register";
import {Transactions} from "./components/transactions";
import {Profit} from "./components/profit";

export class Router{
    constructor() {
        this.titlePageElement = document.getElementById('title');
        this.contentPageElement = document.getElementById('content');
        this.initEvents();
        this.routes =[
            {
                route: '/',
                title:'Главная',
                filePathTemplate:'/templates/dashboard.html',
                useLayout: '/templates/layout.html',
                load: ()=>{
                    new Dashboard();
                }
            },
            {
                route: '/login',
                title:'Вход',
                filePathTemplate:'/templates/login.html',
                useLayout:false,
                load: ()=>{
                    new Login();
                }
            },
            {
                route: '/register',
                title:'Регистрация',
                filePathTemplate:'/templates/register.html',
                useLayout:false,
                load: ()=>{
                    new Register();
                }
            },
            {
                route: '/costs',
                title:'Расходы', // Исправил title
                filePathTemplate:'/templates/costs.html',
                useLayout: '/templates/layout.html',
                load: ()=>{
                    new Costs();
                }
            },
            {
                route: '/transactions',
                title:'Доходы и расходы',
                filePathTemplate:'/templates/transactions.html',
                useLayout:'/templates/layout.html',
                load: ()=>{
                    new Transactions();
                }
            },
            {
                route: '/profit',
                title:'Доходы',
                filePathTemplate:'/templates/profit.html',
                useLayout:'/templates/layout.html',
                load: ()=>{
                    new Profit();

                }
            },
            {
                route: '/edit-profit',
                title:'Доходы',
                filePathTemplate:'/templates/edit-profit.html',
                useLayout:'/templates/layout.html',
                // load: ()=>{
                //     new Profit();
                //
                // }
            },
            {
                route: '/edit-transactions',
                title:'Доходы',
                filePathTemplate:'/templates/edit-transactions.html',
                useLayout:'/templates/layout.html',
                // load: ()=>{
                //     new Profit();
                //
                // }
            },
            {
                route: '/create-transactions',
                title:'Доходы',
                filePathTemplate:'/templates/create-transactions.html',
                useLayout:'/templates/layout.html',
                // load: ()=>{
                //     new Profit();
                //
                // }
            },
        ]
    };

    initEvents(){
        window.addEventListener('DOMContentLoaded',this.activateRoute.bind(this));
        window.addEventListener('popstate',this.activateRoute.bind(this));
    }

    async activateRoute(){
        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);

        if(newRoute){
            if (newRoute.title){
                this.titlePageElement.innerText = newRoute.title + ' | Finance App'
            }
            if(newRoute.filePathTemplate){
                let contentBlock = this.contentPageElement;
                if(newRoute.useLayout){
                    this.contentPageElement.innerHTML= await fetch(newRoute.useLayout).then(response => response.text());
                    contentBlock = document.getElementById('content-layout');
                }
                contentBlock.innerHTML= await fetch(newRoute.filePathTemplate).then(response => response.text());
            }


            this.handleSidebarState(urlRoute);

            if(newRoute.load && typeof newRoute.load === 'function'){
                newRoute.load();
            }
        }else{
            console.log('No route found');
        }
    }

    handleSidebarState(currentPath) {

        setTimeout(() => {

            const categoriesCheckbox = document.getElementById('categories-toggle');
            if (categoriesCheckbox) {

                if (currentPath === '/profit' || currentPath === '/costs') {
                    categoriesCheckbox.checked = true;
                } else {
                    categoriesCheckbox.checked = false;
                }
            }


            this.highlightActiveNavItems(currentPath);
        }, 10);
    }

    highlightActiveNavItems(currentPath) {

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });


        const navItems = document.querySelectorAll('.nav-item:not(.sub-item)');
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPath) {
                item.classList.add('active');
            }
        });


        if (currentPath === '/profit') {
            document.querySelector('a[href="/profit"]')?.classList.add('active');
        } else if (currentPath === '/costs') {
            document.querySelector('a[href="/costs"]')?.classList.add('active');
        }
    }
}