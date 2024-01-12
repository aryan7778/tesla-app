import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TeslaModelModel } from '../models/tesla-model.model';
import { ModelColorModel } from '../models/model-color.model';
import { ConfigModel } from '../models/config.model';
import { ModelOptionModel } from '../models/model-option.model';


@Injectable({
  providedIn: 'root'
})
export class TeslaConfigService {

  modelSubject = new BehaviorSubject<ModelColorModel | null>(null);
  configsSubject = new BehaviorSubject<ConfigModel | null>(null);

  constructor() { }

  async getModels(): Promise<TeslaModelModel[]> {
    const models = await fetch("/models");
    console.log(models.json);
    return models.json();
  }

  async getModelOptions(code: string): Promise<ModelOptionModel> {
    const options = await fetch(`/options/${code}`);
    console.log(options.json);
    return options.json();
  }
}
