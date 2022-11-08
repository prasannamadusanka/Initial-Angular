import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-user-lsit',
  templateUrl: './app-user-lsit.component.html',
  styleUrls: ['./app-user-lsit.component.css']
})
export class AppUserLsitComponent implements OnInit {
  names:String[];

  constructor() { 
    this.names= ['prasanna','madhuni','roneki'];
  }

  ngOnInit(): void {
  }

}
