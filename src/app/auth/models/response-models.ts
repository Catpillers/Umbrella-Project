
export interface RegisterResponseModel {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localid: string;
}

export interface LoginResponseModel {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localid: string;
    registered: string;
}
