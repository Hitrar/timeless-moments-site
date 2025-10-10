const Events = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-playfair font-semibold mb-6 text-center">
            Events Coverage
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Professional photography for all your special occasions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Corporate Events
              </h2>
              <p className="text-muted-foreground">
                Capture your business milestones, conferences, and corporate gatherings with professional photography that reflects your brand's excellence.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Engagement Sessions
              </h2>
              <p className="text-muted-foreground">
                Celebrate your love story with a personalized engagement photo session in stunning locations of your choice.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Anniversary Celebrations
              </h2>
              <p className="text-muted-foreground">
                Mark your special milestones with beautiful photography that captures the enduring love and memories you've created together.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Private Parties
              </h2>
              <p className="text-muted-foreground">
                From birthdays to family reunions, we document your private celebrations with elegance and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
