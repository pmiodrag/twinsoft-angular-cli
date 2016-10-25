import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TeamRoutes } from './team/index';

const appRoutes: Routes = [
    ...TeamRoutes,
    ...HomeRoutes
    
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
