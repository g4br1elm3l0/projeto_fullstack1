export interface IUserRequest {
    name: string
    email: string
    phone: string
    password: string
}


export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
    phone?: string

}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserResponse {
    name?: string
    email?: string
    id?: string
    registeredAt?: Date
}