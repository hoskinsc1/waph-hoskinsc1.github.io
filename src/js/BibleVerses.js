/** Component that cycles through random bible verses on the main page right under the navbar */

import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import RandomVerse from './components/RandomVerse.js';
import {useState} from 'react';

function BibleVerses() {
    const [firstVerse, setFirstVerse] = useState(Math.random());
    const [secondVerse, setSecondVerse] = useState(Math.random());

    const getNewVerse = (selectedIndex, e) => {
        console.log(selectedIndex);
        if (selectedIndex === 1) {
            setFirstVerse(Math.random());
        } else {
            setSecondVerse(Math.random());
        }   
    }
    return (
        <Carousel id="carouselVerses" indicators={false} controls={false} interval={10000} onSlid={getNewVerse}>
            <CarouselItem className="verse" id="firstVerse">
                <RandomVerse key={firstVerse} />
            </CarouselItem>
            <CarouselItem className="verse" id="secondVerse">
                <RandomVerse key={secondVerse} />
            </CarouselItem>
        </Carousel>
    );
}

export default BibleVerses;