import Image from 'next/image'; // Assuming steps might have icons/images later

const steps = [
  {
    number: 1,
    title: 'LINEで簡単登録(1分)',
    description: '右ボタンをクリックするだけ。お名前と合格証明(※)をお送りください。',
    imageUrl: '/step-01-line-register.jpg', // Updated image path
  },
  {
    number: 2,
    title: 'Zoom or LINEで面談(通訳あり)',
    description: 'あなたの希望条件や、不安な点をヒアリング。母国語での対応も可能です。',
    imageUrl: '/step-02-online-interview.jpg', // Updated image path
  },
  {
    number: 3,
    title: '条件に合った求人をご紹介',
    description: '希望の地域・給与・住居条件に合わせた求人をご案内します。',
    imageUrl: '/step-03-job-matching.jpg', // Updated image path
  },
  {
    number: 4,
    title: '企業面接・会社見学',
    description: 'オンライン、または現地での面接を実施。通訳者も同席します。',
    imageUrl: '/step-04-company-visit.jpg', // Updated image path
  },
  {
    number: 5,
    title: 'ビザ確認・配属サポート',
    description: 'ビザ申請から住居の準備まで、入社に必要な手続きを専門担当者がサポート。',
    imageUrl: '/step-05-visa-support.jpg', // Updated image path
  },
  {
    number: 6,
    title: '入社・生活スタート',
    description: '日本での生活がスタート。困ったことがあれば随時相談可能です。',
    imageUrl: '/step-06-life-start.jpg', // Updated image path
  },
];

const Steps = () => {
  return (
    <section id="flow" className="py-16 md:py-24 bg-white"> {/* Added id for navigation */}
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          あなたのドライバー人生が始まるまで
        </h2>
        {/* Adjusted max-width and spacing for image-only display */}
        <div className="flex flex-col space-y-4 mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="w-full overflow-hidden"> {/* Removed shadow and rounded corners */}
              {/* Step Image */}
              {/* Removed fixed size div, using layout responsive */}
                 <Image
                   src={step.imageUrl}
                   alt={`ステップ ${step.number}: ${step.title}`} // Alt text including title for accessibility
                   layout="responsive"
                   width={700} // Example width for aspect ratio, adjust based on actual image ratio
                   height={200} // Example height for aspect ratio, adjust based on actual image ratio
                 />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps; 