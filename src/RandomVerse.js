import {useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import './css/RandomVerse.css'


function RandomVerse() {
    const [data, setData] = useState(null);
    // make API call to bible-api to get random bible verse
    useEffect(() => {
    fetch('https://bible-api.com/data/web/random')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
    let verseHeader = "";
    let text = "";
    let footer = "Verses Provided By Public API: https://bible-api.com/"
    // extract data out
    if (data != null) {
        let randomVerse = data.random_verse;
        let book = randomVerse.book;
        let chapter = randomVerse.chapter;
        let verse = randomVerse.verse;
        verseHeader = book + " " + chapter + ":" + verse;
        text = randomVerse.text;
        // console.log(data);
    }
    return (
    <div className="daily-verse">
        {(verseHeader.length > 0) && (text.length > 0) ? <div><h1 id="verseHeader">{verseHeader}</h1><h2 id="verseText">{text}</h2><a href="https://bible-api.com/" id="verseFooter"><h3>{footer}</h3></a></div>: 
            <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading Random Verse...
            </Button>}
    </div>
    );
    }

export default RandomVerse;
