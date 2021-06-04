import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { SuportService } from 'src/app/services/suport.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer;
  customerID: any;

  serverErrorMessages: String;

  //Use the services with dependency injection
  constructor(private customerService: CustomerService, private router: Router) {

   }

  ngOnInit() {

    //subcribe to currentMessage as it returns an observable
    this.customerService.currentMessage.subscribe( 
       message =>this.customerID = message
    );

    this.findCustomer(this.customerID);
  }

  findCustomer(_id: String){    
    this.customerService.findCustomer(_id).subscribe( 
      data =>{  
        this.customer = data}, 
      err =>{
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';

      }
    );
  }

  goBack() {
    this.router.navigate(['/changegap/customers']);
  }

}
