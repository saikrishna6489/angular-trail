import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home : {
    title: String,
    target: String,
  };

  link = ["Nature","/Home"];
  index = 0;
  active ;

  constructor(private config:ConfigService) { }

  ngOnInit(): void {
    this.home = this.getHome();
  }

  getlink(){
    this.index++;
    this.active = this.link[this.index-1]
    if (this.index > this.link.length - 1){
      this.index = 0;
    }
  }

  getHome(){
    return this.config.getConfig().home;
  }

}