import { gql } from '@apollo/client';

export const GET_USERS = gql`
query {
    usersPermissionUsers {
        data {
        id
        attributes {
        username
        email
        role {
            name
        }
    }
}
    }
}
`;