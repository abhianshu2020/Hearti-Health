import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbButtonModule, NbInputModule, NbRadioModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HealthPredictorComponent } from './health-predictor/health-predictor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagesComponent,
    HealthPredictorComponent,
  ],
})
export class PagesModule {
}
