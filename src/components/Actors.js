import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page </h1>
      { actors.map((actor, id) => <div key ={id} className ="actor">{actor.name}<ul>{actor.movies.map((movie, id) => <li key={id}>{movie}</li>)}</ul></div>) }
    </div>
  );
};


export default Actors;
