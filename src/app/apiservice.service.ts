import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiUrl = 'https://localhost:7031/api/'
  constructor(private http: HttpClient, private router: Router) {}

  // Equipment
  getEquipmentList(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'Equipment')
  }

  addEquipment(equip : any): Observable<any>{
    return this.http.post<any>(this.apiUrl + 'Equipment', equip)
  }

  updateEquipment(id: number, equip: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}Equipment/${id}`, equip);
  }

  // Manager
  getManagerList(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'Manager')
  }

  addManager(manager: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Manager', manager);
  }

  updateManager(id: number, manager: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}Manager/${id}`, manager);
  }

  // Authenticate user and store token
  authenticateUser(credentials: { username: string; password: string }): Observable<any> {
    const url = `${this.apiUrl}User/authenticate`;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post<any>(url, credentials, httpOptions).pipe(
      tap((response) => this.storeToken(response?.Token)),
      catchError((error) => this.handleAuthenticationError(error))
    );
  }

  // Store token in localStorage
  private storeToken(token: string | undefined): void {
    if (token) {
      localStorage.setItem('authToken', token);
    }
  }

  // Handle authentication errors
  private handleAuthenticationError(error: any): Observable<never> {
    if (error.status === 401 || error.status === 400) { // чистить токен при неправильному вводі
      this.clearAuthToken();
      this.router.navigate(['/login']).then(r => {});
    }
    return throwError(() => error);
  }

  // Clear authentication token
  private clearAuthToken(): void {
    localStorage.removeItem('authToken');
  }
}
