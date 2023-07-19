import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { IMenuItem } from '../types/menu-item';
import { Subscription, filter, shareReplay } from 'rxjs';

@Component({
  selector: 'wivipro-horizontal-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
})
export class HorizontalMenuComponent implements OnInit, OnDestroy {
  @Input() class = '';
  @Input() showHome = false;
  @Input() right = false;
  @Input() menuItems: IMenuItem[] = new Array<IMenuItem>();

  routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.right) {
      this.routerSub = this.router.events
        .pipe(
          filter((e) => e instanceof NavigationEnd),
          shareReplay({ bufferSize: 1, refCount: true })
        )
        .subscribe((r: any) => {
          this.showHome = r.url !== '/home';
        });
    }
  }

  ngOnDestroy(): void {
    if (this.routerSub) this.routerSub.unsubscribe();
  }
}
