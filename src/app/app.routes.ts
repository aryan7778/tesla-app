import { Routes } from '@angular/router';
import { ChangeConfigComponent } from '../change-config/change-config.component';
import { SelectModelColorComponent } from '../select-model-color/select-model-color.component';
import { SummaryComponent } from '../summary/summary.component';

export const routes: Routes = [
    {
        path: 'models', component: SelectModelColorComponent
    },

    {   path: 'config', component: ChangeConfigComponent

    },
    
    {   path: 'summary', component: SummaryComponent

    }

];
