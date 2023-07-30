import Product from "./Product/Product";
import "./Product.scss";

const Products = ({ products, innerPage, headingText }) => {

	return (
		<div className="products-container">
			{!innerPage && <div className="sec-heading">{headingText}</div>}
			<div className="products">
				{products?.data?.map(item => {
					return ( 
						<Product 
							key={item.id}
							id={item.id}
							data={item.attributes}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Products;
