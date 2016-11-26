import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/Http';

import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://angular2-course-88a18.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

}
