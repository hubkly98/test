import { Address } from './../models/Address';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html' ,
  styleUrls: [ './edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  constructor(private addressService:AddressService) { }
  ngOnInit(): void {
  }
  editAddress(id:string,street1:string,zipCode1:string,number1:string,city1:string){
  var address:Address={
  id:Number(id),
  street:street1,
  zipCode:zipCode1,
  number:Number(number1),
  city:city1
  }
  console.log(address);
  this.addressService.editAddress(address).subscribe(
  data=>{console.log(data)}
  )
  alert("Address edited!");
  this.addressService.getAddresses();
  }
  }
  