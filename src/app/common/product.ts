export class Product {
    // the proprities should be the exact same as the ones in Product in spring boot
    constructor(public id:number,
        public name:string,
        public description: string,
        public unitPrice: number,
        public imageUrl:string,
        public active: boolean,
        public unitsInStock:number,
        public datecreated : Date,
        public lastUpdate: Date
        ){}
}
