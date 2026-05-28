import Image from "next/image";
import { Icon } from '@iconify/react';

export default function Home() {
  return (
      <main className="flex flex-col gap-3">
      <section className="flex flex-row-reverse gap-7">
        <div className="min-w-[150px] text-center">
          <h1>GingaEve</h1>
        </div>

        <Image
          src="/cloudy.jpg"
          alt="gingaeve logo"
          width={400}
          height={400}
        />
      </section>
    </main>
  );
}
