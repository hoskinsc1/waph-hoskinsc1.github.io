import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import RandomVerse from './RandomVerse';
import {useState} from 'react';

function BibleVerses() {
    const [firstVerse, setFirstVerse] = useState(Math.random());
    const [secondVerse, setSecondVerse] = useState(Math.random());

    const getNewVerse = (selectedIndex, e) => {
        if (selectedIndex === 0) {
            setFirstVerse(Math.random());
        } else {
            setSecondVerse(Math.random());
        }   
    }
    return (
        <Carousel id="carouselVerses" indicators={false} controls={false} interval={10000} onSlide={getNewVerse} fade>
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