import React from 'react';
import Headline from './Headline';
import './Interests.css';

const Interests = () => {
  return (
    <section className="Interests">
      <div>
        <Headline text="INTERESTS" />
        <p>Apart from building websites and learning new things, I enjoy exercising a lot. During summer days I spend my time jogging on the beach and riding a bike.
          Sometimes I also play basketball and workout.
        </p>
        <p>
          In colder days I read horror genre stories and play video games.
          Recently I've discovered a new hobby, which is cooking and baking.
        </p>
      </div>    
    </section>
  );
};

export default Interests;