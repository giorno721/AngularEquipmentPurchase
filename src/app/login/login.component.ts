import { Component } from '@angular/core';
import { ApiService} from '../apiservice.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../interceptor/auth.interceptor';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {
  }

  login(): void {
    const credentials = { username: this.username, password: this.password };
    this.apiService.authenticateUser(credentials).subscribe({
      next: () => this.router.navigate(['/manager']), // Adjust navigation route as needed
      error: () => (this.errorMessage = 'Invalid username or password!'),
    });
  }
}
