const PrintPricing = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-playfair font-semibold mb-6 text-center">
            Print Credit & Pricing
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Professional printing services for your cherished memories
          </p>

          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-playfair font-semibold mb-6">
                Print Options
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fine Art Prints</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>8x10" - $45</li>
                    <li>11x14" - $75</li>
                    <li>16x20" - $125</li>
                    <li>20x30" - $195</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Canvas Prints</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>16x20" - $245</li>
                    <li>20x30" - $395</li>
                    <li>24x36" - $545</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Albums</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>8x8" Album (20 pages) - $495</li>
                    <li>10x10" Album (30 pages) - $795</li>
                    <li>12x12" Album (40 pages) - $1,195</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-8 border border-accent">
              <h3 className="text-xl font-semibold mb-3">Print Credits</h3>
              <p className="text-muted-foreground">
                All wedding collections include print credits that can be used towards any print products. 
                Credits never expire and can be combined with special offers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintPricing;
