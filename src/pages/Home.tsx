import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const Home = () => {
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
    </div>
  );
};

export default Home;
