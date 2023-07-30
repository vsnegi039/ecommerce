import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	// const closeSearch = () => {
	// 	setShowSearch(false);
	// }

	const onChange = e => {
		setQuery(e.target.value);
	};

	let { data } = useFetch(
		`/api/products?populate=*&filters[title][$contains]=${query}`
	);

	if (!query.length) {
		data = null;
	}

	return (
		<div className="search-modal">
			<div className="form-field">
				<input
					autoFocus
					type="text"
					placeholder="Search for products"
					value={query}
					onChange={onChange}
				/>
				<span onClick={() => setShowSearch(false)}>
					<MdClose className="close-btn" />
				</span>
			</div>
			<div className="search-result-content">
				{!data?.data?.length && <div className="start-msg"></div>}
				<div className="search-results">
					{data?.data?.map(item => (
						<div
							className="search-result-item"
							key={item.id}
							onClick={() => {
								navigate("/product/" + item.id);
								setShowSearch(false);
							}}
						>
							<div className="img-container">
								<img
									src={
										process.env
											.REACT_APP_STRIPE_APP_DEV_URL +
										item.attributes.img.data.attributes.url
									}
								/>
							</div>
							<div className="prod-details">
								<span className="name">
									{item.attributes.title}
								</span>
								<span className="desc">
									{item.attributes.description}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Search;
