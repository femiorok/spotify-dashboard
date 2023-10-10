import SpotifyProvider from 'next-auth/providers/spotify';
import NextAuth from 'next-auth';

const scopes = [
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-library-read',
  'user-modify-playback-state',
  'playlist-read-private',
  'playlist-read-collaborative',
];

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID ?? '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope: scopes.join(' '),
        },
      },
    }),
  ],
});

export { handler as GET, handler as POST };
