import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  name:string= "King";
  constructor(private router:Router,private route:ActivatedRoute,private testS:TestService) {
    console.log("Home Constructor")
   }

  ngOnInit(){
    console.log("Home OnInit");
  }

  ngOnChanges(){
    console.log("Home OnChanges");
  }

  goToChild1(){
    this.router.navigate(['/home/child1']);
  }
  
  changeName(){
    this.name = "Jangaiah Paneti"
  }

}
