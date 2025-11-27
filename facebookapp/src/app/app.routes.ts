import { Routes } from '@angular/router';

import { Login } from './features/login/login';
import { Signup } from './features/signup/signup';
import { Home } from './features/home/home';
import { authGuard } from './core/guards/auth-guard';
import { AddProduct } from './features/add-product/add-product';

export const routes: Routes = [
    { 
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { 
        path: 'login',
        component: Login,
    },
    { 
        path: 'signup',
        component: Signup 
    },
    { 
        path: 'home',
        component: Home,
        canActivate: [authGuard]
    },
    { 
        path: 'addProduct',
        component: AddProduct,
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

