import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from 'next-auth';

export const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "Email and Password",
            credentials: {},
            async authorize(credentials, req) {
                if(credentials.email === 'shiro@gmail.com' && credentials.password === '123'){
                    return{
                        name: 'shiro',
                        age: '23'
                    }
                }
                throw new Error('Something went wrong!Check your email or password again!');
                // fetch API or query DB here
                // const res = await fetchAPI(credentials);
                // if (res.status !== 200) {
                //     throw new Error('Wrong credential')
                // }
                // return res;
            },
            pages:{
                signIn: "/auth/login"
            }
        })
    ]
}

export default NextAuth(authOptions)