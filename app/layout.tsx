import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Spavecraft - Engineering the Infinite",
	description: "Transform your business with cutting-edge technology and intelligent AI solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className="font-sans antialiased">
				{children}
				{process.env.NODE_ENV === "production" && <Analytics />}
			</body>
		</html>
	);
}
