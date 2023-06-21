import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})

export class InvoiceService {
  BASE_URL="http://localost:3000/api/"
  constructor(private httpClient:HttpClient) { }

  getInvoices():Observable<Invoice[]>{
    return this.httpClient.get<Invoice[]>(`${this.BASE_URL}/invoices`)
  }
}
