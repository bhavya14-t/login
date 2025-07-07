// import { gql } from '@apollo/client';

export const LOGIN_MUTATION = `
mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) { 
        jwt
        user {
            id
            username
            email
        }
    }
}

`;
export const SIGNUP_MUTATION = `
mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input){
        jwt
        user  {
            id
            username
            email
        }
    }
}
`;