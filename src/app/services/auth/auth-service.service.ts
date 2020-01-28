import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authURL = 'http://ec2-52-201-229-245.compute-1.amazonaws.com:3000/api/User/';

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  userData: any;

  login(userId){
    return this.httpClient.get('http://ec2-52-201-229-245.compute-1.amazonaws.com:3000/api/User/' + userId);
  }

  register(userData){
    return this.httpClient.post('http://ec2-52-201-229-245.compute-1.amazonaws.com:3000/api/User/', userData);
  }

  checkIfLoggedIn(userId){
    const userData =  this.httpClient.get('http://ec2-52-201-229-245.compute-1.amazonaws.com:3000/api/User/' + userId)
    return userData;
  }

}
