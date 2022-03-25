import React from 'react';
import PizzaCSS from './Pizza.module.css';
import { useSetState } from './AppState';

interface Pizza {
	id: number;
	name: string;
	description: string;
	price: number;
}

interface Props {
	pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
	const setState = useSetState();

	const handleAddToCart = () => {
		setState(previous => {
			const itemExists = previous.cart.items.find(item => item.id === pizza.id);
			return {
				...previous,
				cart: {
					...previous.cart,
					items: itemExists
						? previous.cart.items.map(e => {
								if (e.id === pizza.id) {
									return { ...e, quantity: e.quantity + 1 };
								}
								return e;
						  })
						: [...previous.cart.items, { id: pizza.id, name: pizza.name, price: pizza.price, quantity: 1 }],
				},
			};
		});
	};

	return (
		<li className={PizzaCSS.container}>
			<h2>{pizza.name}</h2>
			<p>{pizza.description}</p>
			<p>{pizza.price}</p>
			<button type='button' onClick={handleAddToCart}>
				Add to Cart
			</button>
		</li>
	);
};

export default Pizza;
