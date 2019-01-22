import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];


  myHero = this.heroes[0];
  rows;
  output;
  products;
  loading: boolean;
  error: string;

  constructor(private http: HttpClient,private userService: UserService) { }

  ngOnInit() {
    console.log("checking A", this.heroes);
    console.log("checking length", this.heroes.length);
    console.log("checking to push", this.heroes.push("raghu"));
    
   this.getData();
  }


  getData() {
  
    this.http.get('./assets/TitleData.json')
      .subscribe((response) => {
        //this.EmployeeDetails = response as string[];
        this.rows = response;
        this.products = JSON.stringify(response);
        console.log(JSON.stringify(this.rows));
      });
   
  }
  getUsers(){
    this.loading = true;

    this.userService.getUsers().subscribe(
      users => {
        console.log(users);
        this.output= JSON.stringify(users);
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  }

  

