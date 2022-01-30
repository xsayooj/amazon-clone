import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

            {/* Products */}
            <div className="home_row">
            <Product 
            id="1314fdf1"
            title="Reminders of Him: A Novel"
            image="https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg"
            price={5.99}
            rating={5}
            />
            <Product 
            id="1314klfd141"
            title="The Real Anthony Fauci: Bill Gates, Big Pharma, and the Global War on Democracy and Public Health (Children’s Health Defense)"
            image="	https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL127_SR127,127_.jpg"
            price={4.10}
            rating={5}
            />
            </div>
            <div className="home_row">
            <Product 
            id="1343dddsf141"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            image="https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_UY218_.jpg"
            price={8.99}
            rating={5}
            />
            <Product 
            id="13fdlk090141"
            title="Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones"
            image="https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UY218_.jpg"
            price={10.57}
            rating={5}
            />
            <Product 
            id="131djflkdlkjkl881"
            title="Reminders of Him: A Novel"
            image="https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg"
            price={5.99}
            rating={5}
            />
            </div>
            <div className="home_row">
            <Product 
            id="39883fhdhsk"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            image="https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_UY218_.jpg"
            price={8.99}
            rating={5}
            />
            <Product 
            id="1fkl03024141"
            title="Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones"
            image="https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UY218_.jpg"
            price={10.57}
            rating={5}
            />
            <Product 
            id="248859200djkj"
            title="Reminders of Him: A Novel"
            image="https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg"
            price={5.99}
            rating={5}
            />
            <Product 
            id="2499fj389skk"
            title="Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones"
            image="https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UY218_.jpg"
            price={10.57}
            rating={5}
            />
            <Product 
            id="39403ijfoidl"
            title="Reminders of Him: A Novel"
            image="https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg"
            price={5.99}
            rating={5}
            />
            </div>

        </div>

    )
}

export default Home