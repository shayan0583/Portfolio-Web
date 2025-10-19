import { ImageWithFallback } from "./figma/ImageWithFallback";


export function Hero() {
  return (
    <section className="w-full px-4 sm:px-8 mb-16 sm:mb-24">
      <div className="max-w-7xl mx-auto">
        <div className="w-full aspect-[21/9] sm:aspect-[21/7] rounded-xl overflow-hidden">
          <ImageWithFallback
            src="/Images/Web Banner.png"
            alt="Hero banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>  
    </section>
  );
}
