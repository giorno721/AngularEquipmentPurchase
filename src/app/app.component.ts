import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularEquipmentPurchase';
  isLoginPage: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    // Update `isLoginPage` initially and whenever the route changes
    this.router.events.subscribe(() => {
      this.updateLoginPageState();
    });
  }
  private updateLoginPageState(): void {
    // Check if the current URL is `/login`
    this.isLoginPage = this.router.url === '/login';
  }
}
