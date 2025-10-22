import LogoLoop from "./Marquee";


// Alternative with image sources
const imageLogos = [
    { src: "/imgs/profile.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/imgs/profile.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/imgs/profile.png", alt: "Company 3", href: "https://company3.com" },
];

const TrustedBy = () => {
    return (
        <div className="relative overflow-hidden bg-white h-auto flex flex-col justify-center items-center rounded-b-[4rem] pb-20">
            <h3 className="text-xl mb-4 font-manrope font-extrabold">Trusted By</h3>
            <LogoLoop
                logos={imageLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </div>
    );
}
export default TrustedBy;