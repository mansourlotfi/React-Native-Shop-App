import PRODUCTS from '../../data/dummy-data';

const initialState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1')
};

export default (State = initialState, action) => {
	return State;
};
