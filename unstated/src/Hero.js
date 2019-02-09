import React from 'react';

export default function Hero(props) {
  return (
    <div className={`jumbotron ${props.className}`}>
      <h1>Walk The Plank</h1>
      <hr className="my-4" />
      <p>
        Select the letters that belong in the pirate word/phrase. If you choose
        more than 5 letters that don't exist, you get a closer look at the
        sharks...
      </p>
    </div>
  );
}
