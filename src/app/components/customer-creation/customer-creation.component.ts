import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'customer-creation',
  templateUrl: './customer-creation.component.html',
  styleUrls: ['./customer-creation.component.scss']
})
export class CustomerCreationComponent implements OnInit {

  customer: Customer;

  showSucessMessage: boolean;
  serverErrorMessages: String;

  //Use the services with dependency injection
  constructor(private customerService: CustomerService, private router: Router) { 

    this.customer = new Customer();
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {

    this.customerService.createCustomer(this.customer).subscribe(
      data => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        setTimeout(() => this.gotoCustomerList(), 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  //reset the form after submition
  resetForm(form: NgForm) {
    form.resetForm();
    this.serverErrorMessages = '';
  }

  gotoCustomerList() {
    this.router.navigate(['/changegap/customers']);
  }





}
