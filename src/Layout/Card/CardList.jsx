import React, { useEffect, useState, useRef } from "react";
//import Header from "../Header";
//import NotFound from "../NotFound";
// import {
//   Link,
//   NavLink,
//   Route,
//   Switch,
//   useParams,
//   useRouteMatch,
// } from "react-router-dom";

import { listCards } from "../../utils/api/index";
import Alert from "../Alert";
import CardView from "./CardView";

export default function CardList({
  deck,
  deckId,
  setDeck,
  decks,
  setDecks,
  cards,
  setCards,
}) {
  useEffect(() => {
    const abortController = new AbortController();
    if (deck.cards != undefined) {
      const tempCards = deck.cards;
      tempCards.sort((card1, card2) => card1.id - card2.id);
      setCards(tempCards);
    }

    return () => abortController.abort();
  }, [deck]);
  console.log(deck.cards);
  console.log(cards);
  const list = cards.map((card, index) => (
    <CardView
      card={card}
      key={index}
      cards={cards}
      setCards={setCards}
      deck={deck}
      setDeck={setDeck}
      decks={decks}
      setDecks={setDecks}
    />
  ));

  return (
    <div>
      <h2>Cards</h2>
      {list}
    </div>
  );
}