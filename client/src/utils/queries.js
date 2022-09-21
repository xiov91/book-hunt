import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        books {
            bookId
            title
            author
            description
            image
            link
        }
    }
    
}
`