import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  post<T>(url: string, data: any, options: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe: 'events';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<HttpEvent<T>> {
    return this.httpClient.post<T>(url, data, options);
  }

  get<T>(url: string) {
    return this.httpClient.get(url);
  }

  put<T>(url: string, data: any){
    return this.httpClient.put(url, data);
  }
}
