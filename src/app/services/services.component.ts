import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services:{
    title:string;
    discription:string;
    data:string;
    target:string;
  }

  constructor(private config:ConfigService) { }

  ngOnInit(): void {
    this.services=this.getSerives();
  }
  getSerives(){
    return this.config.getConfig().services;
  }
}
