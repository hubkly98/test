import React from "react";
import { Address } from "../models/Address";
import AddressItem from "./AddressItem";

interface Props {
  address: Address[];
}

const AddressList = ({ address }: Props) => {
  return (
    <div>
      {address.map((add) => {
        return <AddressItem key={add.id} address={add} />;
      })}
    </div>
  );
};

export default AddressList;
