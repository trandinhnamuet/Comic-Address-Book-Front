// src/app/comic.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private apiUrl = 'http://localhost:5227/api/ComicLink'; // API URL, thay đổi theo cấu hình của bạn

  constructor(private http: HttpClient) { }

  getComics(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
