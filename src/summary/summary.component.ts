import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, UpperCasePipe, CommonModule } from '@angular/common';

import { ModelColorModel } from '../models/model-color.model';
import { ConfigModel } from '../models/config.model';
import { TeslaConfigService } from '../service/tesla-config.service';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, LayoutComponent, CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit{
  readonly additionalPackagePrice = 1000;

  modelSelection!: ModelColorModel;
  configsSelection!: ConfigModel;

  get selectedColor() {
    return this.modelSelection?.model?.colors?.find(item => item?.code === this.modelSelection?.colorCode);
  }

  constructor(
    private readonly router: Router,
    private readonly configurationService: TeslaConfigService
  ) { }

  ngOnInit() {
    const model = this.configurationService.modelSubject.value;
    const configs = this.configurationService.configsSubject.value;

    if (model) {
      this.modelSelection = model;
    } else {
      this.router.navigateByUrl('/models');
    }

    if (configs) {
      this.configsSelection = configs;
    }
  }

  getTotalPrice() {
    let total = this.configsSelection.config.price;

    if (this.selectedColor?.price) {
      total += this.selectedColor.price;
    }

    if (this.configsSelection.towHitch) {
      total += this.additionalPackagePrice;
    }

    if (this.configsSelection.yoke) {
      total += this.additionalPackagePrice;
    }

    return total;
  }
}
