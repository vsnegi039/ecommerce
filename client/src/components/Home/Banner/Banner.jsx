import React from "react";
import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
	const toShop = () => {
		window.scrollTo(0, 0);
		window.scrollTo({
			top: 1080-window.pageYOffset,
			behavior: "smooth",
		});
	};

	return (
		<div className="hero-banner">
			<div className="content">
				<div className="text-content">
					<h1>SALES</h1>
					<p>
						Convallis interdum purus adipiscing dis partuient
						posuere ac a quam a eleifend a eleifend montes
						parturient posuere curae
					</p>
					<div className="ctas">
						<div className="banner-cta">Read More</div>
						<div className="banner-cta v2" onClick={toShop}>
							Shop Now
						</div>
					</div>
				</div>
				<img className="banner-img" src={BannerImg} alt="" />
			</div>
		</div>
	);
};

export default Banner;
