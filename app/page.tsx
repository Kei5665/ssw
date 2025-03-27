'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// FAQデータを配列として定義
const faqData = [
  {
    question: '日本語がN3レベルでも大丈夫ですか？',
    answer: 'はい、大丈夫です。タクシー会社によっては日本語研修も実施しています。また、通訳サポートもありますので、徐々に上達していけば問題ありません。'
  },
  {
    question: '運転経験が少なくても働けますか？',
    answer: 'はい、可能です。特定技能「自動車運転業務」の試験に合格していれば、入社後に丁寧な研修を受けることができます。経験の少なさを心配する必要はありません。'
  },
  {
    question: '住まいがないのですが…',
    answer: 'ほとんどの求人では個人部屋や社宅を用意しています。家具付きで入居できるので、来日してすぐに生活を始められます。初期費用も抑えられるのでご安心ください。'
  },
  {
    question: 'どのような地域で働けますか？',
    answer: '東京、大阪、名古屋などの大都市から、地方都市まで様々な地域の求人を取り扱っています。あなたの希望に合った地域をお選びいただけます。'
  },
  {
    question: '家族を呼び寄せることはできますか？',
    answer: '特定技能1号では原則として家族の帯同はできませんが、特定技能2号への移行後は家族の帯同が可能になります。詳しくは個別にご相談ください。'
  }
];

// ステップデータの定義
const stepData = [
  {
    number: 1,
    title: 'LINEで簡単登録（1分）',
    description: 'QRコードを読み取るだけ。お名前と合格証明の写真をお送りください。'
  },
  {
    number: 2,
    title: 'Zoom or LINEで面談（通訳あり）',
    description: 'あなたの希望条件や不安点をヒアリング。母国語での対応も可能です。'
  },
  {
    number: 3,
    title: '条件に合った求人紹介',
    description: '希望の地域・給与・住居条件に合わせた求人をご紹介します。'
  },
  {
    number: 4,
    title: '面接・会社見学',
    description: 'オンラインまたは現地での面接をアレンジ。通訳者も同席します。'
  },
  {
    number: 5,
    title: 'ビザ確認と配属サポート',
    description: 'ビザ申請から住居の準備まで、入社に必要な手続きをサポート。'
  },
  {
    number: 6,
    title: '入社＆生活スタート',
    description: '日本での生活がスタート。困ったことがあれば随時相談可能です。'
  }
];

// 特徴データの定義
const featureData = [
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 22H4a2 2 0 0 1-2-2v-4h6v6zm12-2a2 2 0 0 1-2 2h-4v-6h6v4zM2 12h20v2H2v-2zm0-2V6a2 2 0 0 1 2-2h4v6H2zm16-6h4a2 2 0 0 1 2 2v4h-6V4z"/>
      </svg>
    ),
    title: '部屋完備',
    description: '来日時の住居の心配はありません。家具付きの部屋を用意。初期費用も抑えられます。'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    title: '通訳・生活サポート',
    description: '入社後も専属の通訳者が生活面をサポート。病院や役所での手続きも安心です。'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
      </svg>
    ),
    title: '未経験OK・研修あり',
    description: '自動車運転の経験が少なくても大丈夫。丁寧な研修制度で安心してスタートできます。'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14z"/>
        <path d="M12 11c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12v-1.42zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48z"/>
      </svg>
    ),
    title: '永住支援あり',
    description: '長期的なキャリアプランをサポート。永住権取得のための情報提供や手続きをお手伝い。'
  }
];

