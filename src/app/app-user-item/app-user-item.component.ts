import { Component, Input, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-app-user-item',
  templateUrl: './app-user-item.component.html',
  styleUrls: ['./app-user-item.component.css']
})
export class AppUserItemComponent implements OnInit {

  @Input() name: any
  constructor() { 
  }

  ngOnInit(): void {
  }

}
