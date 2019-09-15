import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, Subject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, OnDestroy {

  subs: Array<Subscription> = [];
  showSectionsDrawer$ = new BehaviorSubject(false);
  showSectionsAdd$ = new BehaviorSubject(false);
  unsubscribe$ = new Subject();

  constructor(private router: Router, private auth: AuthService) {

    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(e => {
      if (e instanceof NavigationEnd && e.urlAfterRedirects === '/sections') {
        this.auth.user$.pipe(takeUntil(this.unsubscribe$)).subscribe(user => {
          /*  Allows us to check if user has rights to add book
              Reminder this is only valid on front end, protect database */
          if (user && this.auth.canCreate(user)) {
            this.showSectionsAdd$.next(true);
          }
        });

      } else {
        this.showSectionsAdd$.next(false);
      }
    })

  }

  ngOnInit() {
  }


  onSectionsDrawerActivate(e) {
    console.log("Route Activate")
    this.showSectionsDrawer$.next(true);
  }
  onSectionsDrawerDeactivate(e) {
    console.log("Route Deactivate")
    this.showSectionsDrawer$.next(false);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
