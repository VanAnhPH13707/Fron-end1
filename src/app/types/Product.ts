export type Product = {
    _id: number,
    name: string
};
export type ProductCreate = {
    name: string
};
export type ProductCart = {
    _id: number,
    name: string,
    value: number
};