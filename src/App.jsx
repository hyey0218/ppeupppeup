import React, { useEffect, useState, useRef } from 'react';

const weddingDate = new Date('2025-05-24T12:30:00+09:00');

function useCountdown(targetDate) {
  const calc = () => {
    const diff = targetDate.getTime() - new Date().getTime();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calc);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

const portfolio = [
  {
    title: '2026/12/05',
    text: '바다를 품은 절벽 위에서 담은 사랑스러운 포트레이트',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  }
];

const testimonials = [
  {
    quote: '동현이의 할말',
    name: '동현',
  },
  {
    quote: '혜윤이의 할말',
    name: '혜윤',
  },
];

const stats = [
  { label: 'Days', key: 'days' },
  { label: 'Hours', key: 'hours' },
  { label: 'Minutes', key: 'minutes' },
  { label: 'Seconds', key: 'seconds' },
];

const featuredPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    title: 'Seaside Golden Hour',
  },
  {
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    title: 'Park Stroll',
  },
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    title: 'Garden Kiss',
  },
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    title: 'Garden Kiss',
  },
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    title: 'Garden Kiss',
  },
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    title: 'Garden Kiss',
  }
];

function scrollAndFocusElement(el) {
  if (!el) return;
  const nav = document.querySelector('.nav');
  const navHeight = nav ? nav.getBoundingClientRect().height : 0;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
  window.scrollTo({ top, behavior: 'smooth' });
  setTimeout(() => el.focus(), 600);
}

export default function App() {
  const countdown = useCountdown(weddingDate);
  const [modalPhoto, setModalPhoto] = useState(null);
  const locationEyebrowRef = useRef(null);
  const portfolioEyebrowRef = useRef(null);

  return (
    <div className="page">
      <nav className="nav">
        <div className="nav__brand"></div>
        <ul className="nav__links">
          {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>

      <header className="hero">
        <div className="hero__overlay">
          <div className="hero__cta hero__cta--overlay">
            <button
              className="btn btn--primary"
              type="button"
              onClick={() => scrollAndFocusElement(portfolioEyebrowRef.current)}
            >
              사진첩
            </button>
            <button
              className="btn btn--ghost"
              type="button"
              onClick={() => scrollAndFocusElement(locationEyebrowRef.current)}
            >
              약도
            </button>
          </div>
        </div>
        <div className="hero__content">
          <p className="hero__tagline">Your Dream Wedding Captured</p>
          {/* <h1>Main Wedding Photography</h1> */}
          <p className="hero__subtitle">
            {/* [메인 사진] */}
          </p>
          
        </div>
      </header>

      <main className="content">
        <section className="section intro">
          <p className="section-eyebrow">CELEBRATE WITH US</p>
          <h2>2026/12/05</h2>
          <p className="muted center">
            PM 3:00 Saturday, December 5th, 2026 <br></br>The Convention, Yeongdengpo
          </p>
        </section>

        <section className="section creative">
          <div className="creative__image">
            <img
              src="https://kgwed.com/wp-content/uploads/2024/05/KakaoTalk_20240504_161326049_03.webp"
              alt="커플 촬영"
            />
          </div>
          <div className="creative__text">
            <p className="section-eyebrow">Creative, Personal, Artistic</p>
            <h2>Let&rsquo;s capture the essence of your love story.</h2>
            <p className="muted">
              분위기 있는 로케이션과 내추럴 포즈로 두 분만의 감성을 담아냅니다. 커뮤니케이션을 통해 원하는
              무드와 스타일을 반영하고, 정성스러운 후보정으로 완성합니다.
            </p>
          </div>
        </section>

        <section className="section portfolio">
          <p className="section-eyebrow" ref={portfolioEyebrowRef} tabIndex={-1}>Portfolio</p>
          <h2>Featured Story</h2>
          <div className="portfolio__grid">
            <div className="portfolio__lead">
              <p className="lead-number">01</p>
              <h3>Romantic Cliffside</h3>
              <p className="muted">
                눈부신 햇살과 바람이 어우러진 해변 절벽에서 찍은 웨딩 스토리. 자연스러운 스킨 톤과 부드러운
                색감을 살려 감동을 담아냈습니다.
              </p>
              <button className="btn btn--ghost">View Gallery</button>
            </div>
            {portfolio.map((item) => (
              <div className="portfolio__card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio__caption">
                  <h4>{item.title}</h4>
                  <p className="muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="photo-strip" role="list">
            {featuredPhotos.map((photo) => (
              <button
                type="button"
                className="photo-chip"
                key={photo.title}
                onClick={() => setModalPhoto(photo)}
                role="listitem"
                aria-label={`${photo.title} 크게 보기`}
              >
                <img src={photo.url} alt={photo.title} />
                <span>{photo.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <h2>A Message from the Newlyweds</h2>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p className="quote-mark">“</p>
                <p className="muted">{item.quote}</p>
                <p className="client">{item.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section stats">
          <p className="section-eyebrow center">Our wedding day is coming soon</p>
          <h2 className="center">남은 시간</h2>
          <div className="stats__grid">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <p className="stat__value">{String(countdown[item.key]).padStart(2, '0')}</p>
                <p className="muted">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section location">
          <div className="location__details">
            <p className="section-eyebrow" ref={locationEyebrowRef} tabIndex={-1}>Location</p>
            <h2>오시는 길</h2>
            <h3 className="muted">서울 영등포구 국회대로38길 2, 2층 다이너스티홀</h3>
            <p className="muted">지하철 이용 시 2, 5호선 영등포구청역 4번출구 도보 3분 (영등포경찰서 방면)</p>
            <p className="muted">버스 이용 시 70-3, 5620, 6631, 6637, 7612, 영등포 02, 영등포 12</p>
            <p className="muted">자가용 이용 시 웨딩홀 지하 주차장 1, 2F / 웨딩홀 맞은편 공영주차장 이용 가능</p>
          </div>
          <div className="map-card">
            <iframe
              title="식장 위치"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.202833182218!2d126.89647357710388!3d37.526715672049086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f2fcdf2ac59%3A0xe40f63934c7a3561!2z642U7Luo67Kk7IWYIOyYgeuTse2PrOygkA!5e0!3m2!1sko!2skr!4v1766453546691!5m2!1sko!2skr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="section contact">
          <div className="contact__form">
            <p className="section-eyebrow">Contact</p>
            <h2>Get in Touch</h2>
            <form>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="email@example.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="Tell me about your day" />
              </label>
              <button type="button" className="btn btn--primary">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      {modalPhoto && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={modalPhoto.title}>
          <div className="modal__backdrop" onClick={() => setModalPhoto(null)} />
          <div className="modal__content">
            <button className="modal__close" type="button" aria-label="Close" onClick={() => setModalPhoto(null)}>
              ×
            </button>
            <img src={modalPhoto.url} alt={modalPhoto.title} />
            <p>{modalPhoto.title}</p>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer__brand">2026/12/05</div>
        <ul className="footer__links">
          {['Home', 'About', 'Portfolio', 'Blog', 'Contact'].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="muted">Timeless moments in artistic frames. Every detail, beautifully captured.</p>
      </footer>
    </div>
  );
}
