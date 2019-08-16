import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColorPickerService } from 'src/app/shared/helpers/color-picker.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  constructor(private titleService: Title, private colorPicker: ColorPickerService){}


  ngOnInit() {
  }

  getTitle(){
    return this.titleService.getTitle();
  }

  getColorTheme(){
    return this.colorPicker.getColorClass().value;
  }

  getColorHeader(){
    return `header-${this.getColorTheme()}`;
  }

  pickColor(color: string){
    let colorTheme = '';
    
    if(color !== ''){
      colorTheme = `-${color}`
    }
    this.colorPicker.setColorClass(
      `app-theme${colorTheme}`
    )
  }

}
