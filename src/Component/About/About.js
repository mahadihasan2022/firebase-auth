import React from "react";
import person from "../../images/person.JPG";
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="grid grid-cols-2 gap-8 pt-12">
        <div>
          <img src={person} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center p-4">Introduce Myself</h1>
          <p className="p-4">
            Good morning sir/madam, First of all, thank you for allowing me an
            opportunity to introduce myself in front of you. I'm Mahadi. I'm 21
            years old. I'm basically from a small village, Nandina in the
            Jamalpur district. Coming my family background, we are five members of
            my family including me, my father, mother, brother, and sister.
          </p>
          <p className="text-center"><button className="bg-pink-400 text-white w-20 h-8">hire me</button></p>
        </div>
      </div>
    </div>
  );
};

export default About;
