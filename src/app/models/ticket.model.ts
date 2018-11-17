export class Ticket {
    _id: string;
    creationDate: any;
    type: string;
    price: number;

    constructor(_id?: string,
        creationDate?: any,
        type?: string,
        price?: number) {
        this._id = _id;
        this.creationDate = creationDate;
        this.type = type;
        this.price = price;

    }
}
