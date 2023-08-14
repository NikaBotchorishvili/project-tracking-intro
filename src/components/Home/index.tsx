function Home() {
	return (
		<main className="flex md:flex-row flex-col-reverse mt-24 w-[80vw] justify-between mx-auto items-center">
			<section className="flex flex-col gap-y-6  ">
				<h3 className=" flex gap-x-2 items-center">
					<mark className="text-xl bg-veryDarkBlue text-lightGrayishBlue p-1 rounded-lg font-bold font-barlowCondensed">
						NEW
					</mark>{" "}
					<span className="text-darkGrayishBlue tracking-widest text-md ">
						MONOGRAPH DASHBOARD
					</span>
				</h3>
				<h1 className="lg:text-6xl text-4xl text-veryDarkBlue font-barlowCondensed  font-bold md:max-w-md">
					POWERFUL INSIGHTS INTO YOUR TEAM
				</h1>
				<p className="red text-xl md:max-w-xs text-darkGrayishBlue">
					Project planning and time tracking for agile teams
				</p>

				<div className="flex gap-x-4 items-center">
					<button className="text-lightGrayishBlue bg-red font-bold font-barlowCondensed rounded-lg text-lg tracking-wide px-6 py-2 hover:bg-opacity-80">
						SCHEDULE A DEMO
					</button>
					<small className="tracking-widest text-grayishBlue text-lg ">
						TO SEE A PREVIEW
					</small>
				</div>
			</section>
			<section className="md:relative md:translate-x-1/3">
				<img src="illustration-devices.svg" className=" h-[300px]  " alt="" />
			</section>
		</main>
	);
}

export default Home;
