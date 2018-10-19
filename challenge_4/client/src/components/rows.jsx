import React from 'react';

  
var Row = (props) => {
	return (
		<div className="row">
			{props.row.map((col, i) => {
				return (
					<button className={`column ${col}`} key={i} data-col={i} onClick={props.addChip}> {col} </button>
				);
			})}
		</div>
	);
}	


export default Row;