import React from 'react';
import Row from './rows.jsx';
// import ReactBoard from 'react-board';
  
var Board = (props) => {
	return (
		<div className="board">
			{props.board.map((row, i) => <Row key={i} row={row} addChip={props.addChip}/> )}
		</div>
	)
}	

	

export default Board;



// class Board extends React.Component {
//   renderSquare(i) {
//   	return <div>[ 0 ]</div>
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }
