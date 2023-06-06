import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  links=[
    {
      name:"Invoices",
      url:"invoices"
    },
    {
      name:"Clients",
      url:"clients"
    }
  ]
  constructor() { }
  showFiller = false;
  ngOnInit(): void {
  }

}
