import Image from "next/image";
import { roboto } from "./ui/fonts";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white p-4 flex items-center flex-col rounded">
      <div className={`${roboto.className} marker:big-title text-6xl text-emerald-800 bolder antialiased animate-bounce mt-4`}>
        DoctoBoard
      </div>
      <div className="small-title text-3xl text-emerald-700 text-center">
        La plateforme de gestion des hopitaux
      </div>
      <Image
        src={"/docto2.png"}
        alt="Doctor"
        width={300}
        height={300}
      />
      <div className="actions">
        <Link href="/connexion">
          <Button children="Connexion" className="bg-red-400 mt-2"></Button>
        </Link>
      </div>
    </div>
  );
}
