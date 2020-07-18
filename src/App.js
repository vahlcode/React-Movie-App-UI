import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar";
import MainSection from "./Components/MainSection";
import Lazyloader from "./Components/Lazyloader";
import movies from "./Movies.js";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() =>{
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

  render(){
    if (this.state.isLoading) {
      return(
        <Lazyloader />
      )
    } else{
      return (
      <div>
        <Sidebar 
          items = {
          [
            {
              link : '#',
              title: 'My Videos',
              icon: 'fas fa-play'
            },{
              link : '#',
              title: 'Recently Watched',
              icon: 'fas fa-clock'
            },{
              link : '#',
              title: 'Explore',
              icon: 'fas fa-search'
            },{
              link : '#',
              title: 'Watch List',
              icon: 'fas fa-save'
            },{
              link : '#',
              title: 'Favorites',
              icon: 'fas fa-heart'
            }
          ]
          }
        />
        <MainSection 
          movies={movies} 
        />
      </div>
    );
    }
    
  }
}

export default App;
