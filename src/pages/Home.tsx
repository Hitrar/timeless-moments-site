import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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

      {/* Carousel Section */}
      <section className="w-full py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-semibold mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capturing life's most precious moments
          </p>
        </div>

        {/* Weddings */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold">
              Weddings
            </h3>
            <Link to="/gallery?category=weddings">
              <Button variant="ghost" className="text-accent hover:text-accent/80">
                View More →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredImages.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-[3/4] group fade-in"
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
        </div>

        {/* Baby Pictures */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold">
              Baby Pictures
            </h3>
            <Link to="/gallery?category=baby">
              <Button variant="ghost" className="text-accent hover:text-accent/80">
                View More →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredImages.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-[3/4] group fade-in"
              >
                <img
                  src={image.src}
                  alt="Baby photography"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Maternity/Baby Showers */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold">
              Maternity / Baby Showers
            </h3>
            <Link to="/gallery?category=maternity">
              <Button variant="ghost" className="text-accent hover:text-accent/80">
                View More →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredImages.slice(3, 6).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-[3/4] group fade-in"
              >
                <img
                  src={image.src}
                  alt="Maternity and baby shower photography"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Studio Shoots */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-playfair font-semibold">
              Studio Shoots
            </h3>
            <Link to="/gallery?category=studio">
              <Button variant="ghost" className="text-accent hover:text-accent/80">
                View More →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredImages.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-[3/4] group fade-in"
              >
                <img
                  src={image.src}
                  alt="Studio photography"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
