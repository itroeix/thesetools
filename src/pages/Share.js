import './Main.css';

import React, { useState } from "react";


const Main = () => {
    const goForm = () => {
        window.location.href="https://docs.google.com/forms/d/e/1FAIpQLScjK7VCsYA1cUYN-7vjqdNwolYausjZXNzOp3y8dRysQjGt2g/viewform?usp=sf_link";
    }
  return (
    <div>
      <div>
        <h1>TheseTools</h1><br/>
        <h2>Share Tool Form</h2>
        <button class="formbtn" onClick={goForm}>Go to Google Forms</button><br/>
        <a class="approvaltext">To avoid some problems, you have to wait for an approval.<br/> Maybe in the future we will add an automated system.</a>
      </div>
    </div>


  );
}
export default Main;