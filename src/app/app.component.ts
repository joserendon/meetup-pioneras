import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dogs Angular basics';
  random = this.RandomName();
  constructor() { }

  ngOnInit() { }

  RandomName(): string {
    let lrandom = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return `visita número ${lrandom}`;
  }
}
