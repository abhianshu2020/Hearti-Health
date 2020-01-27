import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthPredictorApiService {

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
}
