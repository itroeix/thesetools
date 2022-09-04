import './Main.css';

import React, { useState } from "react";


const Main = () => {

    var jsonData = {
        category: "ide",
        name: "Test",
        lower: "test",
        webUrl: "https://www.youtube.com/",
        shared: "test"
    }
    const goForm = () => {
        fetch('http://localhost:4000/apps', { 
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jsonData) 
        })
    }
    React.useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, []);
    return (
        <div>
            <div>
                <h1>TheseTools</h1><br />
                <h2>Share Tool Form</h2>
                <button class="formbtn" onClick={goForm}>Go to Google Forms</button><br />
                <a class="approvaltext">To avoid some problems, you have to wait for an approval.<br /> Maybe in the future I will add an automated system.</a>
            </div>
        </div>


    );
}
export default Main;