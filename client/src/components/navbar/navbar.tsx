import React from "react";
import navbar from './navbar.module.css';

function Navbar(this: any, props:any) {
    return (
        <div className={navbar.Navbar}>
            <div className={navbar.navWrapper}>
                <a href="/"><h1 className={navbar.navHome}>Kristoffer</h1></a>
                <li className={navbar.navList} id={"navList"}>
                    <ul id={"home"} className={props.selected === "home"  ? navbar.selected: undefined}><a href="/#">Home</a></ul>
                    <ul id={"about"} className={props.selected === "about" ? navbar.selected: undefined}><a href="/#">About</a></ul>
                    <ul id={"projects"} className={props.selected === "projects" ? navbar.selected: undefined}><a href="/#">Projects</a></ul>
                    <ul id={"contact"} className={props.selected === "contact" ? navbar.selected: undefined}><a href="/#">Contact</a></ul>
                </li>
                <li className={navbar.navSocials}>
                    <ul id={navbar.github}><a href="https://github.com/kristofferous"><img src="/assets/images/github.svg" alt="GitHub logo"/>GitHub</a></ul>
                    <ul id={navbar.twitter}><a href="https://twitter.com/Kristofferous"><img src="/assets/images/twitter.png" alt="Twitter logo"/>Twitter</a></ul>
                </li>
            </div>
        </div>
    )
}
export default Navbar;