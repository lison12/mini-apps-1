import React from 'react';

  
var Row = (props) => {
	return (
		<div className="row">
			{props.row.map((col, i) => {
				return (
					<div className={`column ${col}`} key={i}> {col} </div>
				);
			})}
		</div>
	);
}	


export default Row;