import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/Http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe(
      (data: Response) => console.log(data)
    );
  }
}
