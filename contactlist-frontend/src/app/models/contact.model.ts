export class Contact {
    _id?: string;
    first_name: string;
    last_name: string;
    phone_number: string;

    constructor(first_name: string, last_name: string, phone_number: string)  {
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
    }
}