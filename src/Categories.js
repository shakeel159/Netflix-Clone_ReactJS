import React, { useState } from "react";
import Card from './Card';
import tempIMG from './img/SeverenceTMP.PNG'
import './MainPage.css';

import './Categories.css';

function CategoriesPage(){
    const [selectedValue, setSelectedValue] = useState("");
    const [categories, setCategories] = useState([]);  // For storing the fetched data
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const tempTitle = "Severance";
    const Describtion = "A gripping mystery series.";

    return (
        <div>
            <label htmlFor="options">Choose an option:</label>
            <div className="MovieRow">
                <select id="options" value={selectedValue} onChange={handleChange}>
                        <option value="">--Select Category--</option>
                        <option value="apple">Action</option>
                        <option value="banana">Adnventure</option>
                        <option value="cherry">Comedy</option>
                        <option value="cherry">Documentery</option>
                </select>
                <p>Selected: {selectedValue || "None"}</p>
                    <h1>Action</h1>
                    <div className="Page">
                        <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                        <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                        <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                        <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                        <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                        <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                        <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                        <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                        <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                    </div>
            </div>
        </div>
    );
}

export default CategoriesPage;