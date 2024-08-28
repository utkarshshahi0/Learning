import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommanService {
   API = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http:HttpClient) { }

 getAPI():Observable<any>{
 return this.http.get(this.API)
 }
  
}
