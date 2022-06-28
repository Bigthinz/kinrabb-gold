import { Nav,Wrap,NavOptions } from "./Navbar.styled"
import Image from 'next/image'
import Link from "next/link"

const Navbar = () => {
  return (
    <Nav>
        <Wrap>
            <div className="logo-div">
                <Image src='/images/logo-sm.png' alt='logo'  width={70} height={70} objectFit='contain' priority/>
            </div>
            <NavOptions>                
                <div className="links">
                    <ul>
                        <li><Link href=''><a>About us</a></Link></li>
                        <li><Link href=''><a>Air freight</a></Link></li>
                        <li><Link href=''><a>Sea freight</a></Link></li>
                        <li>Parking</li>
                        <li><Link href=''><a>Imports</a></Link></li>
                        <li><Link href=''><a>Tracking</a></Link></li>
                        <li><Link href=''><a>Safe keeping</a></Link></li>                        
                    </ul>
                </div>
                    
                <div className="auth">
                    <div className="auth-wrap">
                        <span className="signin">
                            <Link href='/signup'><a>Sign In</a></Link>
                        </span>
                        <span className="signup">
                            <Link href='/login'><a>Sign Up</a></Link>
                        </span>
                    </div>
                </div>
            </NavOptions>      
        </Wrap>
    </Nav>
  )
}

export default Navbar