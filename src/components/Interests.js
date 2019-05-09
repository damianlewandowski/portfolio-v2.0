import React from "react";
import Headline from "./Headline";
import "./Interests.css";

const Interests = () => {
  return (
    <section className="Interests section">
      <div>
        <Headline text="INTERESTS" />
        <p>
          Apart from building websites and learning new things, I enjoy
          exercising a lot. During summer days I spend my time jogging on the
          beach, riding a bike and playing basketball with friends.
        </p>
        <p>
          In colder days I read self-development and fantasy books. I love
          playing video games. Recently I've discovered a new hobby, which is
          cooking and baking.
        </p>
      </div>
    </section>
  );
};

export default Interests;
