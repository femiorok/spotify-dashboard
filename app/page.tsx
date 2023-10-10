import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import User from '@/components/User';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <User />
    </>
  );
}
