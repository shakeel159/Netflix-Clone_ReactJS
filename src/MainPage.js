import React from "react";
import Card from './Card';
import tempIMG from './img/SeverenceTMP.PNG'
import './MainPage.css';


function MainPage(){
    const tempTitle = "Severance";
    const Describtion = "describtion...";


    return(
        <div>
            <div className="MovieRow">
                <h1>Recently Raleased</h1>
                <div className="colunm">
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
            <div className="MovieRow">
                <h1>Popular</h1>
                <div className="colunm">
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                </div>
            </div>
            <div className="MovieRow">
                <h1>Action</h1>
                <div className="colunm">
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                </div>
            </div>
            <div className="MovieRow">
                <h1>Comedy</h1>
                <div className="colunm">
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                </div>
            </div>
            <div className="MovieRow">
                <h1>Upcoming</h1>
                <div className="colunm">
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                    <Card img={tempIMG} title={tempTitle} description={Describtion}></Card>
                </div>
            </div>
        </div>
    );
}

export default MainPage