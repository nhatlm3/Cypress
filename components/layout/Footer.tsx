import Link from 'next/link';
import FooterCss from './Footer.module.scss';
const Footer = ({}) => {
  return (
    <footer>
        <div className={FooterCss.fullFooter}>
          <div className={FooterCss.footerPrimary}>
            {/* Logo */}
            <div className={FooterCss.logo}>
              <div className="mb-0">
                <Link href="/" prefetch={false}>
                  <a>
                    Home
                  </a>
                </Link>
              </div>
            </div>
            {/* Content */}
            <div className={FooterCss.logo}>
              <div className="mb-0">
                <Link href="/" prefetch={false}>
                  <a>
                    Home
                  </a>
                </Link>
              </div>
            </div>
            {/* Signin/Signup */}
            <div className={FooterCss.logo}>
              <div className="mb-0">
                <Link href="login" prefetch={false}>
                  <a>
                    Home
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}
export default Footer;