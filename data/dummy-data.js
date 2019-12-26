import Product from '../models/products';
const PRODUCTS = [
	new Product(
		'p1',
		'u1',
		'Red Shirt',
		'https://www.iranpooshak.com/wp-content/uploads/2019/07/x-1-600x600.jpg',
		'A red t-shirt, perfect for days with non-red weather.',
		29.99
	),
	new Product(
		'p2',
		'u1',
		'Blue Carpet',
		'https://kashansara.com/wp-content/uploads/2018/11/FarshKashan-Eli-T-1000shane-3000P-3.jpg',
		'Fits your red shirt perfectly. To stand on. Not to wear it.',
		99.99
	),
	new Product(
		'p3',
		'u2',
		'Coffee Mug',
		'http://www.lottos.ir/content/images/thumbs/0003104_-.jpeg',
		'Can also be used for tea!',
		8.99
	),
	new Product(
		'p4',
		'u3',
		'The Book - Limited Edition',
		'https://seemorgh.com/images/contenet1398/culture/04/2/book.jpg',
		"What the content is? Why would that matter? It's a limited edition!",
		15.99
	),
	new Product(
		'p5',
		'u3',
		'notebook',
		'https://www.asuscenter.ir/images/Marketing/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C%20%D8%AE%D8%B1%DB%8C%D8%AF/%D9%86%D8%AA%20%D8%A8%D9%88%DA%A9/%D9%86%D8%AA-%D8%A8%D9%88%DA%A9--1.jpg',
		'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
		2299.99
	),
	new Product(
		'p6',
		'u1',
		'Pen',
		'https://aragifts.com/uploads/product/1518225893.jpg',
		"Can be used for role-playing (not the kind of role-playing you're thinking about...).",
		5.49
	)
];

export default PRODUCTS;
