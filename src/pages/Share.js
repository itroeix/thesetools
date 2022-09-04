import './Main.css';

import React, { useState } from "react";
import axios from "axios";

const Main = () => {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [webUrl, setWebUrl] = useState("");
    const [shared, setShared] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();

        axios.post("https://api.itroeix.xyz/apps", {
            category: category,
            name: name,
            lower: name.toLowerCase(),
            webUrl: webUrl,
            shared: shared
        }).then((response) => {
            setCategory("");
            setName("");
            setWebUrl("");
            setShared("");
            window.location.href = "/"
        })
        .catch((error) => {
            setMessage("Some error occured or rate limited, try again in 1 minute");
        });

    };
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
                <form onSubmit={handleSubmit}>
                    <select class="categoryform" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Select Category</option>
                        <option value="ide">IDE</option>
                        <option value="apis">API</option>
                        <option value="video">Video Editor</option>
                        <option value="text">Text Editor</option>
                        <option value="design">Design</option>
                        <option value="vm">Virtual Machines</option>
                    </select><br />
                    <input
                        type="text"
                        class="forminput"
                        value={name}
                        placeholder="Tool Name"
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    <input
                        type="text"
                        class="forminput"
                        value={webUrl}
                        placeholder="Website URL"
                        onChange={(e) => setWebUrl(e.target.value)}
                    /><br />
                    <input
                        type="text"
                        class="forminput"
                        value={shared}
                        placeholder="Your username"
                        onChange={(e) => setShared(e.target.value)}
                    /><br />

                    <button type="submit">Share</button>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
                <a class="approvaltext">This is automatic, please do not do anything bad :)</a>
            </div>
        </div>


    );
}
export default Main;