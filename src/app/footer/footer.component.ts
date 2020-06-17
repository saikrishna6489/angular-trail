import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animate();
  }

string="Nagendra & Sai Krishna";
strArray=this.string.split("");

animate(){
	if(this.strArray.length > 0){
		document.getElementById("animation").innerHTML += this.strArray.shift();
	}
	else{
document.getElementById("animation").innerHTML="";
	 this.strArray=this.string.split("");
		}
		setTimeout(this.animate,1400);
}

}
