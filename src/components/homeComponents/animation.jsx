import React from "react";

const TechMeetsArt = () => {
  return (
    <section id="tech-meets-art" style={{ height: "639px" }}>
      <div className="">
        <img
          width="138"
          height="98"
          className="scroll-scale goleft"
          src="media/paint-left.png"
          alt="PurpleGlo"
          id="paint-left"
          style={{ transform: "none" }}
        />
        <img
          width="260"
          height="313"
          className="scroll-scale goright"
          src="media/paint-right.png"
          alt="PurpleGlo"
          id="paint-right"
          style={{ transform: "none" }}
        />
        <img
          width="139"
          height="114"
          className="scroll-scale goleft"
          src="media/shape-left.png"
          alt="PurpleGlo"
          id="shape-left"
          style={{ transform: "none" }}
        />
        <img
          width="200"
          height="70"
          className="scroll-scale goright"
          src="media/shape-right.png"
          alt="PurpleGlo"
          id="shape-right"
          style={{ transform: "none" }}
        />
        <p id="where" className="scroll-scale goleft" style={{ transform: "none" }}>
          Where
        </p>
        <p id="tech" className="scroll-scale goleft" style={{ transform: "none" }}>
          Tech
        </p>
        <p id="meets" className="scroll-scale goright" style={{ transform: "none" }}>
          Meets
        </p>
        <p id="art" className="scroll-scale goleft" style={{ transform: "none" }}>
          Art
        </p>
      </div>
    </section>
  );
};

export default TechMeetsArt;