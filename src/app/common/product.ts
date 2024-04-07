export class Product {
    constructor(public id:number,
        public name:string,
        public description: string,
        public unitPrice: number,
        public imageURL:string,
        public active: boolean,
        public unitInStock:number,
        public datecreated : Date,
        public lastUpdate: Date
        ){}
}
