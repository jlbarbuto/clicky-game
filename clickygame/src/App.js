import React from 'react';
import BirdCard from "./components/BirdCard";
import birds from "./birds.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container";
import './App.css';

class App extends React.Component {
    //sets the inital state value for the class
    state = {
        message: "Click a bird to start!",
        birds: birds,
        topScore: 0,
        currScore: 0,
        clicked: [],
        directions: "The Flightless Birds of the World"
    };

    //logic for shuffling an array
    shuffleDeck = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          //remaining element randomly selected
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          //and swaped with the current element
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    //handles shuffle and reassingment of birds array
    handleShuffle = () => {
        let shuffledBirds = this.shuffleDeck(birds);
        this.setState({ birds: shuffledBirds});
    };

    //handles click events for earch bird card
    handleBirdClick = id => {
        let clickedIds = this.state.clicked;
        //check for already existing click
        if(clickedIds.includes(id)){
            //if bird's id is already in the array, game starts over
            //reset score and empty clicked array
            this.setState({
                message: "WRONG.",
                currScore: 0,
                clicked: [],
                directions: "You lost! Click a bird to start over."
            });
            return;
        }else{
            //add bird's id to the clicked array
            clickedIds.push(id);

            //update the current and top scores
            const newScore = this.state.currScore + 1;
            let newTopScore = 0;
            if (newScore>this.state.topScore){
                newTopScore = newScore;
            }else{
                newTopScore = this.state.topScore;
            }

            this.setState({
                currScore: newScore,
                message: "Yay!",
                clicked: clickedIds,
                topScore: newTopScore,
                directions: "Correct! Click a new bird."
            });
            this.handleShuffle();
            return;
        }   
    }

    render() {
        return(
            <Container>
                <Header 
                    currScore={this.state.currScore}
                    topScore={this.state.topScore}
                    directions={this.state.directions}
                />
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