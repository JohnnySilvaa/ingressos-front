import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ColorPickerService } from 'src/app/shared/helpers/color-picker.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  
  constructor(
    private titleService: Title, 
    private colorPicker: ColorPickerService,
    public auth: AuthService,
    private router: Router
    ){}
    routerSub: Subscription;
    public sidenav: MatSidenav;

    ngOnInit() {
      this.routerSub = this.router.events.subscribe(event => {
        if (this.sidenav && event instanceof NavigationEnd) {
          this.sidenav.close();
        }
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });

    }
    signOut() {
      this.auth.signOut();
    }
    snavToggle(snav) {
      snav.toggle();
    }
    openThemeMenu() {}

    
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
    
    ngOnDestroy(): void {
      this.routerSub.unsubscribe();
    }
  }
  