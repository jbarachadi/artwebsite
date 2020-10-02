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
                        <CardItem src="https://raw.githubusercontent.com/jbarachadi/artwebsite/main/public/images/img-1.jpg" text="A little practice sheet" label="Mosaïque" path="#"/>
                        <CardItem src="https://raw.githubusercontent.com/jbarachadi/artwebsite/main/public/images/img-2.jpg" text="A day at the met" label="Abstract" path="#"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="https://raw.githubusercontent.com/jbarachadi/artwebsite/main/public/images/img-3.jpg" text="Hallowed hollowed hall" label="Architecture" path="#"/>
                        <CardItem src="https://raw.githubusercontent.com/jbarachadi/artwebsite/main/public/images/img-4.jpg" text="Vintage patriotism" label="Mosaïque" path="#"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="https://raw.githubusercontent.com/jbarachadi/artwebsite/main/public/images/img-5.jpg" text="Portrait by quilting" label="Modern" path="#"/>
                        <CardItem src="https://raw.githubusercontent.com/jbarachadi/artwebsite/main/public/images/img-6.jpg" text="The wall sees you.." label="Graffiti" path="#"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards