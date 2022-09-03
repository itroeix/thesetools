import './Main.css';

import React, { useState } from "react";


const Main = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [showText, setText] = useState("All")
  const changeText = (text) => setText(text);
  const [showDarkText, setDarkText] = useState("Toggle Dark Mode")
  const changeDarkText = (text) => setDarkText(text);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      changeDarkText("Toggle Light Mode")
    } else {
      document.body.classList.remove("dark");
      changeDarkText("Toggle Dark Mode")

    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);
  const setCategory = (category) => {

    const url = `https://api.itroeix.xyz/apps/category/${category}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));


    if (data.length !== 0) {
      setIsLoading(false);
    }
  }

  const setAll = () => {

    const url = `https://api.itroeix.xyz/apps`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));


    if (data.length !== 0) {
      setIsLoading(false);
    }
    //console.log(data);
    changeText("All")

  }

  let inputHandler = (e) => {
    if (e.key === "Enter") {
      const url = `https://api.itroeix.xyz/apps/search/${e.target.value}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error));


      if (data.length !== 0) {
        setIsLoading(false);
      }
      //console.log(data);

    }
  };
  React.useEffect(() => {
    const url = "https://api.itroeix.xyz/apps";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    //console.log(data);
  }, [data]);

  return (
    <div>
      <div>
        <h1>TheseTools</h1>
      </div>
      <div className="search">
        <input
          placeholder='Search'
          onKeyPress={inputHandler}
        />
      </div>
      <div class="category">
        <button onClick={setAll}>All</button>
        <button onClick={() => { setCategory("ide"); changeText("IDE"); }}>IDE</button>
        <button onClick={() => { setCategory("apis"); changeText("API's"); }}>API's</button>
        <button onClick={() => { setCategory("video"); changeText("Video Editors"); }}>Video Editors</button>
        <button onClick={() => { setCategory("text"); changeText("Text Editors"); }}>Text Editors</button>
        <button onClick={() => { setCategory("photo"); changeText("Design"); }}>Design</button>
        <button onClick={() => { setCategory("vm"); changeText("Virtual Machines"); }}>Virtual Machines</button>
      </div>
      <a class="share" href="/share">Share Tool</a>
      <div>
        <button onClick={() => setDarkMode(!darkMode)}>{showDarkText}</button>
      </div>
      <h2>{showText}</h2>
      <p>Icons by icons8.com</p>

      <div class="apps">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((user) => (
            <div class="app">
              <a href={user.webUrl}><img src={user.imageUrl}></img></a><br />
              <a class="name">{user.name}</a><br />
              <a class="shared">Shared by {user.shared}</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Main;