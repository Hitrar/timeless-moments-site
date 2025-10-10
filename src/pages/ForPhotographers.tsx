const ForPhotographers = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-playfair font-semibold mb-6 text-center">
            For Photographers
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Collaborate with us and grow your craft
          </p>

          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Mentorship Programs
              </h2>
              <p className="text-muted-foreground mb-4">
                Join our mentorship program to learn advanced wedding photography techniques, 
                business strategies, and post-processing workflows from experienced professionals.
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>One-on-one coaching sessions</li>
                <li>Hands-on wedding day experience</li>
                <li>Portfolio review and feedback</li>
                <li>Business development guidance</li>
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Second Shooting Opportunities
              </h2>
              <p className="text-muted-foreground mb-4">
                We're always looking for talented photographers to join our team as second shooters. 
                Gain valuable experience while working on beautiful weddings.
              </p>
              <p className="text-muted-foreground">
                Requirements: Professional equipment, reliable transportation, and a portfolio 
                demonstrating wedding or event photography experience.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-playfair font-semibold mb-4">
                Workshops & Education
              </h2>
              <p className="text-muted-foreground">
                Attend our periodic workshops covering lighting techniques, posing, composition, 
                and the art of storytelling through wedding photography.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForPhotographers;
