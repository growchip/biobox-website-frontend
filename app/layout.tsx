/** @format */

import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Providers } from '@/context/Provider';
import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Script from "next/script";

const sora = localFont({
	src: '../public/fonts/Sora-Regular.ttf',
	weight: '400',
	variable: '--font-sora',
});

const redHatDisplay = localFont({
	src: [
		{
			path: '../public/fonts/RedHatDisplay-SemiBold.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/RedHatDisplay-SemiBold.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/RedHatDisplay-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/fonts/RedHatDisplay-SemiBold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-red-hat-display',
});

const sanchez = localFont({
	src: '../public/fonts/Sanchez-Regular.ttf',
	weight: '400',
	variable: '--font-sanchez',
});

const poppins = localFont({
	src: '../public/fonts/Poppins-Regular.ttf',
	weight: '400',
	variable: '--font-poppins',
});

const marope = localFont({
	src: '../public/fonts/Manrope-Medium.ttf',
	weight: '400',
	variable: '--font-marope',
});

export const metadata: Metadata = {
	title: 'BioBox Pharma',
	description:
		'BioBox Pharma is a leading pharmaceutical manufacturing company dedicated to quality, innovation, and compliance',
	icons: {
		icon: `/images/bioLogo.png`,
	},
	verification: {
		google: 'ctZ9WxAjBF5WztUtYLZgas9cSDug5Jd3dgVlkIbdIaU',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const schema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "BioBox Pharma",
		url: "https://bioboxpharma.com/",
		logo: "https://bioboxpharma.com/images/bioLogo.png",
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+91-9988195950",
			contactType: "customer service",
			areaServed: "IN",
			availableLanguage: ["English", "Hindi"]
		},
		sameAs: [
			"https://www.facebook.com/p/BioBox-Pharma-61577664395670/",
			"https://www.instagram.com/bioboxpharma/"
		]
	};

	return (
		<html lang="en">
			<head>
				<meta
					name="google-site-verification"
					content="ctZ9WxAjBF5WztUtYLZgas9cSDug5Jd3dgVlkIbdIaU"
				/>

				{/* Google Analytics */}

				<Script id="google-analytics" strategy="afterInteractive">
					{`
					  window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());
					  gtag('config', 'G-TTTFXCJ5RR');
					`}
				</Script>

				{/* Organization Schema */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(schema),
					}}
				/>

				{/* Google Tag Manager */}
				<script
				dangerouslySetInnerHTML={{
					__html: `
					(function(w,d,s,l,i){w[l]=w[l]||[];
					w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
					var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
					j.async=true;
					j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
					f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-52Q5RR75');
					`,
				}}
				/>
			</head>

			<body
				className={`${sora.variable} ${marope.variable} ${redHatDisplay.variable} ${sanchez.variable} ${poppins.variable} antialiased`}
			>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-52Q5RR75"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
					</noscript>
				<Providers>
					{children}
					<FloatingCTA />
				</Providers>
			</body>
		</html>
	);
}