const { Book, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async(parent, args, context ) => {
            if ( context.user ) {
                const userData = await User.findOne({})
                    .select( '-__v -password' )
                    .populate( 'books' )

                    return userData;
            };

            throw new AuthenticationError( 'User is not logged in!!' );
        }
    },

    Mutation: {
        addUser: async( parent, args ) => {
            const user = await User.create( args );
            const token = signToken( user );

            return { token, user };
        },
        login: async( parent, { email, password } ) => {
            console.log( 'resolvers.js' );

            const user = await User.findOne({ email });

            console.log( 'resolvers.js' );
            console.log( 'email: ' + email );
            console.log( 'password: ' + password );

            If (!user) {
                
            }
        }
    }
}