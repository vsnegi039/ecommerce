import React from "react";

import { useNavigate } from 'react-router-dom';

import "./Category.scss";

const Category = ({ categories }) => {
	const navigate = useNavigate();

	if (!categories || !categories.data) {
		// Handle the case when categories are not available
		return null;
	}

	// Render the categories component with the available data
	return (
		<div className="shop-by-category">
			<div className="categories">
				{categories?.data?.map(item => (
					<div key={item.id} className="category" onClick={()=> navigate(`/category/${item.id}`)}>
						<img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	);
};


export default Category;
