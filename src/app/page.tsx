export default function Home() {
  const basePath = process.env.NODE_ENV === 'production' ? '/kaizendemo' : '';

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
              <span className="text-2xl font-bold tracking-tighter">改善デモ</span>
              <span className="block text-xs -mt-1 opacity-75">Kaizen Demo</span>
            </div>
          </div>
          <a
            href="https://github.com/strlst"
            target="_blank"
            className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-sm font-medium transition-all hover:scale-105"
          >
            GitHubでstrlstを見る
          </a>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <div className="mb-8 flex justify-center">
              <span className="text-7xl">🌸</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4">
              こんにちは、世界！
            </h1>
            <p className="text-5xl md:text-6xl font-light text-white/90 mb-8">
              Hello, World!
            </p>

            <div className="space-y-3 mb-12">
              <p className="text-3xl font-medium text-white">改善デモ</p>
              <p className="text-3xl font-medium text-white">Kaizen Demo</p>
              <p className="text-xl text-white/80 max-w-md mx-auto">
                静的サイトの自動デプロイ
              </p>
              <p className="text-xl text-white/80 max-w-md mx-auto">
                Automatic static site self-deployment
              </p>
            </div>

            {/* Personal touch - your photo credit */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-3 mb-10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <p className="text-sm text-white/90">
              </p>
              <p className="text-sm text-white/90">
                日本 長野県 諏訪市 諏訪大社 下社 春宮 • 2025.08.03 • 自分で撮りました
                Japan, Nagano Prefecture, Suwa City, Suwa Taisha (Lower Shrine), Harumiya • 2025.08.03 • Personal Photo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/strlst/kaizendemo"
                target="_blank"
                className="px-10 py-5 bg-white text-black rounded-3xl font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                See the CI/CD Pipeline
              </a>
              {/*
              <a
                href="#about"
                className="px-10 py-5 border-2 border-white/70 hover:border-white text-white rounded-3xl font-semibold text-lg transition-all hover:bg-white/10"
              >
                Learn Kaizen Principles
              </a>
              */}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-10 text-center text-white/70 text-sm">
          <p>
            静的なNext.jsサイト • GitHub Pagesでデプロイ • ❤でウィーンで日本リクルータへ創作しました
          </p>
          <p>
            Static Next.js site • Deployed to GitHub Pages • Made with ❤ in Vienna for Japanese recruiters
          </p>
          <p className="mt-2 text-xs opacity-60">
            改善は永遠に続く
          </p>
        </footer>
      </div>
    </main>
  );
}