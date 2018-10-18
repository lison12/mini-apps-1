import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		var board =  [['red','blank','blank','blank','blank','blank','blank'],
									['blank','blank','blank','blank','blank','blank','blank'],
									['blank','blank','blank','blank','blank','blank','blank'],
									['blank','blank','blank','blank','blank','blank','blank'],
									['blank','blank','blank','blank','blank','blank','blank'],
									['blank','blank','blank','blank','blank','blank','blank']]

		this.state = {
			board: board,
			player: 'red'
		}
	}

	changePlayer() {
		if (this.state.player === 'red') {
			this.setState ({
				player: 'yellow'
			})	
		} else {
			this.setState ({
				player: 'red'
			})	
		}
	}

	addChip() {
		
	}


  render() {
    return (
      <div className="game">
        <h1>Connect Four</h1>
        <div className="game-board">
	        <Board board={this.state.board}/>
        </div>
      </div>
    );
  }
}



// ========================================



export default App;
        
