import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitus',
  templateUrl: './visitus.component.html',
  styleUrls: ['./visitus.component.scss']
})
export class VisitusComponent implements OnInit {
  lat = 47.249778 
  lng = 26.968750 
  constructor() { }

  ngOnInit(): void {
  }
  
}
