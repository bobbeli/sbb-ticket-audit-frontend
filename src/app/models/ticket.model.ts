export class Ticket {
    _id: string;
    CreationDate: any;
    Type: string;
    Price: number;

    constructor(_id?: string,
        CreationDate?: any,
        Type?: string,
        Price?: number) {
        this._id = _id;
        this.CreationDate = CreationDate;
        this.Type = Type;
        this.Price = Price;

    }
}
