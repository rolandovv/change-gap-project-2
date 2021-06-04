import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { SuportService } from 'src/app/services/suport.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[]

  serverErrorMessages: String;

  //Use the services with dependency injection
  constructor(private customerServie: CustomerService, private router: Router) { }

  ngOnInit() {

    this.showCustomers();
  }

  showCustomers(){

    this.customerServie.findCustomers().subscribe(data => {
      this.customers = data;
      // console.log(data[0]);
    }, err => {

      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';

    });
  }

  //use for comunicating the _id variable to the customer-component
  sendCustomerID(_id: any){
    this.customerServie.changeMessage(_id);
  }


  //the _id parameter is passed to the customer-component when this event is click on the template  
  viewCustomer(_id: any){
    this.router.navigateByUrl("changegap/customer");
    this.sendCustomerID(_id);
  }

}
