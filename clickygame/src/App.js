import React from 'react';
import BirdCard from "./components/BirdCard";
import birds from "./birds.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container";
import Nav from "./components/Nav";
import './App.css';

class App extends React.Component {
    //sets the inital state value for the class
    state = {
        message: "Click a bird to start!",
        birds: birds,
        topScore: 0,
        currScore: 0,
        // clicked: ["a"]
    };

    //logic for shuffling an array
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

    //handles shuffle and reassingment of birds array
    handleShuffle = () => {
        let shuffledBirds = this.shuffleDeck(birds);
        this.setState({ birds: shuffledBirds});
    };

    //handles click events for earch bird card
    handleBirdClick = (id, clicked) => {
        const currOrder = this.state.birds;
        console.log(this.state.birds);
        console.log(id);
        console.log(clicked);
        if (clicked) {
            this.setState({
                message:"WONRG.",
                currScore: 0
            });
            this.handleShuffle();
        }else{
            currOrder.forEach((image, i) => {
                if (id===image.id){
                    currOrder[i].clicked = true;
                }
            });

            const newScore = this.state.currScore + 1;
            let newTopScore = 0;
            if (newScore>this.state.topScore){
                newTopScore = newScore;
            }else{
                newTopScore = this.state.topScore;
            }

            this.setState({
                message:"Yay!",
                currScore: newScore,
                topScore: newTopScore
            });
            this.handleShuffle();
        }


        // // event.preventDefault();
        // console.log("this is the id of the clicked bird: " + id);
        // console.log("original clicked length: " + this.state.clicked.length);

        // //for loop goes through every element in the 'clicked' array
        // for (let i=0; i<this.state.clicked.length; i++){
        //     console.log(this.state.clicked[i]);
        //     console.log(typeof this.state.clicked[i]);
        //     var compareId = toString(id);
        //     //if the current bird's id matches anything the clicked array...
        //     if (this.state.clicked[i] === compareId){
        //         this.setState.message="WRONG.";
        //     }else{
        //         console.log(id);
        //         var newArr = this.state.clicked.slice();
        //         newArr.push(compareId);
        //         this.setState({clicked:newArr});
        //         // this.setState({ clicked: this.state.clicked.push(id) });
        //         console.log(this.state.clicked);
        //         this.handleShuffle();
        //     }
        // };
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