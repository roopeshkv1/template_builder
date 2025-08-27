import React from "react";

const Template1 = ({ elements, setSelectedElement }) => {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          background: elements.header.background,
          padding: "0 40px",
          borderBottom: "1px solid #e5e7eb",
          cursor: "pointer"
        }}
        onClick={() => setSelectedElement("header")}
      >
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }}>
          <div
            style={{
              fontSize: elements.logo.fontSize,
              fontFamily: elements.logo.fontFamily,
              color: elements.logo.color,
              fontWeight: "bold",
              cursor: "pointer"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("logo"); }}
          >
            {elements.logo.text}
          </div>
          <ul style={{ display: "flex", listStyle: "none", gap: "30px", margin: 0, padding: 0 }}>
            {elements.menu.items.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontSize: elements.menu.fontSize,
                    fontFamily: elements.menu.fontFamily,
                    color: elements.menu.color,
                    cursor: "pointer"
                  }}
                  onClick={(e) => { e.stopPropagation(); setSelectedElement("menu"); }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${elements.hero.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={() => setSelectedElement("hero")}
      >
        <div>
          <h1
            style={{
              fontSize: elements.hero.title.fontSize,
              fontFamily: elements.hero.title.fontFamily,
              color: elements.hero.title.color,
              margin: "0 0 20px 0",
              cursor: "pointer"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("heroTitle"); }}
          >
            {elements.hero.title.text}
          </h1>
          <p
            style={{
              fontSize: elements.hero.subtitle.fontSize,
              fontFamily: elements.hero.subtitle.fontFamily,
              color: elements.hero.subtitle.color,
              margin: "0 0 30px 0",
              cursor: "pointer"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("heroSubtitle"); }}
          >
            {elements.hero.subtitle.text}
          </p>
          <button
            style={{
              padding: "15px 30px",
              borderRadius: elements.hero.button.borderRadius,
              fontSize: elements.hero.button.fontSize,
              fontFamily: elements.hero.button.fontFamily,
              background: elements.hero.button.background,
              color: elements.hero.button.color,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("heroButton"); }}
          >
            {elements.hero.button.text}
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section
        style={{
          padding: "80px 40px",
          background: elements.content.background,
          cursor: "pointer"
        }}
        onClick={() => setSelectedElement("content")}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: elements.content.title.fontSize,
              fontFamily: elements.content.title.fontFamily,
              color: elements.content.title.color,
              textAlign: "center",
              marginBottom: "20px",
              cursor: "pointer"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("contentTitle"); }}
          >
            {elements.content.title.text}
          </h2>
          <p
            style={{
              fontSize: elements.content.description.fontSize,
              fontFamily: elements.content.description.fontFamily,
              color: elements.content.description.color,
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 50px auto",
              lineHeight: "1.6",
              cursor: "pointer"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("contentDescription"); }}
          >
            {elements.content.description.text}
          </p>
          
          {/* Feature Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {elements.content.features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: feature.boxBackground,
                  padding: "30px",
                  borderRadius: feature.borderRadius + "px",
                  boxShadow: feature.boxShadow,
                  textAlign: "center",
                  cursor: "pointer",
                  border: feature.border
                }}
                onClick={(e) => { e.stopPropagation(); setSelectedElement(`feature${index}`); }}
              >
                <h3 style={{ 
                  color: feature.titleColor, 
                  marginBottom: "15px",
                  fontSize: feature.titleFontSize + "px",
                  fontFamily: feature.titleFontFamily,
                  fontWeight: feature.titleFontWeight
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: feature.descriptionColor, 
                  lineHeight: "1.6",
                  fontSize: feature.descriptionFontSize + "px",
                  fontFamily: feature.descriptionFontFamily
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: elements.footer.background,
          color: elements.footer.color,
          padding: "40px",
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={() => setSelectedElement("footer")}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: elements.footer.text.fontSize,
              fontFamily: elements.footer.text.fontFamily,
              marginBottom: "20px",
              cursor: "pointer"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("footerText"); }}
          >
            {elements.footer.text.content}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            {elements.footer.links.map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: elements.footer.color,
                  textDecoration: "none",
                  fontSize: "14px",
                  cursor: "pointer"
                }}
                onClick={(e) => { e.stopPropagation(); setSelectedElement("footerLinks"); }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

// Default elements structure for Template1
Template1.elements = {
  header: {
    background: "#ffffff",
    padding: "0 40px",
    borderBottom: "1px solid #e5e7eb"
  },
  logo: {
    text: "YourBrand",
    fontSize: "24px",
    fontFamily: "Inter, sans-serif",
    color: "#1f2937",
    fontWeight: "bold"
  },
  menu: {
    items: ["Home", "About", "Services", "Contact"],
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    color: "#374151"
  },
  hero: {
    backgroundImage: "/api/placeholder/1200/500",
    title: {
      text: "Welcome to Our Business",
      fontSize: "48px",
      fontFamily: "Inter, sans-serif",
      color: "#1f2937"
    },
    subtitle: {
      text: "We provide exceptional services to help your business grow",
      fontSize: "20px",
      fontFamily: "Inter, sans-serif",
      color: "#6b7280"
    },
    button: {
      text: "Get Started",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      background: "#3b82f6",
      color: "#ffffff",
      borderRadius: "8px"
    }
  },
  content: {
    background: "#f9fafb",
    title: {
      text: "Why Choose Us",
      fontSize: "36px",
      fontFamily: "Inter, sans-serif",
      color: "#1f2937"
    },
    description: {
      text: "We provide cutting-edge solutions that help businesses grow and succeed in today's competitive market.",
      fontSize: "18px",
      fontFamily: "Inter, sans-serif",
      color: "#6b7280"
    },
    features: [
      {
        title: "Fast Performance",
        description: "Lightning-fast solutions that boost your productivity",
        titleColor: "#1f2937",
        descriptionColor: "#6b7280",
        boxBackground: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e5e7eb",
        titleFontSize: 20,
        titleFontFamily: "Inter, sans-serif",
        titleFontWeight: "600",
        descriptionFontSize: 16,
        descriptionFontFamily: "Inter, sans-serif"
      },
      {
        title: "Secure & Reliable",
        description: "Enterprise-grade security you can trust",
        titleColor: "#1f2937",
        descriptionColor: "#6b7280",
        boxBackground: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e5e7eb",
        titleFontSize: 20,
        titleFontFamily: "Inter, sans-serif",
        titleFontWeight: "600",
        descriptionFontSize: 16,
        descriptionFontFamily: "Inter, sans-serif"
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock customer support",
        titleColor: "#1f2937",
        descriptionColor: "#6b7280",
        boxBackground: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e5e7eb",
        titleFontSize: 20,
        titleFontFamily: "Inter, sans-serif",
        titleFontWeight: "600",
        descriptionFontSize: 16,
        descriptionFontFamily: "Inter, sans-serif"
      }
    ]
  },
  footer: {
    background: "#1f2937",
    color: "#d1d5db",
    text: {
      content: "© 2025 YourBrand. All rights reserved.",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif"
    },
    links: ["Privacy Policy", "Terms of Service", "Contact Us", "About"]
  }
};

export default Template1;
