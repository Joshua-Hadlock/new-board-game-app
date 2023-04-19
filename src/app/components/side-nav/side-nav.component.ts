import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '-100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true }),
      ])
    ])
  ]
})
export class SideNavComponent {
  menuItems: MenuItem[] = [
    {
        name: 'Search',
        route: '/search',
        icon: 'search'
    },
    {
        name: 'Owned',
        route: '/owned',
        icon: 'verified_outlined',
    },
    {
        name: 'Wishlist',
        route: '/wishlist',
        icon: 'switch_access_shortcut'
    },
];


prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
}
