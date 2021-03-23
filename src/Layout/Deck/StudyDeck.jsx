import React from "react";

import BreadCrumb from "../BreadCrumb";
import StudyCard from "../Card/StudyCard";

export default function StudyDeck({ decks, deck, cards }) {
  let cardAmount = cards.length;
  //  let tempCards = [...cards];
  // if (deck.cards != undefined) {
  //   tempCards = deck.cards;
  // }

  // const [cards, setCards] = useState([...tempCards]);
  // const deckId = deck.id;
  // if (deck.cards != undefined) {
  //   cardAmount = deck.cards.length;
  // } else {
  //   cardAmount = 0;
  // }
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   // listCards(deckId, abortController.signal)
  //   //   .then(setCards)
  //   //   .then(() => {
  //   //     cardAmount = cards.length;
  //   //   })
  //   //   .catch(console.log("bad magnitude 10"));
  //   cardAmount = cards.length;
  //   return () => abortController.abort();
  // }, [cards]);
  return (
    <div>
      <BreadCrumb decks={decks} />
      <h2> {deck.name}: Study</h2>

      {cardAmount > 2 ? (
        <StudyCard cards={cards} />
      ) : (
        <div>
          <h3>Not Enough Cards.</h3>
          <p>
            You need at least 3 cards to study. There are {cardAmount} cards in
            this deck
          </p>
        </div>
      )}
    </div>
  );
}
