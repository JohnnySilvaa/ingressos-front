import { Component, OnInit } from '@angular/core';

import { TitleService } from './shared/helpers/title.service';
import { ColorPickerService } from './shared/helpers/color-picker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ingressos';
  themeClass;


  constructor(private titleService: TitleService, private colorPicker: ColorPickerService ) {}

  ngOnInit() {
   this.titleService.getTitle();
   this.themeClass = this.colorPicker.getColorClass();
  }
}