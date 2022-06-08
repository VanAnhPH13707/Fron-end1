
export type TypeLogin = {
    email: string,
    password: string
};
export type TypeLoginResponse = {
    token: string,
    user:{
        email: string
    }
}