export interface SigninRequest {
    username: string;
    password: string;
}
export interface SigninResponse {
    token: string;
}
export interface SignupRequest {
    username: string;
    password: string;
}
export interface SignupResponse {
    token: string;
}
