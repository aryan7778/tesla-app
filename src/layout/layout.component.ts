import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeslaConfigService } from '../service/tesla-config.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(private readonly configService: TeslaConfigService) { }

  get modelSelection() {
    return this.configService.modelSubject.value;
  }

  get modelImage() {
    return `https://interstate21.com/tesla-app/images/${this.modelSelection?.model.code}/${this.modelSelection?.colorCode}.jpg`;
  }
}
