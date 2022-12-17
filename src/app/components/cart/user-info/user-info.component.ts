import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  @Output() checkout: EventEmitter<{fullName:string,address:string,creditCard:number}> = new EventEmitter();

  constructor() { }
  buyer: {
    fullName: string,
    address: string,
    creditCard: number
  } = {
    fullName: '',
    address: '',
    creditCard: 0
  }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.checkout.emit(this.buyer);
    this.buyer.fullName='';
    this.buyer.address='';
    this.buyer.creditCard=0;
  }
}