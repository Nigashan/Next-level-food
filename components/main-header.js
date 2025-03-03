import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";

export default function MainHeader(){
    return( 
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className={classes.logo} href='/'>
        <Image src={logoImg} alt='a plate with food on it' priority />
        NextLevel food
        </Link>

        <nav className={classes.nav} >
            <ul>
                <li>
                    <Link href='/meals' >Browse</Link>
                </li>
                <li>
                    <Link href='/community' >Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
    )
}