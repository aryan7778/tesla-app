import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeslaModelModel } from '../models/tesla-model.model';
import { ModelColorModel } from '../models/model-color.model';

import { TeslaConfigService } from '../service/tesla-config.service';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-select-model-color',
  standalone: true,
  imports: [FormsModule, AsyncPipe, LayoutComponent, CommonModule],
  templateUrl: './select-model-color.component.html',
  styleUrl: './select-model-color.component.scss'
})
export class SelectModelColorComponent implements OnInit{
  
  modelsObserver!: Promise<TeslaModelModel[]>;
  models!: TeslaModelModel[];

  modelCode: string | null = null;
  colorCode: string | null = null;

  get selectedModel() {
    return this.models?.find(item => item.code === this.modelCode);
  }

  constructor(private readonly configService: TeslaConfigService) { }

  ngOnInit() {
    this.modelsObserver = this.configService.getModels();
    this.modelsObserver.then(models => this.models = models);

    this.setSelectedOptions();
  }

  modelSelected() {
    this.colorCode = this.selectedModel ? this.selectedModel?.colors[0]?.code : null;
    this.saveConfig();

    if (this.configService.configsSubject.value) {
      this.configService.configsSubject.next(null);
    }
  }

  saveConfig() {
    const selection = {
      model: this.selectedModel,
      colorCode: this.colorCode
    } as ModelColorModel;

    this.configService.modelSubject.next(selection);
  }

  private setSelectedOptions() {
    const selection = this.configService.modelSubject.value;

    if (selection) {
      this.modelCode = selection.model.code;
      this.colorCode = selection.colorCode;
    }
  }


}
