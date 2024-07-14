import Link from "next/link";
import Nav from "./Nav";
import NavSearch from "./NavSearch";

const DefaultHeader = ({ singleMenu, dark }) => {
  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                    style={{ width: 100,height:80,objectFit:"contain"}}
                      src={
                        "assets/images/logos/new-logo.png"
                      }
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
    
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
