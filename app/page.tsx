import { NavMenu } from '@/components/NavMenu';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-end p-6 ">
        <NavMenu />
      </div>
    </main>
  );
}
