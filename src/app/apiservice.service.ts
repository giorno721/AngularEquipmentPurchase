import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiUrl = 'https://localhost:7031/api/'
  constructor(private http : HttpClient) { }

  // Equipment
  getEquipmentList(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'Equipment')
  }

  addEquipment(equip : any): Observable<any>{
    const httpOptions = { headers : new HttpHeaders({ 'Content-Type': 'application/json' })}
    return this.http.post<any>(this.apiUrl + 'Equipment', equip, httpOptions)
  }

  updateEquipment(id: number, equip: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<any>(`${this.apiUrl}Equipment/${id}`, equip, httpOptions);
  }

  // Manager
  getManagerList(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'Manager')
  }

/*
  addManager(manager : any): Observable<any>{
    const httpOptions = { headers : new HttpHeaders({ 'Content-Type': 'application/json' })}
    return this.http.post<any>(this.apiUrl + 'Manager', manager, httpOptions)
  }
*/

  addManager(manager: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Manager', manager);
  }

  updateManager(id: number, manager: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}Manager/${id}`, manager);
  }

/*  updateManager(id: number, manager: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<any>(`${this.apiUrl}Manager/${id}`, manager, httpOptions);
  }*/
}
