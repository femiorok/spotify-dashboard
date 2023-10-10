'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Card, Avatar, Text, Button } from '@mantine/core';
import { DefaultSession } from 'next-auth';

function UserCard({ user }: { user: DefaultSession['user'] }) {
  if (!user) {
    return null;
  }
  const { image, name } = user;
  return (
    <Card withBorder padding="xl" radius="md">
      <Avatar src={image} alt={name ?? ''} radius="xl" />
      <Text ta="center" fw={500}>
        {name ?? ''}
      </Text>
      <Text size="sm">{user?.email}</Text>
      <Button variant="default" onClick={() => signOut()}>
        Log out
      </Button>
    </Card>
  );
}
export default function User() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <button type="submit" onClick={() => signIn()}>
          Sign in
        </button>
      </>
    );
  }
  return (
    <div>
      <UserCard user={session.user} />
    </div>
  );
}
