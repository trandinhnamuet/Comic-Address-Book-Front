import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5227/api"

  constructor(private http:HttpClient) { }

  login(val:any):Observable<any[]> {
    return this.http.post<any>(this.APIUrl+'/Login', val);
  }

  addComic(val:any){
    return this.http.post(this.APIUrl+'/ComicLink', val);
  }

  // getLatestChapters(): Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl);
  // }

  getLatestChapters(): Observable<any> {
    return this.http.get<any>(`${this.APIUrl}/HomePage`);
  }

  
}
