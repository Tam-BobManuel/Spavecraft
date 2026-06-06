import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Products } from "@/components/sections/products";
import { Missions } from "@/components/sections/missions";
import { Solutions } from "@/components/sections/solutions";
import { Innovation } from "@/components/sections/innovation";
import { CTA } from "@/components/sections/cta";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Features />
				<Products />
				<Missions />
				<Solutions />
				<Innovation />
				<CTA />
			</main>
			<footer className="border-t border-orange-200/30 bg-white/80 px-4 py-8 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<p className="text-sm text-gray-400">&copy; 2024 Spavecraft. All rights reserved.</p>
						<div className="flex gap-6">
							<a href="#" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Privacy</a>
							<a href="#" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Terms</a>
							<a href="#" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Contact</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
