import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartCSS from './Cart.module.css';
import { AppStateContext } from './AppState';

interface Props {}

interface State {
	isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen,
		}));
	};

	render(): React.ReactNode {
		return (
			<AppStateContext.Consumer>
				{state => {
					return (
						<div className={CartCSS.cartContainer}>
							<button className={CartCSS.button} type='button' onClick={this.handleClick}>
								<FiShoppingCart />
								<span>{state.cart.items.length} Pizza(s)</span>
							</button>
							<div className={CartCSS.cartDropDown} style={{ display: this.state.isOpen ? 'block' : 'none' }}>
								<ul>
									{state.cart.items.map(pizza => {
										return (
											<li key={pizza.id}>
												{pizza.name} &times; {pizza.quantity}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					);
				}}
			</AppStateContext.Consumer>
		);
	}
}

export default Cart;
