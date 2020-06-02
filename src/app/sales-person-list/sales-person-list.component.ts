import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("ali","rahemi","alirahemi@gmail.com",25000),
    new SalesPerson("karen","rahemi","alirahemi@gmail.com",42500),
    new SalesPerson("mehdi","naseri","alirahemi@gmail.com",52400),
    new SalesPerson("asal","veisi","alirahemi@gmail.com",41200)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
