import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';


@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.css'],
	providers: [ContactService]
})
export class ContactsComponent implements OnInit {

	showAddContactForm: boolean = false;
	contactList!: Contact[];
	newContact!: Contact;
	first_name = '';
	last_name = '';
	phone_number = '';

	constructor(private contactService: ContactService) { }

	ngOnInit() {
		this.getContacts();
	}

	getContacts() {
		this.contactService.getContacts()
			.subscribe((contacts: any) => {
				this.contactList = contacts;
			 });
	}

	onRestForm() {
		this.first_name = '';
		this.last_name = '';
		this.phone_number = '';
	}

	onAddContact() {
		if(this.first_name === '') {
			alert('First name is required.')
			return;
		}
		if(this.phone_number === '') {
			alert('Phone number is required');
			return;
		}
		const newContact = new Contact(
			this.first_name,
			this.last_name,
			this.phone_number
		);

		this.contactService.addContact(newContact)
			.subscribe((contact) => {
				this.contactList.push(contact);
				this.getContacts();
			}); 
	}

	onDeleteContact(contactId: any) {
		// console.log("Contact deleted. Having ID + " + contactId);
		this.contactService.removeContact(contactId)
			.subscribe( data => {

				var tempContactList = this.contactList;

				for(var i=0; i<tempContactList.length; i++) {
					if(tempContactList[i] == contactId) {
						this.contactList.splice(i, 1);
					}
				}
				this.getContacts();
				// this.contactList.splice(1);
				console.log('Contact deleted successfully');
				// this.refreshPage();
			})
	}

	refreshPage() {
		window.location.reload();
	}

}
