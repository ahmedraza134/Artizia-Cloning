import Header from "../components/Header";
import GalleryComponent from "../components/Gallery";
import Cards from "../components/Cards";
import CollectionTable from "../components/CollectionTable";
import Footer from "../components/Footer"
import '../style.css'; 

const LandingPage = () => {
  return (
    <>
      <Header />
      <GalleryComponent />
      <div className="cards-heading-nft">
        <h1>NFT</h1>
      </div>
      <div className="cards-component">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <CollectionTable />
      <div className="cards-heading-nft">
        <h1>New Items</h1>
      </div>
      <div className="cards-component">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