// 体験談データの定義
const testimonialData = [
  {
    quote: '最初は地理に不安がありましたが、研修が充実していたので安心して仕事を始められました。住居も会社が用意してくれたので、来日してすぐに生活を始められました。',
    name: 'グエン・バン・フー',
    country: 'ベトナム出身 / 東京で勤務中',
    image: '/api/placeholder/60/60',
    alt: 'ベトナム人ドライバー'
  },
  {
    quote: '来日後、最初は不安でしたが、生活サポートがとても手厚く安心できました。今では仕事にも慣れて、毎日やりがいを感じています。',
    name: 'ラジャン・シュレスタ',
    country: 'ネパール出身 / 大阪で勤務中',
    image: '/api/placeholder/60/60',
    alt: 'ネパール人ドライバー'
  },
  {
    quote: '特定技能に合格後、どうすればいいか分からなかったとき、このサービスを見つけました。今では高い給料があり、家族を呼び寄せる計画も進んでいます。',
    name: 'マーク・サントス',
    country: 'フィリピン出身 / 名古屋で勤務中',
    image: '/api/placeholder/60/60',
    alt: 'フィリピン人ドライバー'
  }
];

export default function Home() {
  // FAQの開閉状態を管理するステート
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // FAQの開閉を切り替える関数
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <title>特定技能「自動車運転業務」合格者向け | タクシードライバー求人</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-content">
            <h1>
              特定技能に合格したあなたへ。<br />
              タクシー運転手として働きませんか？
            </h1>
            <p className="hero-subtitle">
            家あり or 部屋あり・高い給料・生活サポートあり。無料でお仕事を探します
            </p>
            <div className="text-center">
              <a href="#contact" className="btn btn-primary btn-large">
                LINEで無料相談
              </a>
              <a href="#jobs" className="btn btn-secondary btn-large">
                求人を見る
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/api/placeholder/500/400"
              alt="外国人タクシードライバー"
              width={500}
              height={400}
              priority
            />
          </div>
        </section>

        {/* AFTER PASSING SECTION */}
        <section className="after-passing">
          <div className="container">
            <h2>特定技能「自動車運転業務」に合格したあとは？</h2>
            <div className="row">
              <div className="col">
                <p>特定技能試験に合格、おめでとうございます！次はタクシードライバーとして日本での新しい生活をスタートさせましょう。</p>
                <p>合格後は、適切な企業とマッチングし、就労ビザを取得して実際に働き始めるというステップがあります。しかし、「どこで働けるの？」「住まいはどうする？」「日本語に自信がない…」など不安を感じている方も多いのではないでしょうか。</p>
                <p>当社は<strong>特定技能「自動車運転業務」合格者専門</strong>の求人サービスです。あなたの日本での新生活をトータルでサポートします。</p>
              </div>
            </div>
          </div>
        </section>

        {/* STEPS SECTION */}
        <section className="steps">
          <div className="container">
            <h2>あなたの就職までの6ステップ</h2>
            <div className="step-container">
              {stepData.map((step, index) => (
                <div className="step" key={index}>
                  <div className="step-number">{step.number}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials">
          <div className="container">
            <h2>先輩ドライバーの声</h2>
            <div className="testimonial-container">
              {testimonialData.map((testimonial, index) => (
                <div className="testimonial" key={index}>
                  <p>「{testimonial.quote}」</p>
                  <div className="testimonial-meta">
                    <div className="testimonial-avatar">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.alt} 
                        width={60} 
                        height={60} 
                      />
                    </div>
                    <div>
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-country">{testimonial.country}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="container">
            <h2>外国人ドライバーが安心して働ける理由</h2>
            <div className="feature-container">
              {featureData.map((feature, index) => (
                <div className="feature" key={index}>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="container">
            <h2>よくある質問</h2>
            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <div 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                  </div>
                  <div 
                    className="faq-answer" 
                    style={{ display: openFaqIndex === index ? 'block' : 'none' }}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER & CTA */}
        <section className="footer" id="contact">
          <div className="container text-center">
            <h2>まずは無料で相談してみませんか？</h2>
            <p>登録は1分で完了。あなたに合った求人をご紹介します。</p>
            <div>
              <a href="#" className="btn btn-primary btn-large">LINEで無料相談</a>
              <a href="#" className="btn btn-secondary btn-large">合格証明がある方はこちら</a>
            </div>
            <p style={{ marginTop: '40px' }}>© {new Date().getFullYear()} 特定技能タクシードライバー求人サービス</p>
          </div>
        </section>

        {/* FIXED MOBILE CTA */}
        <div className="fixed-cta">
          <a
            href="#"
            className="btn btn-primary"
            style={{ width: '90%', maxWidth: '400px' }}>
            LINEで無料相談
          </a>
        </div>
      </main>

      <style jsx global>{`
        :root {
          --primary: #2c3e50;
          --secondary: #f39c12;
          --accent: #e74c3c;
          --light: #ecf0f1;
          --dark: #2c3e50;
          --success: #27ae60;
          --text: #333;
          --light-text: #7f8c8d;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Noto Sans JP', sans-serif;
        }
        body {
          color: var(--text);
          line-height: 1.6;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        section {
          padding: 60px 0;
        }
        h1, h2, h3 {
          font-weight: 700;
          line-height: 1.2;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
          position: relative;
        }
        h2:after {
          content: "";
          display: block;
          width: 50px;
          height: 3px;
          background: var(--secondary);
          margin: 15px auto 0;
        }
        p {
          margin-bottom: 1rem;
        }
        img {
          max-width: 100%;
        }
        .btn {
          display: inline-block;
          padding: 15px 30px;
          background: var(--secondary);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          text-align: center;
          margin: 10px 5px;
        }
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 8px rgba(0,0,0,0.15);
        }
        .btn-primary {
          background: var(--accent);
        }
        .btn-secondary {
          background: var(--primary);
        }
        .btn-large {
          padding: 18px 36px;
          font-size: 1.1rem;
        }
        .text-center {
          text-align: center;
        }
        .hero {
          background: linear-gradient(135deg, #3498db, #2c3e50);
          color: white;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .hero-image {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 50%;
          max-width: 500px;
          opacity: 0.8;
          z-index: 1;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        .steps {
          background-color: white;
        }
        .step-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 40px;
        }
        .step {
          flex: 0 0 100%;
          margin-bottom: 30px;
          padding: 30px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          position: relative;
          transition: all 0.3s ease;
        }
        .step:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .step-number {
          position: absolute;
          top: -15px;
          left: 30px;
          width: 40px;
          height: 40px;
          background: var(--secondary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .step-title {
          margin-top: 10px;
          margin-bottom: 15px;
          font-weight: bold;
          font-size: 1.2rem;
        }
        .testimonials {
          background-color: var(--light);
        }
        .testimonial-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 40px;
        }
        .testimonial {
          flex: 0 0 100%;
          margin-bottom: 30px;
          padding: 30px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          position: relative;
        }
        .testimonial-meta {
          display: flex;
          align-items: center;
          margin-top: 20px;
        }
        .testimonial-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 15px;
        }
        .testimonial-name {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .testimonial-country {
          color: var(--light-text);
          font-size: 0.9rem;
        }
        .features {
          background-color: white;
        }
        .feature-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 40px;
        }
        .feature {
          flex: 0 0 100%;
          margin-bottom: 30px;
          padding: 20px;
          background: var(--light);
          border-radius: 10px;
          display: flex;
          align-items: flex-start;
        }
        .feature-icon {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          background: var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .feature-icon svg {
          width: 25px;
          height: 25px;
          fill: white;
        }
        .faq {
          background-color: var(--light);
        }
        .faq-item {
          margin-bottom: 20px;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .faq-question {
          padding: 20px;
          cursor: pointer;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-answer {
          padding: 0 20px 20px;
        }
        .footer {
          background: var(--dark);
          color: white;
          padding: 40px 0;
        }
        .fixed-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: white;
          padding: 10px 0;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
          z-index: 100;
          display: flex;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .step {
            flex: 0 0 48%;
          }
          .testimonial {
            flex: 0 0 48%;
          }
          .feature {
            flex: 0 0 48%;
          }
        }
        @media (min-width: 992px) {
          .step {
            flex: 0 0 30%;
          }
          .testimonial {
            flex: 0 0 30%;
          }
        }
      `}</style>
    </>
  );
}