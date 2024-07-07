import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23linf1LryhKyXO5DQ',
      clientSecret: '508becc31b5b52b538134711f7c85079cc51ebea',
    }),
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 