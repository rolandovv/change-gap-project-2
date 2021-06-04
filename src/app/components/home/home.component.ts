import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';

import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //customers: Customer[];

  showComponent: boolean;

  constructor() { }

  ngOnInit() {

  }
}
