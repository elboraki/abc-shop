import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsListingComponent } from './clients-listing.component';

describe('ClientsListingComponent', () => {
  let component: ClientsListingComponent;
  let fixture: ComponentFixture<ClientsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
