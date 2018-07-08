import React from 'react';
import BirdCard from "./components/BirdCard";
import birds from "./birds.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container";
import Nav from "./components/Nav";
import './App.css';

class App extends React.Component {
    state = {
        message: "Click a bird to start!",
        birds: birds,
        topScore: 0,
        currScore: 0
    };

    shuffleDeck = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    handleShuffle = () => {
        let shuffledBirds = this.shuffleDeck(birds);
        this.setState({ birds: shuffledBirds});
    };

    handleBirdClick = event => {
        event.preventDefault();
        this.handleShuffle();
    }

    render() {
        return(
            <Container>
                <Nav
                    message={this.state.message}
                    currScore={this.state.currScore}
                    topScore={this.state.topScore}
                />
                <Header />
                <Wrapper>
                    {this.state.birds.map(item => (
                        <BirdCard 
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            handleBirdClick={this.handleBirdClick}
                        />
                    ))}
                </Wrapper>
            </Container>
        )
    }
};

export default App;