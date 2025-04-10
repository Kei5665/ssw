import Image from 'next/image';

const companyFeatures = [
  {
    title: '外国人ドライバーが在籍',
    description: '職場内に先輩ドライバーが在籍していますので、安心して仕事もスタートできます。',
    imageUrl: '/support-driver.jpg', // Updated image path
    alt: '外国人ドライバーの笑顔'
  },
  {
    title: '社員寮・各種手当あり',
    description: '会社の保有する寮がありますので、住まいを探す手間も省けます。',
    imageUrl: '/support-housing.jpg', // Updated image path
    alt: '家の模型を持つ手'
  },
  {
    title: '研修制度あり',
    description: '入社後の研修が手厚いので、はじめてでも不安なくスタートできます。',
    imageUrl: '/support-meeting.jpg', // Updated image path
    alt: '研修を受けている様子'
  },
];

const TaxiCompanyFeatures = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          弊社が紹介する<br className="sm:hidden" />タクシー会社の特徴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={feature.imageUrl}
                  alt={feature.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaxiCompanyFeatures; 