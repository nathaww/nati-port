import LogoLoop from "./Marquee";


// Alternative with image sources
const imageLogos = [
    { src: "/imgs/profile.jpg", alt: "Company 1", href: "https://company1.com" },
    { src: "/imgs/profile.jpg", alt: "Company 2", href: "https://company2.com" },
    { src: "/imgs/profile.jpg", alt: "Company 3", href: "https://company3.com" },
];

const TrustedBy = () => {
    return (
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
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