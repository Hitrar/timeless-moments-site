const Investment = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-playfair font-semibold mb-6 text-center">
            Investment
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Timeless memories deserve timeless investment
          </p>

          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Wedding Collections
              </h2>
              <p className="text-muted-foreground mb-6">
                Our wedding photography collections are designed to capture every precious moment of your special day.
                Each package includes professional editing, online gallery, and high-resolution digital files.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Essential Collection</h3>
                  <p className="text-muted-foreground">Starting from $2,500</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Collection</h3>
                  <p className="text-muted-foreground">Starting from $4,000</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Luxury Collection</h3>
                  <p className="text-muted-foreground">Starting from $6,500</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                For detailed pricing and customized packages, please get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investment;
