import React from 'react';
import GameImage from './GameImage';
import Hero from './Hero';
import Hangman from './Hangman';

export default function WalkThePlank() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Hero className="col-10 offset-1" />
      </div>
      <div className="row align-items-center">
        <GameImage className="col-md-5 col-sm-10 offset-md-1 offset-sm-1" />
        <Hangman className="col-md-5 col-sm-10 offset-md-0 offset-sm-1" />
      </div>
    </div>
  );
}
