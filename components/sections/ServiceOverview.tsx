import Image from 'next/image'; // Import Image

const ServiceOverview = () => {
  return (
    // Consider adjusting padding/margins if background image affects layout
    <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          RIDE JOB FOR SSW<span className="text-base md:text-lg align-super">は、</span>
        </h2>
        <p className="text-3xl md:text-4xl text-red-600 font-medium max-w-3xl mx-auto mb-8">
          特定技能<span className="font-bold">「自動車運転業務」</span>
          合格者専門の求人サービスです。
        </p>
      </div>
      {/* Taxi Silhouette Background Image */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none">
          <Image
              src="/taxi-silhouette.png"
              alt="" // Decorative image, empty alt
              width={600} // Adjust size as needed
              height={300} // Adjust size as needed
              objectFit="contain" // Or "cover" depending on the image aspect ratio and desired effect
          />
      </div>
    </section>
  );
};

export default ServiceOverview; 