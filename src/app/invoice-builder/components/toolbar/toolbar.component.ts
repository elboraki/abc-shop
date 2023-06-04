import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() sideNavToggle=new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }
  sideNavToggleEmit(){
    this.sideNavToggle.emit();
  }

}
