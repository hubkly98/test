import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/Address';
const API_URL = "http://localhost:5000/address"
@Injectable({
providedIn: 'root'
})
export class AddressService {
constructor(private http:HttpClient) { }
getAddresses():Observable<Address[]>{
return this.http.get<Address[]>(API_URL);
}
addAddress(address:Address):Observable<Address>{
return this.http.post<Address>(API_URL,address);
}

editAddress(address:Address):Observable<Address>{
return this.http.put<Address>(API_URL,address);
}
}