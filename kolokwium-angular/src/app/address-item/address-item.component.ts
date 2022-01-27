import { Address } from "./../models/Address";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-address-item",
  templateUrl: "./address-item.component.html",
  styleUrls: ["./address-item.component.css"],
})
export class AddressItemComponent implements OnInit {
  @Input()
  address!: Address;
  constructor() {}
  ngOnInit(): void {}
}
