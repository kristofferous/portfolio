import React from 'react';
import Navbar from "./components/navbar/navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar selected={"home"}/>
        <main>
            <div className={"thumbnail"}>
                <img id={"krisFrames"} src={"/assets/images/kristofferFrames.svg"} alt={"Kristofferous, NextJS, ReactJS, NodeJS, ExpressJS"}/>
                <div className="about">
                    <h2 id={"devRole"}>Software developer</h2>
                    <h1 id={"tagLine"}>I get it done. Correctly</h1>
                    <h3 id={"description"}>I'm a teenage software developer with a great knowledge of new technologies such as JavaScript, NodeJS ReactJS, GIT, and more</h3>
                </div>
            </div>
        </main>
    </div>
  );
}

export default App;
