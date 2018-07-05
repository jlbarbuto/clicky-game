import React from 'react';
import BirdCard from "./components/BirdCard";
import birds from "./birds.json";
import Wrapper from "./components/Wrapper";
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
        birds
    };

    render() {
        return(
            <Wrapper>
                {this.state.birds.map(item => (
                    <BirdCard 
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        image={item.image}
                    />
                ))}
            </Wrapper>
        )
    }
};


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
