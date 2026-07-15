// src/components/Netflix.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/action";

const HERO = {
	name: "Titan Steel 1L — Insulated Bottle",
	tagline: "Keeps drinks cold for 24h, hot for 12h. #1 Bestseller.",
	price: 24.99,
	image: "https://placehold.co/1280x720/111111/ffffff?text=Titan+Steel+1L",
};

const ROWS = [
	{
		title: "Trending Bottles Now",
		items: [
			{ id: 1, name: "Titan Steel 1L", price: 24.99, badge: "TOP 10", color: "1f2937" },
			{ id: 2, name: "Glacier Glass 750ml", price: 19.99, badge: "NEW", color: "0f172a" },
			{ id: 3, name: "Aqua Flex Sport", price: 14.5, color: "312e81" },
			{ id: 4, name: "EcoPure Bamboo Cap", price: 17.25, color: "064e3b" },
			{ id: 5, name: "Nomad Collapsible", price: 12.0, color: "7c2d12" },
			{ id: 6, name: "Chrome Vacuum 500ml", price: 29.99, badge: "TOP 10", color: "1e293b" },
		],
	},
	{
		title: "Insulated & Stainless Steel",
		items: [
			{ id: 7, name: "Frost Guard 950ml", price: 27.0, color: "1e3a8a" },
			{ id: 8, name: "Summit Vacuum 1.2L", price: 33.5, color: "3f3f46" },
			{ id: 9, name: "Basecamp Wide Mouth", price: 21.75, color: "422006" },
			{ id: 10, name: "Polar Bear 750ml", price: 25.0, badge: "NEW", color: "0c4a6e" },
			{ id: 11, name: "Everest Pro 1L", price: 31.99, color: "365314" },
		],
	},
	{
		title: "Sports & Gym Bottles",
		items: [
			{ id: 12, name: "Aqua Flex Sport", price: 14.5, color: "7f1d1d" },
			{ id: 13, name: "SprintFlow Squeeze", price: 9.99, color: "581c87" },
			{ id: 14, name: "GymGrip 1L", price: 13.25, color: "134e4a" },
			{ id: 15, name: "TrailBlaze Straw Lid", price: 15.99, badge: "NEW", color: "78350f" },
			{ id: 16, name: "PulseFit Shaker", price: 11.5, color: "1e1b4b" },
		],
	},
	{
		title: "Kids Collection",
		items: [
			{ id: 17, name: "Little Sipper 350ml", price: 8.99, color: "9d174d" },
			{ id: 18, name: "Dino Splash 400ml", price: 9.5, color: "155e75" },
			{ id: 19, name: "Rocket Kids Bottle", price: 10.0, color: "854d0e" },
			{ id: 20, name: "Bubble Buddy 300ml", price: 7.99, color: "3730a3" },
		],
	},
	{
		title: "New Arrivals",
		items: [
			{ id: 21, name: "Glacier Glass 750ml", price: 19.99, badge: "NEW", color: "44403c" },
			{ id: 22, name: "Chrome Vacuum 500ml", price: 29.99, badge: "NEW", color: "1c1917" },
			{ id: 23, name: "Polar Bear 750ml", price: 25.0, badge: "NEW", color: "0891b2" },
			{ id: 24, name: "TrailBlaze Straw Lid", price: 15.99, badge: "NEW", color: "b45309" },
		],
	},
];

