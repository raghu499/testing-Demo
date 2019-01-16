import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];


  myHero = this.heroes[0];
  
  constructor() { }

  ngOnInit() {
    console.log("checking A", this.heroes);
    console.log("checking length", this.heroes.length);
    console.log("checking to push", this.heroes.push("raghu"));
    

  }

}
