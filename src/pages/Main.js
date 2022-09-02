import './Main.css';

import React, { useState } from "react";


const Main = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  function sayHello() {

    const url = "https://api.itroeix.xyz/apps/category/simp";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));


    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);

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
          placeholder='Buscar'
          onKeyPress={inputHandler}
        />
      </div>
      <button onClick={sayHello}>Default</button>
      <div class="apps">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((user) => (
            <div class="app">
              <a href={user.webUrl}><img src={user.imageUrl}></img></a>
              <h2>{user.name}</h2>
              <p>Shared by {user.shared}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Main;