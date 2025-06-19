import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import RandomVerse from './RandomVerse';
// import "./css/bootstrap/forms"; // Required
// import "./css/bootstrap/helpers"; // Required
// import "./css/bootstrap/mixins/_clearfix.scss"; // Required
// import "./css/bootstrap/utilities"; // Required
// import "./css/bootstrap/vendor"; // Required
// import './css/bootstrap/_carousel.scss'
// import 'bootstrap/scss/_carousel.scss'
// import 'boostrap/scss/mixins/_clearfix.scss'
import './css/bootstrap/bootstrap_custom.scss'

function BibleVerses() {
  return (
    <Carousel indicators={false} controls={false}>
      <CarouselItem>
        <RandomVerse key="verse1" />
      </CarouselItem>
      <CarouselItem>
        <RandomVerse key="verse2" />
      </CarouselItem>
      <CarouselItem>
        <RandomVerse key="verse3" />
      </CarouselItem>
    </Carousel>
  );
}

export default BibleVerses;