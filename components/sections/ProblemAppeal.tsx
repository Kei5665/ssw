import Image from 'next/image';

const problems = [
  {
    title: '仕事が見つからない',
    description: '特定技能の資格は取得できたのに、肝心の仕事探しで戸惑う方も多くいらっしゃいます。',
    imageUrl: '/problem-job.jpg',
    alt: '仕事が見つからず悩んでいる人'
  },
  {
    title: '面接対策がわからない',
    description: '面接の練習や対策ができなかったために、不合格になってしまう方も多くいらっしゃいます。',
    imageUrl: '/problem-interview.jpg',
    alt: '面接対策に困っている様子'
  },
  {
    title: '日本での生活準備どうしたらいい？',
    description: '家探し、銀行口座、携帯の準備など、日本での生活ルールがわからず困る方が多くいらっしゃいます。',
    imageUrl: '/problem-life.jpg',
    alt: '日本の生活準備に悩む様子'
  },
];

const ProblemAppeal = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          こんなお悩み、<br className="sm:hidden" />ありませんか？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={problem.imageUrl}
                  alt={problem.alt}
                  layout="fill"
                  objectFit="cover" // Adjust objectFit as needed (cover, contain, etc.)
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemAppeal; 