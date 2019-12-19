import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};
@Injectable()
export class ServiceService {

  constructor(private httpClient: HttpClient) { }
  getValidation(details){
    return this.httpClient.post("https://41mk0fhpyg.execute-api.us-east-1.amazonaws.com/dev", details)
  }
}
