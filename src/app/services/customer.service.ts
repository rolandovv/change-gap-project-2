import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';

// import { Customer } from '../model/customer';

import { Customer } from 'src/app/model/customer';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private restAPI_Url: string;

   //comunicate data between components using BehaviorSubject observables
   private messageSource = new BehaviorSubject('');
   currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {

  this.restAPI_Url = 'http://localhost:8080';

   }

  //http methods------
  //Find customers
  public findCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.restAPI_Url+"/customers");
  }

  //Find customer
  public findCustomer(_id: String): Observable<Customer> {
    return this.http.get<Customer>(this.restAPI_Url+"/customers/"+_id);
  }

  //Create customer
  public createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.restAPI_Url+"/create", customer);
  }

  //support methods, 
  changeMessage(message: any) {
    this.messageSource.next(message)
  }


}
