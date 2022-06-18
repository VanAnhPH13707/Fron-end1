export type Product = {
    _id: number,
    author: string,
    name: string,
    image: string,
    price: number,
    sale_price: number,
    desc: string,
    category: string,
    status: number
};
export type ProductCreate = {
    author: string,
    name: string,
    image: string,
    price: number,
    sale_price: number,
    desc: string,
    category: string,
    status: number,
    value: number
};
export type ProductCart = {
    _id: number,
    author: string,
    name: string,
    image: string,
    price: number,
    sale_price: number,
    desc: string,
    category: string,
    status: number,
    value: number
};