import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  @Output() checkoutSuccess: EventEmitter<string> = new EventEmitter();

  constructor() { }
  fullName: string='';
  address: string='';
  creditCard: number | string = '';

  ngOnInit(): void {
  }
  onSubmit():void{
    this.checkoutSuccess.emit(this.fullName);
    this.fullName='';
    this.address='';
    this.creditCard='';
  }
}