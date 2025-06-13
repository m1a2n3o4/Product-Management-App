import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landingpage-component/landingpage-component';
import { WelcomepageComponent } from './components/welcomepage-component/welcomepage-component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'welcome', component: WelcomepageComponent },
];
