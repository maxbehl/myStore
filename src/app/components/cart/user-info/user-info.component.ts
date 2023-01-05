import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  @Output() checkout: EventEmitter<{fullName:string,address:string,creditCard:string}> = new EventEmitter();

  constructor() { }
  buyer: {
    fullName: string,
    address: string,
    creditCard: string
  } = {
    fullName: '',
    address: '',
    creditCard: ''
  }
  validFullName:boolean=true;
  validAddress:boolean=true;
  validCreditCard:boolean=true;

  ngOnInit(): void {
  }
  onSubmit():void{
    this.checkout.emit(this.buyer);
    this.buyer.fullName='';
    this.buyer.address='';
    this.buyer.creditCard='';
  }

  validateFullName(): void{
    if(this.buyer.fullName.length < 9){
      this.validFullName=false;
    } else {
      this.validFullName=true;
    }
  }
  validateAddress(): void{
    if(this.buyer.address.length < 10){
      this.validAddress=false;
    } else {
      this.validAddress=true;
    }
  }
  validateCreditCard(): void{
    if(this.buyer.creditCard.toString().length===16){
      this.validCreditCard=true;
    } else {
      this.validCreditCard=false;
    }
  }
}