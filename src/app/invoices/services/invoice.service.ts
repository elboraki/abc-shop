import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
const BASE_URL="http://localost:3000/api/"
export class InvoiceService {
  constructor(private httpClient:HttpClient) { }

  getInvoices():Observable<Invoice[]>{
    return this.httpClient.get(`${BASE_URL}/invoices`)
  }
}
