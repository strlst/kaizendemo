'use client';

import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ja'>('ja');
  const basePath = process.env.NODE_ENV === 'production' ? '/kaizendemo' : '';
  const t = {
    ja: {
      title: "こんにちは、世界！",
      subtitle: "改善デモ",
      description: "静的サイトの自動デプロイ",
      photoCredit: [
        "日本 長野県 諏訪市 諏訪大社 下社 春宮",
        "2025年08月03日 • 自分で撮りました",
      ],
      pipelineButton: "CI/CDパイプラインを見る",
      githubLink: "GitHubでstrlstを見る",
      footer1: "静的なNext.jsサイト • GitHub Pagesでデプロイ • ❤でウィーンで日本リクルータへ創作しました",
      footer2: "改善は永遠に続く",
    },
    en: {
      title: "Hello, World!",
      subtitle: "Kaizen Demo",
      description: "Automatic static site deployment",
      photoCredit: [
        "Japan, Nagano Prefecture, Suwa City, Suwa Taisha (Lower Shrine), Harumiya",
        "August 3, 2025, Photo by me",
      ],
      pipelineButton: "View CI/CD Pipeline",
      githubLink: "View strlst on GitHub",
      footer1: "Static Next.js site • Deployed to GitHub Pages • Made with ❤ in Vienna for Japanese recruiters",
      footer2: "Continuous improvement never ends",
    }
  };
  const current = t[lang];
  const toggleLanguage = () => {
    setLang(lang === 'ja' ? 'en' : 'ja');
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col relative"
      style={{ backgroundImage: `url('${basePath}/images/suwa-torii.jpg')` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      <div className="relative flex-1 flex flex-col z-10">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-6 text-white">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⛩️</span>
            <div>
              <span className="text-2xl font-bold tracking-tighter">
                {current.subtitle}
              </span>
              <span className="block text-xs -mt-1 opacity-75">
                {lang === 'ja' ? 'Kaizen Demo' : '改善デモ'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex border border-white/30 rounded-2xl overflow-hidden backdrop-blur-md bg-black/30 hover:border-white/50 transition-all"
            >
              <span
                className={`px-4 py-1.5 text-sm font-medium transition-all ${lang === 'ja' ? 'bg-white text-black' : 'text-white/70'
                  }`}
              >
                日本語
              </span>
              <span
                className={`px-4 py-1.5 text-sm font-medium transition-all ${lang === 'en' ? 'bg-white text-black' : 'text-white/70'
                  }`}
              >
                EN
              </span>
            </button>

            <a
              href="https://github.com/strlst"
              target="_blank"
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-sm font-medium transition-all hover:scale-105"
            >
              {current.githubLink}
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <div className="mb-8 flex justify-center">
              <span className="text-7xl">🌸</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-4">
              {current.title}
            </h1>

            <div className="space-y-3 mb-12">
              <p className="text-3xl font-medium text-white">{current.subtitle}</p>
              <p className="text-xl text-white/80 max-w-md mx-auto">
                {current.description}
              </p>
            </div>

            {/* Personal touch */}
            <div className="inline-flex flex-col items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-8 py-4 mb-10 text-center">
              {current.photoCredit.map((line, index) => (
                <p key={index} className="text-sm text-white/90 leading-tight">
                  {line}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/strlst/kaizendemo"
                target="_blank"
                className="px-10 py-5 bg-white text-black rounded-3xl font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                {current.pipelineButton}
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-10 text-center text-white/70 text-sm">
          <p>{current.footer1}</p>
          <p className="mt-2 text-xs opacity-60">
            {current.footer2}
          </p>
        </footer>
      </div>
    </main>
  );
}