import gql from 'graphql-tag';


export const LOGIN_USER = gql`
    mutation loginUser( $email: String!, $password: String! )
    {
        login( email: $email, password: $password ) {
            token
            user {
                _id
                username
            }
        }
    }
`;


export const ADD_USER = gql `
    mutation addUser( $ysername: String!, $password: String!, $email: String! )
    {
        addUser( username: $username, password: $password, email: $email ) {
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    authors
                    bookId
                    image
                    link
                    title
                    description
                }
            }
            token
        }
    }
`;


export const SAVE_BOOK = gql `
    mutation saveBook( $input: savedBook! )
    {
        SaveBook( input: $input )
        {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
`;


export const REMOVE_BOOK = gql `
    mutation removeBook( $bookId: ID! ) {
        removeBook( bookId: $bookId ) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
`;