// export interface Property {
//     title: string;
//     price: number;
//     location: string;
//     description: string;
//     bedrooms: number;
//     bathrooms: number;
// }

export class Property {
    constructor(
        public title: string,
        public price: number,
        public location: string,
        public description: string,
        public bedrooms: number,
        public bathrooms: number
    ) {}
}