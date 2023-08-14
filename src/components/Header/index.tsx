import { useState } from "react";
import Navigation from "./components/Navigation";

function Header() {
	const [toggled, setToggled] = useState(false);

	return (
		<>
			<span className="absolute w-[50vw] h-[50vh] md:h-[60vh] bg-lightGrayishBlue rounded-bl-[50px] -z-20 right-0"></span>
			<header className="flex w-[80vw]  justify-between items-center mx-auto mt-10 overflow-x-hidden">
				<div className="fixed md:static">
					<img src="/logo.svg" alt="" />
				</div>
				<Navigation toggled={toggled} />
				<img
					src={toggled ? "icon-close.svg" : "icon-hamburger.svg"}
					className="w-[20px] h-[20px] md:hidden z-50 md:static fixed right-10"
					alt=""
					onClick={() => setToggled((prev) => !prev)}
				/>
			</header>
		</>
	);
}

export default Header;
