import ArtiziaLogo from "../Images/logo.png";
import TitleImage from "../Images/logo-title-light.png";
import SearchIcon from "../Images/search-Icon.png";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <>
      <div className="header">
        {/* nav-section */}
        <nav className="nav-container">
          <div className="left-side">
            <div className="logo-img">
              <img src={ArtiziaLogo} alt="artizia-logo" />
            </div>
            <div className="logo-text">
              <img src={TitleImage} alt="artizia-logo" />
            </div>
          </div>
          <div className="right-side">
            <div className="search-icon">
              <img src={SearchIcon} alt="artizia-logo" />
            </div>
            <div className="create-btn">
              <button>Create Account</button>
            </div>
            <div className="login-btn">
              <button>Login</button>
            </div>
            <div className="menu-icon">
            <MenuIcon sx={{ color: '#b601d1', fontSize: 40, cursor: 'pointer' }} />
            </div>
          </div>
        </nav>
        {/* hero-section */}
        <div className="section-one">
          <div className="section-one-title">
            <h1>CREATE YOUR OWN NFT</h1>
          </div>
          <div className="section-one-searchbox">
            <button >Prompt</button>
            <input type="text" placeholder="Generate"/>
          </div>
          <div className="section-one-para">
         <p>Turn AI-Generated Masterpieces into NFTs and Monetize Your Creativity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
