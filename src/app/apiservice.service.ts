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

  updateEquipment(equip : any): Observable<any>{
    const httpOptions = { headers : new HttpHeaders({ 'Content-Type': 'application/json' })}
    return this.http.put<any>(this.apiUrl + 'Equipment', equip, httpOptions)
  }

  deleteEquipment(equipId : number): Observable<any>{
    const httpOptions = { headers : new HttpHeaders({ 'Content-Type': 'application/json' })}
    return this.http.delete<number>(this.apiUrl + 'Equipment' + equipId, httpOptions)
  }
}