const Netflix = () => {
	const [cartCount, setCartCount] = useState(0);
	const [toast, setToast] = useState("");
	const [profileOpen, setProfileOpen] = useState(false);
	const loggedInUser = useSelector((state) => state.loggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutUser());
		navigate("/login");
	};

	const addToCart = (name) => {
		setCartCount((c) => c + 1);
		setToast(`Added "${name}" to cart`);
		window.clearTimeout(addToCart._t);
		addToCart._t = window.setTimeout(() => setToast(""), 1800);
	};

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Top nav */}
			<div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-10 py-4 bg-gradient-to-b from-black/90 to-transparent">
				<div className="flex items-center gap-8">
					<span className="text-red-600 text-2xl md:text-3xl font-black tracking-tight">HYDROFLIX</span>
					<nav className="hidden md:flex gap-5 text-sm text-gray-200">
						<button type="button" className="hover:text-gray-400">Home</button>
						<button type="button" className="hover:text-gray-400">Bottles</button>
						<button type="button" className="hover:text-gray-400">New &amp; Popular</button>
						<button type="button" className="hover:text-gray-400">My List</button>
					</nav>
				</div>
				<div className="flex items-center gap-4 text-sm">
					<span className="hidden sm:inline text-gray-200">🔍</span>
					<span className="relative text-gray-200">
						🛒
						{cartCount > 0 && (
							<span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
								{cartCount}
							</span>
						)}
					</span>
					<div className="relative">
						<button
							type="button"
							onClick={() => setProfileOpen((v) => !v)}
							className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-xs font-bold"
						>
							{(loggedInUser?.name || "U").charAt(0).toUpperCase()}
						</button>
						{profileOpen && (
							<div className="absolute right-0 top-full mt-2 bg-neutral-900 border border-neutral-700 rounded shadow-xl min-w-[140px] z-30">
								{loggedInUser?.name && (
									<div className="px-3 py-2 text-xs text-gray-400 border-b border-neutral-700 truncate">
										Hi, {loggedInUser.name}
									</div>
								)}
								<button
									type="button"
									onClick={handleLogout}
									className="w-full text-left px-3 py-2 text-sm hover:bg-neutral-800"
								>
									Log Out
								</button>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Hero */}
			<div className="relative w-full h-[60vw] max-h-[85vh] min-h-[420px]">
				<img src={HERO.image} alt={HERO.name} className="w-full h-full object-cover" />
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
				<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent" />
				<div className="absolute left-4 md:left-10 bottom-16 md:bottom-28 max-w-xl">
					<h1 className="text-3xl md:text-6xl font-black mb-4 drop-shadow-lg">{HERO.name}</h1>
					<p className="text-sm md:text-lg text-gray-200 mb-2">{HERO.tagline}</p>
					<p className="text-xl md:text-2xl font-semibold mb-5">${HERO.price.toFixed(2)}</p>
					<div className="flex gap-3">
						<button
							onClick={() => addToCart(HERO.name)}
							className="flex items-center gap-2 bg-white text-black font-bold px-5 py-2 md:px-7 md:py-3 rounded hover:bg-gray-200 transition"
						>
							🛒 Add to Cart
						</button>
						<button className="flex items-center gap-2 bg-gray-500/40 text-white font-bold px-5 py-2 md:px-7 md:py-3 rounded hover:bg-gray-500/60 transition">
							ℹ️ More Info
						</button>
					</div>
				</div>
			</div>

			{/* Rows */}
			<div className="relative z-10 -mt-10 md:-mt-24 pb-20 px-4 md:px-10 space-y-8">
				{ROWS.map((row) => (
					<div key={row.title}>
						<h2 className="text-lg md:text-xl font-bold mb-2">{row.title}</h2>
						<div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
							{row.items.map((item) => (
								<div
									key={item.id}
									className="group relative flex-shrink-0 w-40 md:w-56 cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10"
								>
									<div
										className="w-full h-24 md:h-32 rounded flex items-center justify-center text-center text-xs md:text-sm font-semibold px-2 relative overflow-hidden"
										style={{ backgroundColor: `#${item.color}` }}
									>
										{item.badge && (
											<span className="absolute top-1 left-1 bg-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded">
												{item.badge}
											</span>
										)}
										💧 {item.name}
									</div>
									<div className="hidden group-hover:block absolute left-0 right-0 top-full bg-neutral-900 rounded-b p-2 shadow-xl z-20">
										<p className="text-xs font-semibold truncate">{item.name}</p>
										<p className="text-xs text-gray-400 mb-2">${item.price.toFixed(2)}</p>
										<button
											onClick={() => addToCart(item.name)}
											className="w-full text-xs bg-white text-black font-bold py-1 rounded hover:bg-gray-200"
										>
											+ Add to Cart
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			{toast && (
				<div className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded shadow-lg text-sm font-semibold z-30">
					{toast}
				</div>
			)}
		</div>
	);
};

export default Netflix;
