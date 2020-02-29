import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnChanges {

  @Input() test;
  constructor() {
    console.log("Child1 constructor");
  }

  ngOnInit(){
    console.log("Child1 OnInit");
  }

  ngOnChanges(){
    console.log("Child1 OnChanges");
  }


}
