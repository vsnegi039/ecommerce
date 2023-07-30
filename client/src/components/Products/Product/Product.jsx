import React from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";


const Product = ({ id, data }) => {
	const navigate = useNavigate();

	if (data==null) {
		// Handle the case when categories are not available
		return null;
	}
	return (
		<div className="product-card" onClick={()=>navigate("/product/"+id)}>
			<div className="thumbnail">
				<img
					src={
						process.env.REACT_APP_DEV_URL +
						data.img.data.attributes.url
					}
					alt=""
				/>
			</div>
			<div className="prod-details">
				<span className="name">{data.title}</span>
				<span className="price">&#8377;{data.price}</span>
			</div>
		</div>
	);
};

export default Product;
