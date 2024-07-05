import { Routes } from '@angular/router';
import { PortWebsiteModule } from './port-website/port-website.module';
export const routes: Routes = [
    {path:'port-website',loadChildren:()=>import('./port-website/port-website.module').then(m=>m.PortWebsiteModule)}
];
