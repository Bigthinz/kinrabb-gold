import { Nav,Wrap,NavOptions } from "./Navbar.styled"
import Image from 'next/image'
import Link from "next/link"

const Navbar = () => {
  return (
    <Nav>
        <Wrap>
            <div>
                <Image src='/images/logo.png' alt='logo' width={30} height={30} />
            </div>
            <NavOptions>

                
                {/* <div className="links">
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
                            <Link href=''><a>Sign In</a></Link>
                        </span>
                        <span className="signup">
                            <Link href=''><a>Sign Up</a></Link>
                        </span>

                    </div>
                </div> */}
            </NavOptions>

            
        </Wrap>
    </Nav>
  )
}

export default Navbar