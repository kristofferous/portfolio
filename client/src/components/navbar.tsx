import React from "react";

function Navbar(this: any, props:any) {
    return (
        <div className={"Navbar"}>
            <div className="navWrapper">
                <h1 className={"navHome"}>Kristoffer</h1>
                <li className={"navList"}>
                    <ul id={"hello"}>Hello</ul>
                    <ul id={"one"}>ONE</ul>
                    <ul id={"two"}>TWO</ul>
                </li>
                <h1 className={"navContact"}>Contact me</h1>
            </div>
        </div>
    )
}
export default Navbar;