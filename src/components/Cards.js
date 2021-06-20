import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import bmwImageEx from '../images/bmw-series-2-gran-coupe-exterior.jpg';
import bmwImageEx2 from '../images/BMW-X6M-Gallery-Exterior.jpeg';
import bmwImageEx3 from '../images/BMW-Z4-Gallery-Exterior.jpg';
import bmwImageEx4 from '../images/BMW-8-Series-GranCoupe-Exterior.jpg';
import bmwImageEx5 from '../images/BMW-5Series-Gallery.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC models!</h1>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem
              src={bmwImageEx}
              text="Experience the first-ever BMW 2 Series Gran Coupé, not only 
              unconventional but individual. For those who see meaning, not a checklist. 
              For those who defy the rational and for those who never stop seeking connections. 
              With perfectly tuned driving, you’ll feel comfortably in charge."
              label="Series 2 Gran Coupé"
              path="/services"
            />
            <CardItem
              src={bmwImageEx2}
              text="BMW’s most powerful V-8.
            Unleash a precision-engineered 4.4-liter M TwinPower Turbo V-8 delivering up to 617 
            horsepower with the optional Competition Package. Temperatures are regulated by a 
            racetrack-ready cooling system with four water pumps, six radiators, and a dedicated 
            transmission cooler."
              label="The X6 M"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={bmwImageEx3}
              text="Sportiness. Excitement. And, above all, attitude. The 2021 BMW Z4 is the classic 
              roadster for the modern driver."
              label="The Z4"
              path="/services"
            />
            <CardItem
              src={bmwImageEx4}
              text="From the onboard technology to the available design enhancements, 
              every detail has been crafted in the 8 Series Coupe – so you can experience 
              perfect clarity with every drive."
              label="The 8 Coupe"
              path="/services"
            />
            <CardItem
              src={bmwImageEx5}
              text="The 2021 BMW 5 Series Sedan proves to be the authority in style and 
              innovation with advancements in technology, engineering, and exterior design.
              Discover extra electric power and efficiency benefits with the new 48V mild-hybrid 
              technology, now standard for all 540i models."
              label="The 5"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
