import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact.model';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ContactService {

	url: string = 'http://localhost:3000/api/';

	constructor(private http: HttpClient) {

	}

	// Retrieving contact list
	getContacts() {
		// return this.http.get<any>('http://localhost:3000/api/contacts')
		// 	.pipe(map((response: any) => response.json()));

		var results = this.http.get<Contact[]>('http://localhost:3000/api/contacts');
		return results;
	}

	// Add contact
	addContact(newContact: Contact) {

		var customHeaders = new HttpHeaders();
		customHeaders.append('Content-Type', 'application/json');

		return this.http.post<Contact>('http://localhost:3000/api/contact', newContact, {headers: customHeaders});

		// return this.http.post('http://localhost:3000/api/contact', newContact, {headers: customHeaders})
		// 		.pipe(map((res:any) => res.json));
	}

	// delete contact

	removeContact(id: any) {

		return this.http.delete('http://localhost:3000/api/contact/' + id);

		// return this.http.delete('http://localhost:3000/api/contact/' + id)
		// 		.pipe(map((res: any) => res.json));
	}


}
