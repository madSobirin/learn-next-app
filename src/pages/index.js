import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinTech - Modern Finance</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased min-h-screen flex flex-col">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-background-dark/90 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">
                  account_balance_wallet
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                FinTech
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
                href="#"
              >
                Features
              </a>
              <a
                className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
                href="#"
              >
                About
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center justify-center h-10 px-5 text-sm font-bold text-slate-700 dark:text-slate-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors">
                Log In
              </button>
              <button className="flex items-center justify-center h-10 px-5 text-sm font-bold text-white bg-primary hover:bg-red-600 rounded-lg shadow-sm hover:shadow-md transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative px-6 py-12 lg:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex flex-col flex-1 gap-6 text-center lg:text-left z-10">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                    Banking Built for the{" "}
                    <span className="text-primary">Future</span>
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Experience zero fees, instant transfers, and smart
                    investment tools all in one app. Take control of your
                    financial destiny today.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
                    <button className="h-12 px-8 text-base font-bold text-white bg-primary hover:bg-red-600 rounded-lg shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
                      Get Started
                    </button>
                    <button className="h-12 px-8 text-base font-bold text-slate-700 dark:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-green-500 text-lg">
                      check_circle
                    </span>
                    <span>No credit card required</span>
                    <span className="mx-2">•</span>
                    <span className="material-symbols-outlined text-green-500 text-lg">
                      check_circle
                    </span>
                    <span>Cancel anytime</span>
                  </div>
                </div>
                <div className="flex-1 w-full relative">
                  {/* Decor elements */}
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div
                    className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    data-alt="Futuristic digital finance dashboard with graphs and coins"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDtWr0hmcO0Rtm2-wTQeijcYjyxty4fAeLdpazRZ4RhRIjGJzmx_m4KM7xv4g5Hc2swcHhcFabZntYVxm6OIY7YFUDYTLlyBBja_uWzMBxAO9h54HippBgNXteZxYxeGfI6-Fs7tgO0w6GwVB8T7gQIjbq3g6673EXHxFUDPc3SFLVKgabVOcxi2q3r9QlkM34jGssmS7bCbdeeAKpawDsvzJeu2Xa8MuV2dgS_F4FCtY4aNOWCRZpnCAsMXp1OnAl8Q3lZQj67hk')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Overlay for better text contrast if needed, mostly for aesthetics here */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark">
            <div className="mx-auto max-w-7xl px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:divide-x md:divide-gray-200 dark:md:divide-gray-800">
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    $10M+
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    Total Processed
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    50k+
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    Active Users
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-center gap-1 text-yellow-400">
                    <span className="material-symbols-outlined text-3xl fill-current">
                      star
                    </span>
                    <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight text-black dark:text-white">
                      4.9
                    </span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    App Store Rating
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-6 bg-background-light dark:bg-background-dark">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
                  Why Choose Us
                </h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                  Financial Freedom at Your Fingertips
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  We provide the tools you need to manage your money effectively
                  and securely, giving you peace of mind and control.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="group bg-white dark:bg-[#2a1a1a] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      public
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Global Access
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Spend anywhere in the world with our borderless card
                    technology. Real exchange rates, no hidden markups.
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="group bg-white dark:bg-[#2a1a1a] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      verified_user
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Bank-Grade Security
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Your money is protected by state-of-the-art encryption
                    standards and 24/7 fraud monitoring systems.
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="group bg-white dark:bg-[#2a1a1a] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      donut_large
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Smart Analytics
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Visualize your spending habits in real-time with our
                    intuitive dashboard. Understand exactly where your money
                    goes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-6 bg-white dark:bg-[#1a0f0f]">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                    Loved by thousands of users
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    Don&apos;t just take our word for it. See what our community
                    has to say about their financial journey.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-md">
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 mb-6 italic">
                    &quot;The best financial decision I made this year. The
                    analytics feature helped me save 20% more each month without
                    even trying.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                      data-alt="Portrait of Sarah Jenkins"
                    >
                      <img
                        alt="Sarah Jenkins"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL2zAmZkiBr1BsbdlvV-C57XIwnZP_oYaignwSTpddmWdsijzQCs3qwjXaugGV7m6qsZMFM9FtYvagWzEXTVvKZLXHz0ARJcRecaZ98LKIP2iIsyFDbGaSfv79s0ilzfawyglaMKO7-4Kryxay0sB0bO_30Zx_m8qJoHT75Vm-SxO7KwGyCRQNWPBWZ61ORnATuFBy80xun2dsPVOehnmRN0s3iHFK7S71o3tOGpLlxLbj2V1Wf1OBoM3Vyq-lfhqZz3MLSdK1Ius"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        Sarah Jenkins
                      </p>
                      <p className="text-xs text-slate-500">
                        Freelance Designer
                      </p>
                    </div>
                  </div>
                </div>
                {/* Testimonial 2 */}
                <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 mb-6 italic">
                    &quot;Instant transfers are actually instant. No more
                    waiting days for my money to clear. The security features
                    give me peace of mind.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                      data-alt="Portrait of Michael Chen"
                    >
                      <img
                        alt="Michael Chen"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoPeWb7TdhBRBYw4bo4uiTeJnSZplCDI1I3mjGA-Gb1g8yaFywU5pNHISjSMesD-TqoQ1y0u7XV5g8Lbzffc71QgH9sZe9SCEDZRgYYgtu0DFXYyM-Ap8GliXaXZj1gY09xuZI0252otlTO5VEZHLhGnVAlTeMRH6Hp4j8TqTcrgoFm42waDOCo5t3ugiZ30Wyifirw3HSESCVcfwWnH7I0o9p87WQWkFMlLjmHOO-IJEdNq75u2S3jZyx44lh5wOtEe6aiuK3NNA"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        Michael Chen
                      </p>
                      <p className="text-xs text-slate-500">
                        Small Business Owner
                      </p>
                    </div>
                  </div>
                </div>
                {/* Testimonial 3 */}
                <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star_half
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 mb-6 italic">
                    &quot;I love the clean interface. It makes managing finances
                    feel less like a chore and more like a game I&apos;m
                    winning.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                      data-alt="Portrait of Emily Ross"
                    >
                      <img
                        alt="Emily Ross"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_s93-sUxCjf5cgUlZ-aOIZhG3fP0FEZrcrkKJBGvWr1Sd18d23rBBMlOusCm3GZyBfGNtQNJyPYri4JuZ71n3a7JZ63lTAc73nM7ZCZ4gOEMHMz-DAyODMM7Qc6sjGRLEEGV5w9tRvX0iKdzhOVVaMK23hHA9wsJ06SzXDnpJbeaBo9i_2gwF8ZpF4tFDjkJSR6_TztI8PPM21DiBRquq88qneIogvjuoXPYG2JkEOp250fhiEfadUIZL3MTcS6Fw9TqjAWXEzmo"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        Emily Ross
                      </p>
                      <p className="text-xs text-slate-500">Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 px-6 bg-background-light dark:bg-background-dark">
            <div className="mx-auto max-w-5xl bg-slate-900 dark:bg-white rounded-3xl overflow-hidden relative shadow-2xl">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#4b5563 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-16">
                <h2 className="text-3xl md:text-5xl font-black text-white dark:text-slate-900 mb-6">
                  Ready to take control?
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-600 mb-10 max-w-2xl">
                  Join over 50,000 users who are building a better financial
                  future today. Sign up in less than 2 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="h-14 px-8 text-lg font-bold text-white bg-primary hover:bg-red-600 rounded-lg shadow-lg hover:shadow-red-500/50 transition-all w-full sm:w-auto">
                    Create Free Account
                  </button>
                  <button className="h-14 px-8 text-lg font-bold text-white dark:text-slate-900 border border-slate-600 dark:border-slate-300 hover:bg-white/10 dark:hover:bg-slate-100 rounded-lg transition-colors w-full sm:w-auto">
                    Download App
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 lg:col-span-2 pr-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      account_balance_wallet
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    FinTech
                  </h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed max-w-xs">
                  Making financial freedom accessible to everyone through
                  technology, transparency, and trust.
                </p>
                <div className="flex gap-4">
                  <a
                    className="text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    className="text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                  Product
                </h4>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Security
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Cards
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                  Company
                </h4>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                  Support
                </h4>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Status
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Legal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400 text-center md:text-left">
                © 2023 FinTech Inc. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-slate-400">
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
                <a className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
