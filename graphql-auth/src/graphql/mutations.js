import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
mutation Login($input: UsersPermissionsLoginInput!){
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
export const SIGNUP_MUTATION = gql`
mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input){
        user {
            id
            username
            email
        }
        jwt
    }
}
`;