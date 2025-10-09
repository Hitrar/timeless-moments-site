import photographerImage from "@/assets/photographer.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-semibold mb-4">
            About Me
          </h1>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="fade-in">
            <div className="aspect-square overflow-hidden rounded-sm">
              <img
                src={photographerImage}
                alt="Wedding photographer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6 fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl sm:text-4xl font-playfair font-semibold">
              Hello, I'm Your Photographer
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience capturing love stories, I specialize in creating 
                timeless, elegant wedding photography that reflects the unique beauty of each couple's 
                special day.
              </p>
              
              <p>
                My approach is natural and unobtrusive, allowing genuine moments to unfold while 
                ensuring every precious detail is beautifully preserved. I believe that the most 
                stunning photographs come from authentic emotions and connections.
              </p>
              
              <p>
                Based in the heart of the city, I travel throughout the region and beyond to 
                document weddings with artistry and care. Each wedding is a new story waiting to 
                be told, and I'm honored to be part of your journey.
              </p>
              
              <p className="text-foreground font-medium">
                Let's create something beautiful together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
