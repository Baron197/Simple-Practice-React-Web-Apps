import React, { Component } from 'react';
import CarouselBro from './CarouselBro';
import image1 from '../images/bdo1.jpg';
import image2 from '../images/bdo2.jpg';
import image3 from '../images/back.jpg';

class HomePage extends Component {

    render() {
        return (
            <div style={{ marginTop: "80px" }}>
                <CarouselBro 
                    legend1={"BDO Image 1"} 
                    image1={image1} 
                    legend2={"BDO Image 2"} 
                    image2={image2} 
                    legend3={"BDO Image 3"} 
                    image3={image3}
                    munculText={false}
                    textnya={"Hello Bro Coy"}
                />
            </div>
        );
    }
}

export default HomePage;