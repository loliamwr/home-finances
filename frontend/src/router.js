import {Dashboard} from "./components/dashboard";
import {Login} from "./components/login";
import {Register} from "./components/register";
import {Transactions} from "./components/transactions";

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
                route: '/transactions',
                title:'Доходы и расходы',
                filePathTemplate:'/templates/transactions.html',
                useLayout:'/templates/layout.html',
                load: ()=>{
                    new Transactions();
                }
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

                if(newRoute.load && typeof newRoute.load === 'function'){
                   newRoute.load();
                }
        }else{
            console.log('No route found');

        }
    }
}
