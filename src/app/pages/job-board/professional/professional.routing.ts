import {Routes} from '@angular/router';

import {AuthGuard} from '../../../shared/auth-guard/auth.guard';
import {ProfessionalComponent} from './professional.component';
import { AppOportunitiesComponent } from './oportunities/app.oportunities.component';


export let HojaVidaRoutes: Routes;
HojaVidaRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProfessionalComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'oportunidades',
                component: AppOportunitiesComponent,
                //canActivate: [AuthGuard]
            },
        ],
    },
];
