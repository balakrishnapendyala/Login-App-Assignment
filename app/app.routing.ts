import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/mainmenu';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {WelcomeComponent} from './home/welcome.component';

const appRoutes: Routes = [
        { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    
    { path: 'login', component: LoginComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
    
];

export const routing = RouterModule.forRoot(appRoutes);