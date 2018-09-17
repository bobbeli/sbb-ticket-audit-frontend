export class Ticket {
    id: number;
    creationDate: number;
    type: string;
    price: number;


    constructor(id: number,
                creationDate: number,
                type: string,
                price: number) {
        this.id = id;
        this.creationDate = creationDate;
        this.type = type;
        this.price = price;

    }
}