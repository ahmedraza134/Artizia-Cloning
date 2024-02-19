import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardsImage from "../Images/card-img-sec-three.png";
import ElipseImage from "../Images/elipse-img-sec-three.png";


const Cards = () => {
  return (
    <>
      <Card className="cards-container">
        <CardActionArea>
          <CardMedia
            component="img"
            image={CardsImage}
            alt="green iguana"
            className="main-image"
          />
          <img src={ElipseImage} alt="circle" className="small-circle-image" />
          <CardContent className="cards-content">
            <h1>TUD NFT</h1>
            <p>Price</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Cards;
