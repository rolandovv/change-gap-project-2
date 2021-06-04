import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { CustomerCreationComponent } from './components/customer-creation/customer-creation.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {
  //   path: 'signup', component: UserComponent,
  //   children: [{ path: '', component: SignUpComponent }]
  // },
  {
    path: 'changegap', component: ContainerComponent,
    children: [{ path: '', component: HomeComponent }]
  },

  {
    path: 'changegap', component: ContainerComponent,
    children: [{ path: 'create', component: CustomerCreationComponent }]
  },
  {
    path: 'changegap', component: ContainerComponent,
    children: [{ path: 'customers', component: CustomerListComponent }]
  },
  {
    path: 'changegap', component: ContainerComponent,
    children: [{ path: 'customer', component: CustomerComponent }]
  },
  // {
  //   path: 'changegap/create', component: CustomerCreationComponent
  // },
  // {
  //   path: 'changegap/customers', component: CustomerListComponent
  // },
  // {
  //   path: 'changegap/customer', component: CustomerComponent
  // },
  // {
  //   path: 'changegap/', component: HomeComponent
  // },
  {
    path: '', redirectTo: '/changegap', pathMatch: 'full'
  },
  {
		path: "**",
		redirectTo: "/changegap"
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
