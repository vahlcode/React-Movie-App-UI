import React from "react";
import "./User.css";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            pic: props.pic,
            fName: props.fName,
            lName: props.lName
        }
    }

    render() {
        return(
            <ul className="user">
                <li>
                    <a href={this.state.username}>
                        <img src={this.state.pic} alt="#"/>
                        <span>
                            {`${this.state.fName} ${this.state.lName}`}
                        </span>
                    </a>
                </li>
            </ul>
        )
    }
    
}

export default User;