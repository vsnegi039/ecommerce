import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";

import Search from "./Search/Search.jsx";
import Cart from "../Cart/Cart.jsx";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
	const { cartCount } = useContext(Context);
	const navigate = useNavigate();

	const toAbout = () => {
		scrollToSection(3800);
	};

	const toCategory = () => {
		scrollToSection(600);
	};

	const scrollToSection = offset => {
		const startPosition = window.pageYOffset;
		const distance = offset - startPosition;
		const duration = 1000; // Duration of the animation in milliseconds
		let startTimestamp;

		const animateScroll = timestamp => {
			if (!startTimestamp) startTimestamp = timestamp;
			const elapsed = timestamp - startTimestamp;
			const progress = Math.min(elapsed / duration, 1);
			const easeProgress = easeInOutQuad(progress);
			window.scrollTo(0, startPosition + distance * easeProgress);
			if (elapsed < duration) {
				window.requestAnimationFrame(animateScroll);
			}
		};

		window.requestAnimationFrame(animateScroll);
	};

	const easeInOutQuad = t => {
		return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	};

	const [scrolled, setScrolled] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [showSearch, setShowSearch] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 70) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header className={`main-header ${scrolled ? "stickyHeader" : ""}`}>
				<div className="header-content">
					<ul className="left">
						<li onClick={() => navigate("/")}>Home</li>
						<li onClick={toCategory}>Categories</li>
						<li onClick={toAbout}>About</li>
					</ul>
					<div className="center" onClick={() => navigate("/")}>
						JSDEVSTORE
					</div>
					<div className="right">
						<TbSearch onClick={() => setShowSearch(true)} />
						<span
							className="cart-icon"
							onClick={() => setShowCart(true)}
						>
							<CgShoppingCart />
							{!!cartCount && <span>{cartCount}</span>}
						</span>
					</div>
				</div>
			</header>
			{showCart && <Cart setshowCart={setShowCart} />}
			{showSearch && <Search setShowSearch={setShowSearch} />}
		</>
	);
};

export default Header;
