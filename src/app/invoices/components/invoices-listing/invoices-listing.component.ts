import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoices-listing',
  templateUrl: './invoices-listing.component.html',
  styleUrls: ['./invoices-listing.component.scss']
})
export class InvoicesListingComponent implements OnInit {

  constructor(private invoiceService:InvoiceService) { }

  displayedColumns: string[] = ['item', 'qte', 'date', 'due', 'rate', 'tax','action'];
  dataSource: Invoice[] = [];

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe(res=>{
      console.log("result Invoices: ",res);
      this.dataSource=res
    },err=>{
      console.log("error =>",err);
      
    })


  }

}
