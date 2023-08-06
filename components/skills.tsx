import Image from "next/image";


export const Skills = ({ skillsRef }: { skillsRef: React.MutableRefObject<HTMLElement | null> }) => {

	const confidentWith = [
		{ name: 'HTML', image: '/html.png' },
		{ name: 'CSS', image: '/css.png' },
		{ name: 'JavaScript', image: '/javascript.png' },
		{ name: 'TypeScript', image: '/typescript.png' },
		{ name: 'React.js', image: '/react.png' },
		{ name: 'Next.js', image: '/next.png' },
		{ name: 'Tailwind.css', image: '/tailwind.png' },
		{ name: 'Supabase', image: '/supabase.png' },
	]

	const usedInPast = [
		{ name: 'Python', image: '/python.png' },
		{ name: 'Flask', image: '/flask.png' },
		{ name: 'Solidity', image: '/solidity.png' },

	]

	const expertise = [
		{ name: 'Next.js', image: '/next.png' },
		{ name: 'PostgreSQL', image: '/postgresql.png' },
		{ name: 'MongoDB', image: '/mongodb.png' },
		{ name: 'Redux Tool Kit', image: '/redux.png' },
	]

	return <section
		className="w-full max-w-7xl mx-auto p-5 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)]"
		ref={skillsRef}
		id="skills">
		<div className="my-5 text-xl font-bold">Skills</div>



		<div className="mt-5 mb-5 text-lg font-bold">I am confident with</div>
		<ul className="grid grid-cols-2 gap-5 sm:grid-cols-3">
			{confidentWith.map((item) => <li key={item.name}>
				<div className="flex items-center space-x-1">
					<div><Image src={item.image} alt={""} height={30} width={30} /></div>
					<div>{item.name}</div>
				</div>
			</li>)}
		</ul>

		<div className="mt-10 mb-5 text-lg font-bold">I have used in past</div>
		<ul className="grid grid-cols-2 gap-5 sm:grid-cols-3">
			{usedInPast.map((item) => <li key={item.name}>
				<div className="flex items-center space-x-1">
					<div><Image src={item.image} alt={""} height={30} width={30} /></div>
					<div>{item.name}</div>
				</div>
			</li>)}
		</ul>

		<div className="mt-10 mb-5 text-lg font-bold">I want to learn/gain expertise in near future</div>
		<ul className="grid grid-cols-2 gap-5 sm:grid-cols-3">
			{expertise.map((item) => <li key={item.name}>
				<div className="flex items-center space-x-1">
					<div><Image src={item.image} alt={""} height={30} width={30} /></div>
					<div>{item.name}</div>
				</div>
			</li>)}
		</ul>

	</section>
}