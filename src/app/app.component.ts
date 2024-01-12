import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import {Component, OnInit, OnDestroy} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeslaConfigService } from '../service/tesla-config.service';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  configsStepDisabled = true;
  summaryStepDisabled = true;

  private subscription$ = new Subscription();

  constructor(private readonly configService: TeslaConfigService) { }

  ngOnInit() {
    this.subscription$.add(
      this.configService.modelSubject.subscribe(model => this.configsStepDisabled = !model)
    )

    this.subscription$.add(
      this.configService.configsSubject.subscribe(configs => this.summaryStepDisabled = !configs)
    )
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
