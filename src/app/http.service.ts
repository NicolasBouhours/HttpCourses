import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/Http';

import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://angular2-course-88a18.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  getOwnData() {
    return this.http.get('https://angular2-course-88a18.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://angular2-course-88a18.firebaseio.com/data.json', body, {
      headers: headers 
    }).map((data: Response)=> data.json())
    .catch(this.handleError);
  }

  private handleError (error: any) {
    console.log('error handler');
    console.log(error);
    return Observable.throw(error.json());
  }
}
