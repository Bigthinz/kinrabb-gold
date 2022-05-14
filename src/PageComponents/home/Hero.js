import { PageHero } from "./Hero.styled"
import Image from 'next/image'
import Navbar from "../../Components/Nabar/Navbar"
import Link from "next/link"
import { HeroImg,HeroInfo, HeroTitle } from "./Hero.styled"

const Hero = () => {
  return (
    <PageHero>
       
            <Navbar/>
            <div className="wrap">
            <HeroInfo>
                <HeroTitle>
                    <h1> New In Goldguard?</h1>
                    {/* <Link href='#' passHref>
                      <button>     
                        <a>Open your <br/> free account now</a>           
                      </button>
                    </Link> */}
                   {/* <p><Link href=''><a>Need help?</a></Link></p> */}
                </HeroTitle>
                <HeroImg>
                    <div className="banner">
                        <Image src='/images/3d-gold.png' alt='' width='500' height='500' layout='intrinsic' objectFit="contain"/>
                        <h1>Keep an eye on <span>Gold</span></h1>
                    </div> 
                    <Link href='' passHref>
                      <button >open your free account now</button>
                    </Link>
                </HeroImg>
            </HeroInfo>
        </div>

    </PageHero>
  )
}

export default Hero

