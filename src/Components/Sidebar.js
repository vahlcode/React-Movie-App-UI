import React from "react";
import "./Sidebar.css";
import "../fontawesome/css/all.css";
import "../fontawesome/css/fontawesome.css";
import User from "./user";
import ProfilePic from "../images/pp.jpg";

class Sidebar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            menuItems: props.items
        }
        this.logItems = this.logItems.bind(this);
    }

    logItems() {
        console.log(this.state.menuItems);
    }

    render() {
        return(
            <section className="sidebar">
                <ul className="navigation-links">
                    {this.state.menuItems.map((menuItem, index) => (
                        <li key={index} className="navigation-link">
                            <a href={menuItem.link}><i className={menuItem.icon}></i> <span>{menuItem.title}</span></a>
                        </li>)
                     )}
                </ul>
                <User username="Vahlcode" fName="Valentine" lName="Elum" pic={ProfilePic}/>
            </section>
        )
    }
}

export default Sidebar;