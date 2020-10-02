import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/img_1.jpg" text="A little practice sheet" label="Mosaïque" path={process.env.PUBLIC_URL + "/artwebsite/services"}/>
                        <CardItem src="images/img_2.jpg" text="A day at the met" label="Abstract" path={process.env.PUBLIC_URL + "/artwebsite/services"}/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/img_3.jpg" text="Hallowed hollowed hall" label="Architecture" path={process.env.PUBLIC_URL + "/services"}/>
                        <CardItem src="images/img_4.jpg" text="Vintage patriotism" label="Mosaïque" path={process.env.PUBLIC_URL + "/artwebsite/services"}/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/img_5.jpg" text="Portrait by quilting" label="Modern" path={process.env.PUBLIC_URL + "/artwebsite/services"}/>
                        <CardItem src="images/img_6.jpg" text="The wall sees you.." label="Graffiti" path={process.env.PUBLIC_URL + "/artwebsite/services"}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards