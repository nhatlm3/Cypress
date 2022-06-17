import Link from 'next/link';
import HeaderCss from './Header.module.scss';
const Header = ({}) => {
  return (
      <div className={HeaderCss.fullHeader}>
        <header className={HeaderCss.headerSection}>
          <div className={HeaderCss.containerFluid}>
            {/* <nav className={`navbar navbar-expand-lg ${HeaderCss.customNavContainer}`}>
              <a className="navbar-brand">
                <span>
                  Kido
                </span>
              </a>

              <div className={`navbar-collapse ${HeaderCss.navbarCollapse}`}>
                <div className='d-none d-lg-flex ml-auto flex-column flex-lg-row align-items-center'>
                  <ul className="navbar-nav  ">
                    <li className="nav-item">
                      <a className="nav-link">
                        <img src="../../public/assets/login.png" alt="" />
                        <span>Login</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <img src="../../public/assets/signup.png" alt="" />
                        <span>Sign Up</span>
                      </a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 mb-3 mb-lg-0 mr-5">
                    <button className={`btn  my-2 my-sm-0 ${HeaderCss.navSearchBtn}`} type="submit"></button>
                  </form>
                </div>
                <div className="custom_menu-btn">
                  <button>
                    <span className="s-1">

                    </span>
                    <span className="s-2">

                    </span>
                    <span className="s-3">

                    </span>
                  </button> 
                </div>
              </div>
            </nav> */}
            
          </div>
        </header>
      </div>
    
  )
}
export default Header;