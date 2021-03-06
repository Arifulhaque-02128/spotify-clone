import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify"


const newAccessToken = async ( token ) => {
    try {
        spotifyApi.setAccessToken(token.accessToken)
        spotifyApi.setRefreshToken(token.refreshToken)

        const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
        console.log("Refreshed Token or New Acess Token : ", refreshedToken);

        return{
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refresh_token 
        }

    } catch (error) {
        console.error(error)
        return{
            ...token, 
            error: "refreshAccessTokenError"
        }
    }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL
    }),
    // ...add more providers here
  ],

  secret: process.env.JWT_SECRET,
  pages: {
      signIn: '/login'
  },

  callbacks: {
      async jwt({ token, user, account }){

        // initial Sign In
          if( account && user ){
              return {
                  ...token,
                  accessToken: account.access_token,
                  accessTokenExpires: account.expires_at * 1000, 
                  refreshToken: account.refresh_token,
                  username: account.providerAccountId
              }
          }

        // return the previous token if the access token has not expired yet
          if(Date.now() < token.accessTokenExpires){
              console.log("Existing toke is valid still.")

              return token
          }

        // Acess Token Expires, try to update it...
          return newAccessToken(token)
      },

      async session({ session, token }) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.username = token.username;
  
        return session
      }
  }
});

