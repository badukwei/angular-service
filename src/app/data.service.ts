import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://api.example.com/';
  cachedData!: any[];

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any[]> {
    if (this.cachedData) {
      return of(this.cachedData);
    } else {
      return this.http.get<any[]>(this.apiUrl + 'data').pipe(
        tap((data) => {
          this.cachedData = data;
        })
      );
    }
  }
}
