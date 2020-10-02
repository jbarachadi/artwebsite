import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

console.log(process.env.PUBLIC_URL);

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={process.env.PUBLIC_URL + "/images/img_1.jpg"} text="A little practice sheet" label="Mosaïque" path="#"/>
                        <CardItem src={process.env.PUBLIC_URL + "/images/img_2.jpg"} text="A day at the met" label="Abstract" path="#"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={process.env.PUBLIC_URL + "/images/img_3.jpg"} text="Hallowed hollowed hall" label="Architecture" path="#"/>
                        <CardItem src={process.env.PUBLIC_URL + "/images/img_4.jpg"} text="Vintage patriotism" label="Mosaïque" path="#"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={process.env.PUBLIC_URL + "/images/img_5.jpg"} text="Portrait by quilting" label="Modern" path="#"/>
                        <CardItem src={process.env.PUBLIC_URL + "/images/img_6.jpg"} text="The wall sees you.." label="Graffiti" path="#"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards