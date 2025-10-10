import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { id: 1, src: gallery1, alt: "Wedding dress detail", category: "weddings" },
  { id: 2, src: gallery2, alt: "Couple holding hands", category: "weddings" },
  { id: 3, src: gallery3, alt: "Wedding bouquet", category: "weddings" },
  { id: 4, src: gallery4, alt: "Baby portrait", category: "baby" },
  { id: 5, src: gallery5, alt: "Maternity shoot", category: "maternity" },
  { id: 6, src: gallery6, alt: "Studio portrait", category: "studio" },
  { id: 7, src: gallery1, alt: "Wedding moment", category: "weddings" },
  { id: 8, src: gallery2, alt: "Baby smiling", category: "baby" },
  { id: 9, src: gallery3, alt: "Baby shower", category: "maternity" },
  { id: 10, src: gallery4, alt: "Studio session", category: "studio" },
  { id: 11, src: gallery5, alt: "Bride and groom", category: "weddings" },
  { id: 12, src: gallery6, alt: "Newborn", category: "baby" },
];

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "weddings", name: "Weddings" },
    { id: "baby", name: "Baby Pictures" },
    { id: "maternity", name: "Maternity / Baby Showers" },
    { id: "studio", name: "Studio Shoots" },
  ];

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-semibold mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of beautiful moments we've had the honor to capture
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className="font-medium"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-sm cursor-pointer group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover image-hover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImageData.src}
            alt={selectedImageData.alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
