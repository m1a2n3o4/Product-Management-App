import { Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page-component/welcome-page-component';
import { SkeltonLoaderComponent } from './shared/components/skelton-loader-component/skelton-loader-component';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component';

export const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: 'skelton', component: SkeltonLoaderComponent},
    { path: 'dashboard', component: DashboardComponent}
];