import Image from 'next/image';

const testimonials = [
  {
    quote: '最初は地理に不安がありましたが、研修が充実していたので安心して仕事を始められました。住居も会社が用意してくれたので、ニッポンに来てすぐ生活をスタートできました。',
    name: 'グエン・バン・Aさん', // Adjusted name for privacy/example
    origin: 'ベトナム出身 / 東京で勤務中',
    imageUrl: '/profile-candidate-1.jpg', // Updated image path
    alt: 'ベトナム出身のドライバーAさん'
  },
  {
    quote: '来日後、最初は不安でしたが、生活サポートがとても手厚く安心できました。今では仕事にも慣れて、毎日やりがいを感じています。',
    name: 'ラジャン・Bさん', // Adjusted name for privacy/example
    origin: 'ネパール出身 / 大阪で勤務中',
    imageUrl: '/profile-candidate-2.jpg', // Updated image path
    alt: 'ネパール出身のドライバーBさん'
  },
  {
    quote: '特定技能に合格したものゝ、どうすればいいかわからなかったとき、このサービスを見つけました。今は毎日仕事で稼ぎながら、家族をニッポンに呼ぶ計画を進めています。',
    name: 'マーク・Cさん', // Adjusted name for privacy/example
    origin: 'フィリピン出身 / 愛知で勤務中',
    imageUrl: '/profile-candidate-3.jpg', // Updated image path
    alt: 'フィリピン出身のドライバーCさん'
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          先輩ドライバーの声
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              {/* Image */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Quote */}
              <p className="text-gray-600 italic mb-4 text-sm">
                「{testimonial.quote}」
              </p>
              {/* Name */}
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              {/* Origin */}
              <p className="text-xs text-gray-500">{testimonial.origin}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 