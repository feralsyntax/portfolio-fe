import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navigation/navbar/navbar';
import { Footer } from './components/navigation/footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private router = inject(Router);

  showNavbar = true;

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Hide navbar if the URL includes any of these routes
        const hideRoutes = ['p/:uuid',];
        this.showNavbar = !hideRoutes.some((route) => event.url.includes(route));
      });
  }
}
