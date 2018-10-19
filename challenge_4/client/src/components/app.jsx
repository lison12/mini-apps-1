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
									['blank','blank','blank','yellow','blank','blank','blank']]

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

	addChip(event) {
		var columnIndex = event.target.dataset.col;
		var newBoard = this.state.board;
		for (var i = newBoard.length-1; i >= 0; i--) {
			if (newBoard[i][columnIndex] === 'blank') {
				newBoard[i][columnIndex] = this.state.player;
			}
		}
		console.log(newBoard)
		this.changePlayer();
		this.setState ({
			board: newBoard
		})
	}


  render() {
    return (
      <div className="game">
        <h1>Connect Four</h1>
        <div className="game-board">
	        <Board board={this.state.board} addChip={this.addChip.bind(this)}/>
        </div>
      </div>
    );
  }
}



// ========================================



export default App;
        
