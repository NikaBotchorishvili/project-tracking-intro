import { motion } from "framer-motion";

function Navigation({toggled}: {toggled: boolean}) {
	return (
		<motion.nav
			initial={{ top: -200, opacity: "var(--opacity-from)" }}
			animate={{
				top: toggled ? 100 : -200,
				opacity: toggled ? "var(--opacity-to)" : "var(--opacity-from)",
			}}
			className="flex flex-col md:flex-row md:h-fit md:bg-opacity-0 bg-white p-8 md:p-0 shadow-2xl w-[80vw] sm:w-[60vw] md:w-fit left-1/2 -translate-x-1/2 top-20  md:translate-x-0 fixed z-50  md:static md:gap-x-20 items-center gap-y-8 text-center 
                    [--opacity-from:0%] 
                    [--opacity-to:100%] 
                    md:[--opacity-from:100%] 
                    md:[--opacity-to:100%]"
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
	);
}

export default Navigation;
