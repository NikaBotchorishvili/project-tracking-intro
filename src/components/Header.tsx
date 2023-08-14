import { motion } from "framer-motion";
import { useState } from "react";

function Header() {
	const [toggled, setToggled] = useState(false);

	return (
		<header className="flex w-[80vw] relative justify-between items-center mx-auto mt-10 overflow-x-hidden ">
			<div>
				<img src="/logo.svg" alt="" />
			</div>
			<motion.nav
				initial={{ top: -200, opacity: 0 }}
				animate={{ 
					top: toggled ? 100 : -200 ,
					opacity: toggled? 1: 0,
				}}
				className="flex flex-col md:flex-row md:h-fit bg-white p-8 md:p-0 md:bg-none shadow-2xl w-[90vw] md:w-fit left-1/2 -translate-x-1/2 top-20  md:translate-x-0 fixed md:static md:gap-x-20 items-center gap-y-8 text-center"
			>
				<ul className="flex md:flex-row md:w-fit w-[200px] flex-col gap-y-5 md:gap-x-10">
					<li>
						<a
							className="font-barlowCondensed text-veryDarkBlue font-bold hover:underline"
							href="#"
						>
							PRODUCT
						</a>
					</li>
					<li>
						<a
							className="font-barlowCondensed text-veryDarkBlue font-bold hover:underline"
							href="#"
						>
							FEATURES
						</a>
					</li>
					<li>
						<a
							className="font-barlowCondensed text-veryDarkBlue font-bold hover:underline"
							href="#"
						>
							PRICING
						</a>
					</li>
				</ul>
				<a
					className="font-barlowCondensed md:border-none border-t border-t-darkGrayishBlue md:w-fit w-[90%] text-darkGrayishBlue font-bold hover:underline"
					href="#"
				>
					LOGIN
				</a>
			</motion.nav>
			<img
				src={toggled ? "icon-close.svg" : "icon-hamburger.svg"}
				className="w-[20px] h-[20px] md:hidden z-50"
				alt=""
				onClick={() => setToggled((prev) => !prev)}
			/>
		</header>
	);
}

export default Header;
