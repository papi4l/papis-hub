import Head from "next/head";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaSnapchatGhost,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Terry's Hub — Terry Oppong</title>
        <meta
          name="description"
          content="Terry Oppong — Social Media Manager, Content Creator, Copywriter, Graphic Designer, and Data Entry Specialist based in Accra, Ghana."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen antialiased">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <header className="sticky top-0 z-40" aria-hidden>
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ backdropFilter: "blur(8px)", background: "rgba(247,243,235,0.85)" }}
            >
              <div style={{ fontWeight: 700, color: "var(--accent)" }}>Terry’s Hub</div>
              <nav className="hidden sm:flex gap-6 text-sm" aria-label="Primary">
  <a href="#about" className="hover-underline">About</a>
  <a href="#services" className="hover-underline">Services</a>
  <a href="#work" className="hover-underline">Work</a>
  <a href="#contact" className="hover-underline">Contact</a>
  <a href="/payment" className="hover-underline text-[var(--accent)] font-semibold">Pay</a>
</nav>

            </div>
          </header>

          {/* HERO */}
          <section
            className="grid md:grid-cols-2 gap-8 items-center px-6 py-16 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #006D77 0%, #F7F3EB 100%)"
            }}
          >
            <div className="space-y-6 fade-in fade-in-delay-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                Hi — I'm Terry.
              </h1>

              <p className="text-lg max-w-xl text-white/90">
                I help brands grow with social media strategy, refined visuals, and copy that converts.
                Based in Accra — available for remote work and product sourcing support.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.link/gqrkyy"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <FaWhatsapp /> <span>Message on WhatsApp</span>
                </a>

                <a
                  href="mailto:terryoppong58@gmail.com"
                  className="btn"
                >
                  <FaEnvelope /> <span>Email me</span>
                </a>
              </div>

              <div className="flex gap-4 text-2xl mt-3">
                <a href="https://www.instagram.com/terryygram_/" target="_blank" rel="noreferrer" className="icon-link">
                  <FaInstagram />
                </a>
                <a href="https://snapchat.com/t/0C9mPMjT" target="_blank" rel="noreferrer" className="icon-link">
                  <FaSnapchatGhost />
                </a>
                <a href="mailto:terryoppong58@gmail.com" className="icon-link">
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className="flex justify-center fade-in fade-in-delay-2">
              <div className="rounded-2xl overflow-hidden shadow-xl transform transition hover:scale-105" style={{ maxWidth: 420 }}>
                <img src="/profile.jpg" alt="Terry Oppong" className="w-full h-[420px] object-contain" />
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="px-6 py-12">
            <div className="fade-in fade-in-delay-2 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--primary)" }}>About Me</h2>
              <div style={{ width: 60, height: 3, backgroundColor: "var(--primary)", margin: "0 auto 16px" }} />
              <div className="text-left md:text-center text-gray-700 leading-relaxed">
                <p>My name is <strong>Terry Oppong</strong>, a dedicated and results-driven Social Media Manager, Content Creator, Copywriter, Graphic Designer, and Data Entry Specialist based in Accra, Ghana.</p>
                <p className="mt-3">I specialize in helping businesses and individuals establish a strong and professional digital presence through strategic content creation, compelling copy, and visually refined designs.</p>
                <p className="mt-3">I also assist clients in sourcing and procuring quality products and goods, ensuring reliable service and seamless transactions from start to finish.</p>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section id="services" className="px-6 py-12 bg-[rgba(0,0,0,0.03)]">
            <div className="fade-in fade-in-delay-3 max-w-6xl mx-auto">
              <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: "var(--primary)" }}>What I Do</h3>
              <div style={{ width: 60, height: 3, backgroundColor: "var(--primary)", margin: "0 auto 16px" }} />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Social Media Strategy & Content Calendars",
                  "Graphic Design & Branding",
                  "Copywriting & Captions",
                  "Content Creation & Reels",
                  "Data Entry & Digital Organization",
                  "Product Sourcing & Procurement",
                ].map((s, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border transition transform hover:-translate-y-1 hover:shadow-lg group"
                    style={{ borderColor: "rgba(0,0,0,0.1)", background: "var(--neutral)" }}
                  >
                    <h4 className="font-semibold mb-2" style={{ color: "var(--primary)" }}>{s}</h4>
                    <p className="text-gray-600 text-sm">Professional, reliable service tailored to your brand’s needs.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RECENT WORK */}
          <section id="work" className="px-6 py-12">
            <div className="fade-in fade-in-delay-3 max-w-6xl mx-auto">
              <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: "var(--primary)" }}>Recent Work</h3>
              <div style={{ width: 60, height: 3, backgroundColor: "var(--primary)", margin: "0 auto 16px" }} />
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: "Social Media Strategy", src: "/social-media.jpg" },
                  { title: "Graphic Design Portfolio", src: "/graphic-design.jpg" },
                  { title: "Copywriting & Content", src: "/copywriting.jpg" },
                ].map((work, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden shadow-lg group transform transition-all duration-700 hover:-translate-y-2 hover:rotate-1">
                    <img src={work.src} alt={work.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-[rgba(0,109,119,0.4)] opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition duration-500">
                      <p className="text-white font-semibold drop-shadow">{work.title}</p>
                      <button
                        className="mt-3 px-4 py-2 rounded-full text-sm"
                        style={{ background: "var(--accent)", color: "var(--neutral)" }}
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="px-6 py-12 bg-[rgba(0,0,0,0.02)]">
            <div className="fade-in fade-in-delay-4 max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--primary)" }}>Let’s Connect</h3>
              <p className="text-gray-700 mb-6">Want to grow your brand? Send a quick message or check my socials below.</p>

              <div className="flex justify-center gap-4 flex-wrap mb-6">
                <a className="btn" href="https://wa.link/gqrkyy" target="_blank" rel="noreferrer">
                  <FaWhatsapp /> <span className="ml-2">WhatsApp</span>
                </a>
                <a className="btn-outline" href="mailto:terryoppong58@gmail.com">
                  <FaEnvelope /> <span className="ml-2">Email</span>
                </a>
                <a className="btn-outline" href="https://www.instagram.com/terryygram_/" target="_blank" rel="noreferrer">
                  <FaInstagram /> <span className="ml-2">Instagram</span>
                </a>
                <a className="btn-outline" href="https://snapchat.com/t/0C9mPMjT" target="_blank" rel="noreferrer">
                  <FaSnapchatGhost /> <span className="ml-2">Snapchat</span>
                </a>
              </div>
<div className="mt-4">
  <a
    href="/payment"
    className="inline-block mt-3 px-6 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
  >
    💳 Make a Payment
  </a>
</div>

              <p className="text-sm text-gray-500">Or email me at <strong>terryoppong58@gmail.com</strong></p>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="px-6 py-8 text-center text-sm text-gray-600">
            <div className="mb-4 flex items-center justify-center gap-6 text-2xl">
              <a href="https://wa.link/gqrkyy" className="icon-link" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/terryygram_/" className="icon-link" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://snapchat.com/t/0C9mPMjT" className="icon-link" target="_blank" rel="noreferrer"><FaSnapchatGhost /></a>
              <a href="mailto:terryoppong58@gmail.com" className="icon-link"><FaEnvelope /></a>
            </div>
            <div>© {new Date().getFullYear()} Terry Oppong — All rights reserved.</div>
          </footer>
        </div>
      </main>

      {/* STYLES */}
      <style jsx>{`
        :root {
          --primary: #006D77;    /* Deep Teal */
          --accent: #D4A373;     /* Burnt Gold */
          --neutral: #F7F3EB;    /* Soft Cream */
          --highlight: #FF6B6B;  /* Coral Pink */
        }

        body {
          background: var(--neutral);
          color: var(--primary);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 109, 119, 0.3);
        }

        .btn:hover {
          background: var(--highlight);
          color: var(--neutral);
          box-shadow: 0 6px 15px rgba(0, 109, 119, 0.5);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 9999px;
          font-weight: 600;
          border: 1px solid var(--accent);
          color: var(--accent);
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: var(--highlight);
          color: var(--neutral);
        }

        .icon-link {
          color: var(--primary);
          transition: all 200ms ease;
        }
        .icon-link:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }

        .hover-underline {
          position: relative;
          color: var(--primary);
        }

        .hover-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 3px;
          background: var(--primary);
          transition: width 250ms ease;
        }

        .hover-underline:hover::after {
          width: 100%;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          opacity: 0;
          animation: fadeInUp 720ms cubic-bezier(.2,.9,.2,1) forwards;
        }

        .fade-in-delay-1 { animation-delay: 120ms; }
        .fade-in-delay-2 { animation-delay: 260ms; }
        .fade-in-delay-3 { animation-delay: 420ms; }
        .fade-in-delay-4 { animation-delay: 620ms; }
      `}</style>
    </>
  );
}
