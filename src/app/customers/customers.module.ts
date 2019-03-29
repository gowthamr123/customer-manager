import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostumersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CustomersComponent, CustomerCardComponent],
  imports: [
    CommonModule,
    CostumersRoutingModule,
    FontAwesomeModule,
    SharedModule,
    NgxPaginationModule
  ],
})
export class CustomersModule { }
