import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private testS:TestService) { }

  ngOnInit(): void {
  }

  goToChild1(){
    this.router.navigate(['/home/child1']);
  }

}
