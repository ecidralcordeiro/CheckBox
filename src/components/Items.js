import React, { useState } from 'react';
import Item from './Item';

export default function ItemList() {
	const [itemList, setItemList] = useState([
		{ title: 'teste', id: 1, isChecked: false },
		{ title: 'teste2', id: 2, isChecked: false },
		{ title: 'teste3', id: 3, isChecked: false },
		{ title: 'teste3', id: 4, isChecked: false },
		{ title: 'teste3', id: 5, isChecked: false },
		{ title: 'teste3', id: 6, isChecked: false },
		{ title: 'teste3', id: 7, isChecked: false },
		{ title: 'teste3', id: 8, isChecked: false },
		{ title: 'teste3', id: 9, isChecked: false },
	]);
	const [percentage, setPercetage] = useState(0);

	const handleChangeItem = (id) => {
		let newItemList = [];
		itemList.map((item) => {
			let newItem = item;
			if (item.id === id) {
				newItem.isChecked = !newItem.isChecked;
			}
			newItemList.push(newItem);
		});
		setItemList(newItemList);

		let percentTotal = newItemList.length;
		let percentCount = newItemList.filter(
			(item) => item.isChecked === true
		).length;
		let percentage = (100 * percentCount) / percentTotal;
		setPercetage(percentage);
	};

	return (
		<div>
			{itemList.map((item, index) => (
				<Item
					key={index}
					title={item.title}
					id={item.id}
					isChecked={item.isChecked}
					handleChangeItem={handleChangeItem}
				></Item>
			))}
			<span>Porcentagem: {percentage.toFixed(3)}%</span>
		</div>
	);
}