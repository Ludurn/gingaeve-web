import Image from "next/image";
import { Icon } from '@iconify/react';

export default function Home() {
  return (
      <main className="w-full flex flex-row flex-wrap place-content-evenly p-5">
        <div className="flex flex-col items-center">
          <Image
            src="/gingaeve-logo.png"
            alt="gingaeve logo"
            width={370}
            height={370}
          />
          <h1 className="font-black text-center text-green-800">GINGA<span className="text-blue-800">EVE</span></h1>
          <p className="text-blue-900">CULTURA EM MOVIMENTO | EVENTOS & PROJETOS</p>
        </div>

        <div className="max-w-[300px] flex flex-col gap-5 text-center">
          <h5 className="font-black text-green-800">Quem somos?</h5>
          <p className="text-justify">A GingaEve é uma iniciativa que promove o acesso à cultura de forma inclusiva e acessível, levando experiências artísticas, oficinas e eventos para escolas, ONGs e comunidades.<br/><br/>Nosso foco é democratizar a cultura, valorizando a diversidade e gerando conexão, criatividade e transformação social por meio da arte.</p>
        </div>
    </main>
  );
}
