import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Home = () => {
  const featuredImages = [
    { src: gallery1, alt: "Wedding ceremony" },
    { src: gallery2, alt: "Couple portrait" },
    { src: gallery3, alt: "Reception details" },
    { src: gallery4, alt: "Romantic moment" },
    { src: gallery5, alt: "Wedding celebration" },
    { src: gallery6, alt: "Special moments" },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)]">
      {/* Hero Section */}
      <section className="relative h-[85vh] sm:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Elegant wedding moment"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold text-white mb-6 leading-tight">
            Capturing Timeless
            <br />
            Wedding Moments
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Elegant photography that tells your unique love story
          </p>
          <Link to="/gallery">
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 font-medium px-8 py-6 text-base sm:text-lg transition-all duration-300"
            >
              View Gallery
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-semibold mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our most cherished wedding moments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-[3/4] group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button size="lg" variant="outline" className="font-medium">
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
