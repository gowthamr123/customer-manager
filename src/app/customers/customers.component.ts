import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from './customer-data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  loading = false;
  total = 0;
  page = 1;
  limit = 10;

  displayMode :string = 'cardView';
  customerData: any;
  
  constructor(private __customerService: CustomerDataService) { }

  ngOnInit() {
    this.customerData = this.__customerService.getEmployeeDetail();
    this.total = this.customerData.length;
  }

  goToPage(n: number): void {
    this.page = n;
  }


  changeDisplayMode(display: string) {
    this.displayMode = display;
  }

}
