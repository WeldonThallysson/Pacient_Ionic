

export interface IUserData {
    id: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    phone: string,
    __v: number,
    address: IAddressUsers
}


 
export interface IAddressUsers {
            geolocation: {
                lat: string,
                long: string
            },
            city: string,
            street: string,
            number: number,
            zipcode: string
        
}

export interface IParamsDetailsUsers {
    id: string
}

export interface IResponseGetDetailsUsers extends IUserData {}

export type ResponseGetAllUsers = IUserData[];
