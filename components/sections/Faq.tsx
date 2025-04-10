'use client'; // Mark as a Client Component

import { useState } from 'react';

// Define the FAQ data
const faqData = [
  {
    question: '日本語能力(JLPT N3)が不安です...',
    answer: 'はい、ご安心ください。タクシー会社によっては日本語研修も実施しています。また、通訳サポートもありますので、徐々に上達していけば問題ありません。',
  },
  {
    question: '運転経験が少なくても働けますか？',
    answer: 'はい、可能です。特定技能「自動車運転業務」の試験に合格していれば、入社後に丁寧な研修を受けることができます。経験の少なさを心配する必要はありません。',
  },
  {
    question: '日本で住む家がありません...',
    answer: 'ご安心ください。ほとんどの求人では個人部屋や社宅を用意しています。家具付きで入居できる場合も多いので、来日してすぐに生活を始められます。初期費用も抑えられます。',
  },
  {
    question: 'どのような地域で働けますか？',
    answer: '東京、神奈川、大阪、愛知などの大都市圏から、地方都市まで様々な地域の求人を取り扱っています。あなたの希望に合った地域をお選びいただけます。',
  },
  {
    question: '家族を日本に呼び寄せたい',
    answer: '特定技能1号では原則として家族の帯同はできませんが、特定技能2号への移行後は家族の帯同が可能になります。特定技能2号への移行についてもサポートいたしますので、詳しくは個別にご相談ください。',
  },
];

const Faq = () => {
  // State to keep track of the currently open FAQ item index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the open/closed state of an item
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50"> {/* Added id and bg color */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"> {/* Centered content */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          よくある質問
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Question Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-4 md:p-5 text-left bg-white hover:bg-gray-50 focus:outline-none"
              >
                <span className="text-base md:text-lg font-medium text-gray-800">{item.question}</span>
                {/* Simple Plus/Minus Icon */}
                <span className="text-xl text-gray-500 transition-transform duration-200 transform">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {/* Answer Panel (conditionally rendered) */}
              {openIndex === index && (
                <div className="p-4 md:p-5 border-t border-gray-200 bg-white">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; 