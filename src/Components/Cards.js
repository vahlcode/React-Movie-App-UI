import React from "react";
import "./Cards.css";
import "../fontawesome/css/all.css";
import "../fontawesome/css/fontawesome.css";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.image,
            title: props.title,
            description: props.description,
            link: props.link,
            expanded: false
        }

        this.expandCard = this.expandCard.bind(this)
    }

    expandCard() {
        this.setState({expanded: !this.state.expanded})
    }

    render() {
        return(
            <div className={this.state.expanded ? "card expanded" : "card"} onClick={this.expandCard}>
                <div className="card-image">
                    <img src={this.state.image} alt="ima" />
                </div>
                <div className="details">
                    <h3>
                        {this.state.title}
                    </h3>
                    <div className="actions">
                        <button className="action save">
                            <i className="fas fa-save"></i>
                        </button>
                        <button className="action play">
                            <i className="fas fa-play"></i>
                        </button>
                        <button className="action heart">
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;