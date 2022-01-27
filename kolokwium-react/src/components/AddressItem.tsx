import React from 'react';
import { Address } from '../models/Address';

interface Props{
    address:Address;
}

const AddressItem = ( { address}:Props ) => {
  return <div>{address.id} {address.street} {address.zipCode} {address.number} {address.city}</div>;
};

export default AddressItem;
