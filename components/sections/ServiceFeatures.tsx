import Image from 'next/image';

const features = [
  {
    title: '専門担当者が\n企業選びから入社までフォロー',
    description: '当社は200社を超えるタクシー企業と連携。あなたにぴったりの企業探しはもちろん、面接対策や入社後のフォローも行います。',
    imageUrl: '/feature-follow-up.jpg', // Updated image path
    alt: '面談している様子'
  },
  {
    title: '日本入国後の生活サポート',
    description: '家探しや生活上困ったことなども、専門担当者がサポート。不安なく日本での生活をスタートできます。',
    imageUrl: '/feature-life-support.jpg', // Updated image path
    alt: '日本での生活をサポートする様子'
  },
  {
    title: '在留資格の取得支援',
    description: '資格取得に必要な書類の準備もご一緒に。「将来は家族と日本に住みたい」そのような夢も、実現に向けてサポートします。',
    imageUrl: '/feature-visa-support.jpg', // Updated image path
    alt: '書類作成をサポートする様子'
  },
];

const ServiceFeatures = () => {
  return (
    <section id="service" className="py-16 md:py-24 bg-white"> {/* Added id for navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          RIDE JOB FOR SSWでできること
        </h2>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Image Column */}
              <div className={`relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={feature.imageUrl}
                  alt={feature.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Text Column */}
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                {/* Use whitespace-pre-line to respect newlines in the title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures; 