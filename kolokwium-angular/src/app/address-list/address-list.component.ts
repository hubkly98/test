import { Address } from "./../models/Address";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AddressService } from "../service/address.service";

@Component({
  selector: "app-address-list",
  templateUrl: './address-list.component.html',
  styleUrls: ["./address-list.component.css"],
})
export class AddressListComponent implements OnInit {
  addresses!: Address[];
  constructor(private addressService: AddressService) {}
  ngOnInit(): void {
    this.getAddresses();
  }
  getAddresses() {
    this.addressService.getAddresses().subscribe((data) => {
      this.addresses = data;
      console.log(this.addresses);
    });
  }
}
