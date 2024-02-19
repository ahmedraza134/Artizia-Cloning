import footerimgone from "../Images/footer-img-1.png";
import footerimgtwo from "../Images/footer-img-2.png";
import footerimgthree from "../Images/footer-img-3.png";
import footerimgfour from "../Images/footer-img-4.png";

const Footer = () => {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-heading">
          <h1>How IT Works</h1>
        </div>
        <div className="footer-section-container">
        <div className="footer-section-one">
          <div className="footer-logo-img">
          <img src={footerimgone} alt="wallet nft" />
          </div>
          <h1>Set up your wallet:</h1>
          <p>
            Get started by setting up your secure digital wallet to buy, sell,
            and trade NFTs effortlessly.
          </p>
        </div>
        <div className="footer-section-two">
          <div className="footer-logo-img">
          <img src={footerimgtwo} alt="create nft" />
          </div>
          <h1>Create your NFTs:</h1>
          <p>
            Showcase your creativity to the world by minting your unique digital
            artworks as NFTs. Its your canvas, your rules.
          </p>
        </div>
        <div className="footer-section-three">
          <div className="footer-logo-img">
          <img src={footerimgthree} alt="add nft" />
          </div>
          <h1>Add your NFTs:</h1>
          <p>
            Seamlessly add your NFT creations to our marketplace, where
            collectors and art enthusiasts can discover and appreciate your
            talent.
          </p>
        </div>
        <div className="footer-section-four">
          <div className="footer-logo-img">
          <img src={footerimgfour} alt="sell nft" />
          </div>
          <h1>Sell your NFTs:</h1>
          <p>
            Join the NFT revolution and turn your digital art into a valuable
            asset. List your NFTs for sale and let the world bid for your
            masterpiece.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
