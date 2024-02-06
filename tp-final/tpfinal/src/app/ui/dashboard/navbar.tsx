'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHospitalUser, faClock } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function NavBar() {
    const pathname = usePathname();

    return (
        <nav className="bg-emerald-950 p-4">
            <div className="flex justify-between items-center">
                <div className="logo">
                    <Link href="/" >
                        <Image
                            src={"/medical-team.png"}
                            width={40}
                            height={40}
                            alt="Logo de l'application"
                        />
                    </Link>
                </div>

                <div className="navigation flex">
                    <Link href="/accueil" className={clsx('mr-2 p-3', { 'bg-teal-900 text-white rounded-2xl': pathname === "/accueil" })} >
                        <span className='flex items-center'>
                            <FontAwesomeIcon width={20} icon={faHouse} className='mr-1' />
                            Accueil
                        </span>
                    </Link>
                    <Link href="/patient" className={clsx('mr-2 p-3', { 'bg-teal-900 text-white rounded-2xl': pathname === "/patient" })} >
                        <span className='flex items-center'>
                            <FontAwesomeIcon width={20} icon={faHospitalUser} className='mr-1' />
                            Patients
                        </span>
                    </Link>
                    <Link href="/rendez-vous" className={clsx('mr-2 p-3', { 'bg-teal-900 text-white rounded-2xl': pathname === "/rendez-vous" })} >
                        <span className='flex items-center'>
                            <FontAwesomeIcon width={20} icon={faClock} className='mr-1' />
                            Rendez-vous
                        </span>
                    </Link>
                </div>

                <div className="doctor-login">
                    {/* TODO : FAIRE L'AUTHENTIFICATION */}
                </div>

            </div>
        </nav>
    )
}

export default NavBar;