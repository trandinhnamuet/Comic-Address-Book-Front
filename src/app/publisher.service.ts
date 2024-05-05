import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  readonly APIUrl = "http://localhost:5227/api"

  constructor(private http: HttpClient) { }

  getComicLinksByAccountId(accountId: number): Observable<any[]> {
    console.log(`${this.APIUrl}/${accountId}`);
    return this.http.get<any[]>(`${this.APIUrl}/Publisher/${accountId}`);
  }

  deleteComic(comicID: number): Observable<any> {
    return this.http.delete(`${this.APIUrl}/ComicLink/${comicID}`);
  }
}
