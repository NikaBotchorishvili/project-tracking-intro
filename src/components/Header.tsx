function Header() {
	return (
		<header className="flex md:w-[80vw] justify-between md:mx-auto md:mt-10">
			<div>
                <img src="/logo.svg" alt="" />
            </div>
			<nav className="flex md: gap-x-20">
				<ul className="flex md:gap-x-10">
					<li>
						<a className="font-barlowCondensed text-veryDarkBlue font-bold hover:underline" href="#">PRODUCT</a>
					</li>
					<li>
						<a className="font-barlowCondensed text-veryDarkBlue font-bold hover:underline" href="#">FEATURES</a>
					</li>
					<li>
						<a className="font-barlowCondensed text-veryDarkBlue font-bold hover:underline" href="#">PRICING</a>
					</li>
				</ul>
			    <a className="font-barlowCondensed text-darkGrayishBlue font-bold hover:underline" href="#">LOGIN</a>
			</nav>
		</header>
	);
}

export default Header;
