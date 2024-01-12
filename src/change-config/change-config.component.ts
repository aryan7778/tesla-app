import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe , CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfigModel } from '../models/config.model';
import { ModelOptionModel } from '../models/model-option.model';
import { TeslaConfigService } from '../service/tesla-config.service';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-change-config',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, LayoutComponent, CommonModule],
  templateUrl: './change-config.component.html',
  styleUrl: './change-config.component.scss'
})
export class ChangeConfigComponent implements OnInit{
  
  optionsObserver!: Promise<ModelOptionModel>;
  options!: ModelOptionModel;

  configId: number | null = null;
  includeTow = false;
  includeYoke = false;

  get selectedConfig() {
    return this.options.configs?.find(item => item.id === this.configId);
  }

  constructor(
    private readonly router: Router,
    private readonly configService: TeslaConfigService
  ) { }

  ngOnInit() {
    const selectedModel = this.configService.modelSubject.value;
    const modelCode = selectedModel?.model.code;

    if (modelCode) {
      this.configService.getModelOptions(modelCode).then(options => this.options = options);
    } else {
      this.router.navigateByUrl('config');
    }

    this.setSelectedOptions();
  }

  saveConfig() {
    if (!this.selectedConfig) {
      return;
    }

    const selection = {
      config: this.selectedConfig,
      towHitch: this.includeTow,
      yoke: this.includeYoke
    } as ConfigModel;

    this.configService.configsSubject.next(selection);
  }

  private setSelectedOptions() {
    const selection = this.configService.configsSubject.value;

    if (selection) {
      this.configId = selection.config.id;
      this.includeTow = selection.towHitch;
      this.includeYoke = selection.yoke;
    }
  }


}
