"use client";
import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
// Положи фото в папку /public/photos/ и замени имена файлов
// ─────────────────────────────────────────────────────────────
const photoSources = [
  "/image1.jpg",  // PHOTO 1
  "/image2.jpg",  // PHOTO 2
  "/image3.jpg",  // PHOTO 3
  "/image4.jpg",  // PHOTO 4
  "/image5.jpg",  // PHOTO 5
  "/image6.jpg",  // PHOTO 6
  "/image7.jpg",  // PHOTO 7
  "/iamge8.jpg",  // PHOTO 8
  "/image9.jpg",  // PHOTO 9
  "/image10.jpg", // PHOTO 10
  "/image11.jpg", // PHOTO 11
  "/image12.jpg", // PHOTO 12
  "/image13.jpg", // PHOTO 13
  "/image14.jpg", // PHOTO 14
  "/image15.jpg", // PHOTO 15
];

function Photo({ index, height = "400px", caption } : { index: number; height?: string; caption?: string }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const src = photoSources[index];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(18px)",
      transition: "opacity 0.65s ease, transform 0.65s ease",
    }}>
      {src ? (
        <img src={src} alt={caption || ""} style={{
          width: "100%",
          height,
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }} />
      ) : (
        <div style={{
          width: "100%",
          height,
          background: `linear-gradient(${120 + index * 22}deg, #0b0b0b, #191919)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <span style={{ color: "#1e1e1e", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace" }}>
            фото {index + 1}
          </span>
        </div>
      )}
      {caption && (
        <p style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          color: "#abababff",
          margin: "10px 0 0",
          lineHeight: "1.65",
          paddingLeft: "12px",
          borderLeft: "1px solid #1a1a1a",
        }}>{caption}</p>
      )}
    </div>
  );
}

function TextBlock({ label, children } : { label?: string; children: React.ReactNode }) {
  return (
    <section style={{ maxWidth: "700px", margin: "0 auto", padding: "72px 32px 60px" }}>
      {label && (
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "10px",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "#242424",
          marginBottom: "32px",
        }}>— {label}</div>
      )}
      {children}
    </section>
  );
}

function Body({ children } : { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'EB Garamond', serif",
      fontSize: "20px",
      lineHeight: "1.82",
      color: "#a8a095",
      marginBottom: "0",
    }}>{children}</p>
  );
}

const G = "3px"; // gap between photos

export default function AlmatyNight() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#e8e0d5" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #1e1e1e; }
        ::selection { background: #e8e0d5; color: #080808; }
      `}</style>

      {/* Header */}
      <header style={{
        borderBottom: "1px solid #121212",
        padding: "20px 32px",
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "rgba(8,8,8,0.97)",
        backdropFilter: "blur(12px)",
        zIndex: 100,
      }}>
        {["The Night Life of Almaty", "Art Research — 2026"].map(t => (
          <span key={t} style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#abababff",
          }}>{t}</span>
        ))}
      </header>

      {/* Hero */}
      <section style={{ maxWidth: "700px", margin: "0 auto", padding: "88px 32px 72px" }}>
        

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(48px, 9vw, 82px)",
          fontWeight: 900,
          lineHeight: 0.93,
          letterSpacing: "-0.025em",
          color: "rgba(223, 223, 223, 1)",
          marginBottom: "44px",
        }}>
          The Night Life<br />
          <em style={{ fontStyle: "italic", color: "#5a5450" }}>of Almaty</em>
        </h1>

        <div style={{ width: "28px", height: "1px", background: "#1e1e1e", marginBottom: "40px" }} />
      </section>

      {/* PHOTO 1 — full width */}
      <Photo index={0} height="520px" caption="The primary light source that defines Almaty's night profile" />

      <div style={{ height: G }} />

      {/* PHOTO 2 — full width */}
      <Photo index={1} height="420px" caption="How the city looks from above after dark" />

      {/* Intro text */}
      <TextBlock>
        <Body>
          For our art research, we decided to explore the social and visual transformation
          of the city after sunset. We wanted to see how people start to behave when the
          workday ends. Additionally, to notice how overall evening vibe change the way
          people socialize.
        </Body>
      </TextBlock>

      {/* PHOTO 3 + PHOTO 4 — side by side, shared caption */}
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: G }}>
          <Photo index={2} height="360px" />
          <Photo index={3} height="360px" />
        </div>
        <p style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          color: "#abababff",
          margin: "10px 32px 0",
          lineHeight: "1.65",
          paddingLeft: "12px",
          borderLeft: "1px solid #1a1a1a",
          maxWidth: "700px",
        }}>The city is full of energy and movement</p>
      </div>

      <div style={{ height: G }} />

      {/* PHOTO 5 — full width */}
      <Photo index={4} height="460px" caption="A photo shows how the artificial and natural elements of the cityscape smoothly merge at night" />

      <div style={{ height: G }} />

      {/* PHOTO 6 — full width */}
      <Photo index={5} height="420px" caption="At night, the infrastructure functions differently. Now, light is the primary tool for guiding traffic" />

      {/* Observations text */}
      <TextBlock>
        <Body>
          During our research, several interesting patterns were identified. Firstly,
          people try to gather where there is a lot of bright light from cafes and
          shops because they act as safety zones.
        </Body>
      </TextBlock>

      {/* PHOTO 7 + PHOTO 8 — side by side, shared caption */}
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: G }}>
          <Photo index={6} height="360px" />
          <Photo index={7} height="360px" />
        </div>
        <p style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          color: "#abababff",
          margin: "10px 32px 0",
          lineHeight: "1.65",
          paddingLeft: "12px",
          borderLeft: "1px solid #1a1a1a",
        }}>Warm light from windows of cafes creates comfortable vibe where people feel safe to stop and talk</p>
      </div>

      {/* Social change text */}
      <TextBlock>
        <Body>
          Second, we saw a big change in how people act. During the day, everyone is
          in a rush and more socially awkward. While at night, the atmosphere is more
          relaxed. People stop to listen to street musicians, walk at a slow pace, and
          are more open to talking to strangers. It is like the city finally takes a
          break from a workday.
        </Body>
      </TextBlock>

      {/* PHOTO 9 — full width */}
      <Photo index={8} height="460px" caption="Evening break in the city" />

      <div style={{ height: G }} />

      {/* PHOTO 10 — full width */}
      <Photo index={9} height="420px" caption="People slow down and enjoy the moment (street musician)" />

      {/* Theory text */}
      <TextBlock>
        <Body>
          This project connects to the work of Sabina Insebayeva about youth and
          identity that we covered in class. She writes that how people express
          themselves in the city is a big part of who they are.
        </Body>
        <br />
        <Body>
          Almaty's night streets are a 'public forum' for the youth. By performing
          music at streets, wearing non-conformist styles, making spontaneous,
          one-time friendships and so on, they are building a new identity.
          This is their way of being themselves away from traditional daytime
          structures and "rules".
        </Body>
      </TextBlock>

      {/* PHOTO 11 — full width */}
      <Photo index={10} height="460px" caption="Night match at the tower" />

      <div style={{ height: G }} />

      {/* PHOTO 12 — full width */}
      <Photo index={11} height="420px" caption="Night lights and celebrations" />

      {/* Conclusion */}
      <section style={{
        background: "#050505",
        borderTop: "1px solid #0f0f0f",
        borderBottom: "1px solid #0f0f0f",
        padding: "88px 32px",
        marginTop: "72px",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          

          <blockquote style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(22px, 3.5vw, 32px)",
            fontStyle: "italic",
            lineHeight: "1.5",
            color: "#c0b8ad",
            borderLeft: "1px solid #1c1c1c",
            paddingLeft: "32px",
            marginBottom: "44px",
          }}>
            "The night city is a place where we all feel like one community.
            It doesn't matter who you are in the evening."
          </blockquote>

          <p style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "19px",
            lineHeight: "1.85",
            color: "#606060",
            maxWidth: "600px",
          }}>
            In other words, it feels like an airport. In an airport, people don't care
            about social status, etiquette or strict traditions. The night is the same —
            the daytime rules weaken, and people finally relax. Of course, people still
            care about their appearance and manners. But mentally, they are relaxed and
            just enjoy the moment.
          </p>
        </div>
      </section>

      {/* Proof of Process */}
      <TextBlock label="Proof of Process">
        {/* PHOTO 13 + 14 side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: G, marginBottom: G }}>
          <Photo index={12} height="320px" />
          <Photo index={13} height="320px" />
        </div>
        {/* PHOTO 15 — full width with caption */}
        <Photo index={14} height="400px" caption="Our team during the work in Almaty center" />
      </TextBlock>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #0d0d0d",
        padding: "32px",
        display: "flex",
        justifyContent: "space-between",
      }}>
        {["The Night Life of Almaty", "Art Research — 2026"].map(t => (
          <span key={t} style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#181818",
          }}>{t}</span>
        ))}
      </footer>
    </div>
  );
}