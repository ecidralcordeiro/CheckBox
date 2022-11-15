

import React from 'react';

export default function Item(props) {
	return (
		<div>
			<label>
				<input
					type="checkbox"
					value={props.isChecked}
					onChange={() => props.handleChangeItem(props.id)}
				/>
				{props.title}
			</label>
		</div>
	);
}