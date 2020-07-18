import React from "react";
import Cards from "./Cards";
import "./MainSection.css";
import "../fontawesome/css/all.css";
import "../fontawesome/css/fontawesome.css";

class MainSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies,
            nowPlaying: null
        }

        this.switchTheme = this.switchTheme.bind(this);
    }  

    componentDidMount() {
        const currentTheme = localStorage.getItem('theme');
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
    }

    switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }   
    }

    render() {
        return(
            <section className="main">
                <header>
                    <h1 className="entry-title">
                        My Videos
                    </h1>
                    <div className="theme-switcher">
                        <em><i className="fas fa-sun"></i></em>
                        <label className="theme-switch" htmlFor="checkbox">
                            <input type="checkbox" id="checkbox" onChange={this.switchTheme}/>
                            <div className="slider round"></div>
                        </label>
                        <em><i className="fas fa-moon"></i></em>
                    </div>
                </header>
                <div className="row">
                    {this.state.movies.map((movie, index) => (
                        <Cards 
                            key={movie.id}
                            title={movie.title}
                            image={movie.cover}
                        />
                    )
                    )}
                </div>
            </section>
        )
    }
}

export default MainSection;