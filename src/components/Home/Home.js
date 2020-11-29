import React from "react";
import "../Home/Home.css";
import Product from "../Product/Product";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__background">
          {/* <div className="home_arrows">
            <ArrowBackIosIcon />
            <ArrowForwardIosIcon />
          </div> */}
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
            alt=""
          ></img>
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Apple Macbook Pro 2020"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg "
          />
          <Product
            id="2"
            title="Apple Macbook Pro 2020"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg "
          />
          <Product
            id="3"
            title="Apple Macbook Pro 2020"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg "
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="Apple Macbook Pro 2020"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg "
          />
          <Product
            id="5"
            title="Apple Macbook Pro 2020"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg "
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Apple Macbook Pro 2020"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
