import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { SelectModelColorComponent } from '../select-model-color/select-model-color.component';
import { ChangeConfigComponent } from '../change-config/change-config.component';
import { TeslaConfigService } from '../service/tesla-config.service';
import { LayoutComponent } from '../layout/layout.component';
import { SummaryComponent } from '../summary/summary.component';
import { CommonModule } from '@angular/common';

@NgModule({ 
    declarations: [ 
      AppComponent,
      SelectModelColorComponent,
      ChangeConfigComponent,
      SummaryComponent,
      LayoutComponent
    ], 
    imports: [ 
      BrowserModule, 
      FormsModule,
      HttpClientModule,
      CommonModule
    ], 
    providers: [
        TeslaConfigService
    ], 
    bootstrap: [AppComponent] 
  }) 
  export class AppModule { } 