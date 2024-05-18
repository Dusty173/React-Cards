import React, { useState } from "react";
import { formatCard } from "./helpers";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  )
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear All</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
