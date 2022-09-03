import './Main.css';

import React, { useState } from "react";


const Main = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [showText, setText] = useState("All")
  const changeText = (text) => setText(text);

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
    console.log(data);
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
      console.log(data);

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
    console.log(data);
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
        <button onClick={() => { setCategory("photo"); changeText("Photo Editors"); }}>Photo Editors</button>

      </div>
      <a class="share" href="/share">Share Tool</a>
      <h2>{showText}</h2>
      <p>Icons by icons8.com</p>

      <div class="apps">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((user) => (
            <div class="app">
              <a href={user.webUrl}><img src={user.imageUrl}></img></a><br/>
              <a class="name">{user.name}</a><br/>
              <a class="shared">Shared by {user.shared}</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Main;