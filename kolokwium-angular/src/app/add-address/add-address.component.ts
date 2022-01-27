import { Address } from "./../models/Address";
import { Component, OnInit } from "@angular/core";
import { AddressService } from "../service/address.service";

@Component({
  selector: "app-add-address",
  templateUrl: "./add-address.component.html",
  styleUrls: ["./add-address.component.css"],
})
export class AddAddressComponent implements OnInit {
  constructor(private addressService: AddressService) {}
  ngOnInit(): void {}
  addAddress(
    idForm: string,
    streetForm: string,
    zipCodeForm: string,
    numberForm: string,
    cityForm: string
  ) {
    var address: Address = {
      id: Number(idForm),
      street: streetForm,
      zipCode: zipCodeForm,
      number: Number(numberForm),
      city: cityForm,
    };
    this.addressService
      .addAddress(address)
      .subscribe((response) => console.log(response));
    alert("Student added!");
    this.addressService.getAddresses();
  }
}
