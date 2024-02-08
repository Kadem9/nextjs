import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/connexion',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnHome = nextUrl.pathname.startsWith('/accueil');

            if (isOnHome) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/accueil', nextUrl));
            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;