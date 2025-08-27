import React from "react";

const Template4 = ({ elements, setSelectedElement }) => {
  return (
    <>
      {/* CSS Animations */}
      <style>
        {`
          :root {
            --nav-bg: ${elements.navigation?.background || 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,20,0.9))'};
            --nav-hover-bg: ${elements.navigation?.hoverBackground || 'linear-gradient(135deg, rgba(0,0,0,0.98), rgba(30,30,30,0.95))'};
            --nav-border: ${elements.navigation?.borderBottom || '1px solid rgba(255,107,53,0.2)'};
            --nav-hover-border: ${elements.navigation?.hoverBorderBottom || '1px solid rgba(255,107,53,0.4)'};
            --nav-shadow: ${elements.navigation?.boxShadow || '0 4px 20px rgba(0,0,0,0.3)'};
            --nav-hover-shadow: ${elements.navigation?.hoverBoxShadow || '0 6px 30px rgba(0,0,0,0.5)'};
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideDown {
            from { 
              opacity: 0; 
              transform: translateX(-50%) translateY(-20px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(-50%) translateY(0); 
            }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes pulse {
            from { opacity: 0.3; }
            to { opacity: 0.6; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes bounceIn {
            0% { 
              opacity: 0; 
              transform: scale(0.3) translateY(50px); 
            }
            50% { 
              opacity: 1; 
              transform: scale(1.05) translateY(-10px); 
            }
            70% { 
              transform: scale(0.95) translateY(5px); 
            }
            100% { 
              opacity: 1; 
              transform: scale(1) translateY(0); 
            }
          }
          
          @keyframes slideInLeft {
            from { 
              opacity: 0; 
              transform: translateX(-100px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(0); 
            }
          }
          
          @keyframes slideInRight {
            from { 
              opacity: 0; 
              transform: translateX(100px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(0); 
            }
          }
          
          @keyframes glow {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(255,107,53,0.3); 
            }
            50% { 
              box-shadow: 0 0 40px rgba(255,107,53,0.6), 0 0 60px rgba(255,107,53,0.4); 
            }
          }
          
          @keyframes textGlow {
            0%, 100% { 
              text-shadow: 0 0 20px rgba(255,107,53,0.5); 
            }
            50% { 
              text-shadow: 0 0 30px rgba(255,107,53,0.8), 0 0 40px rgba(255,107,53,0.6); 
            }
          }
          
          @keyframes backgroundShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .template4-container {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
          }
          
          .nav-bar {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: var(--nav-bg);
            backdrop-filter: blur(15px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-bottom: var(--nav-border);
            box-shadow: var(--nav-shadow);
          }
          
          .nav-bar:hover {
            background: var(--nav-hover-bg);
            border-bottom: var(--nav-hover-border);
            box-shadow: var(--nav-hover-shadow);
          }
          
          .hero-section {
            position: relative;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 100%), 
                        linear-gradient(45deg, rgba(255,107,53,0.1) 0%, transparent 50%), 
                        url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920');
            background-size: cover, 200% 200%, cover;
            background-position: center, 0% 50%, center;
            background-attachment: fixed;
            animation: fadeIn 1.5s ease-in-out, backgroundShift 20s ease-in-out infinite;
            overflow: hidden;
          }
          
          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 80%, rgba(255,107,53,0.15) 0%, transparent 60%), 
              radial-gradient(circle at 80% 20%, rgba(255,140,66,0.12) 0%, transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(255,107,53,0.08) 0%, transparent 70%);
            animation: pulse 6s ease-in-out infinite alternate;
          }
          
          .hero-section::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(255,107,53,0.05) 50%, transparent 70%);
            animation: float 8s ease-in-out infinite;
          }
          
          .location-badge {
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #ff6b35, #ff8c42, #ff6b35);
            background-size: 200% 200%;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 700;
            box-shadow: 0 8px 25px rgba(255,107,53,0.4), 0 4px 10px rgba(0,0,0,0.3);
            animation: slideDown 1s ease-out 0.5s both, glow 3s ease-in-out infinite, backgroundShift 4s ease-in-out infinite;
            border: 2px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
          }
          
          .hero-title {
            font-weight: 900;
            margin: 20px 0;
            letter-spacing: 8px;
            text-shadow: 4px 4px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,107,53,0.3);
            animation: slideUp 1s ease-out 0.8s both, textGlow 4s ease-in-out infinite;
            text-transform: uppercase;
            position: relative;
          }
          
          .hero-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, transparent, #ff6b35, transparent);
            animation: slideUp 1s ease-out 1s both;
          }
          
          .hero-subtitle {
            max-width: 750px;
            line-height: 1.9;
            margin: 40px 0 60px;
            animation: slideUp 1s ease-out 1.1s both;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
            font-size: 18px;
            opacity: 0.95;
          }
          
          .hero-buttons {
            display: flex;
            gap: 30px;
            animation: bounceIn 1.2s ease-out 1.4s both;
          }
          
          .primary-btn {
            background: linear-gradient(135deg, #ff6b35, #ff8c42, #ff6b35);
            background-size: 200% 200%;
            border: none;
            padding: 20px 40px;
            font-size: 16px;
            font-weight: 800;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 25px rgba(255,107,53,0.5), 0 4px 10px rgba(0,0,0,0.3);
            text-transform: uppercase;
            letter-spacing: 2px;
            color: white;
            position: relative;
            overflow: hidden;
            border: 2px solid rgba(255,255,255,0.2);
          }
          
          .primary-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.6s;
          }
          
          .primary-btn:hover::before {
            left: 100%;
          }
          
          .primary-btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 12px 35px rgba(255,107,53,0.7), 0 6px 15px rgba(0,0,0,0.4);
            background-position: 100% 0%;
          }
          
          .secondary-btn {
            background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
            border: 2px solid rgba(255,255,255,0.3);
            padding: 18px 38px;
            font-size: 16px;
            font-weight: 700;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(15px);
            text-transform: uppercase;
            letter-spacing: 2px;
            color: white;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }
          
          .secondary-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,107,53,0.2), transparent);
            transition: left 0.6s;
          }
          
          .secondary-btn:hover::before {
            left: 100%;
          }
          
          .secondary-btn:hover {
            background: linear-gradient(135deg, rgba(255,107,53,0.2), rgba(255,140,66,0.15));
            border-color: rgba(255,107,53,0.6);
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 8px 25px rgba(255,107,53,0.3), 0 4px 10px rgba(0,0,0,0.3);
          }
        `}
      </style>
      
      <div className="template4-container" style={{ background: "#000", color: "#fff" }}>
        {/* Navigation */}
        <nav 
          className="nav-bar"
          style={{
            padding: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer"
          }}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedElement("navigation");
          }}
        >
          <div 
            className="logo"
            style={{
              fontSize: elements.logo.fontSize,
              fontFamily: elements.logo.fontFamily,
              color: elements.logo.color,
              fontWeight: "900",
              letterSpacing: "2px",
              cursor: "pointer"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("logo"); }}
          >
            {elements.logo.text}
          </div>
          <ul 
            className="nav-links"
            style={{ 
              display: "flex", 
              listStyle: "none", 
              gap: "30px", 
              margin: 0, 
              padding: 0 
            }}
          >
            {elements.menu.items.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    fontSize: elements.menu.fontSize,
                    fontFamily: elements.menu.fontFamily,
                    color: elements.menu.color,
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    fontWeight: "500"
                  }}
                  onClick={(e) => { e.stopPropagation(); setSelectedElement("menu"); }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ff6b35";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = elements.menu.color;
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Section */}
        <section
          className="hero-section"
          onClick={() => setSelectedElement("hero")}
        >
          <div
            className="location-badge"
            style={{ cursor: "pointer" }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("location"); }}
          >
            📍 {elements.location.text}
          </div>
          
          <h1
            className="hero-title"
            style={{
              fontSize: elements.hero.titleFontSize,
              fontFamily: elements.hero.titleFontFamily,
              color: elements.hero.titleColor,
              cursor: "pointer"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("heroTitle"); }}
          >
            {elements.hero.title}
          </h1>
          
          <p
            className="hero-subtitle"
            style={{
              fontSize: elements.hero.subtitleFontSize,
              fontFamily: elements.hero.subtitleFontFamily,
              color: elements.hero.subtitleColor,
              cursor: "pointer"
            }}
            onClick={(e) => { e.stopPropagation(); setSelectedElement("heroSubtitle"); }}
          >
            {elements.hero.subtitle}
          </p>
          
          <div className="hero-buttons">
            <button
              className="primary-btn"
              style={{
                background: `linear-gradient(45deg, ${elements.hero.primaryButton.background}, #ff8c42)`,
                color: elements.hero.primaryButton.color
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedElement("heroPrimaryButton"); }}
            >
              {elements.hero.primaryButton.text}
            </button>
            <button
              className="secondary-btn"
              style={{
                color: elements.hero.secondaryButton.color,
                borderColor: elements.hero.secondaryButton.color
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedElement("heroSecondaryButton"); }}
            >
              {elements.hero.secondaryButton.text}
            </button>
          </div>
        </section>

        {/* About Section */}
        <section
          style={{
            padding: "100px 40px",
            background: elements.about.background,
            cursor: "pointer"
          }}
          onClick={() => setSelectedElement("about")}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: elements.about.titleFontSize,
                fontFamily: elements.about.titleFontFamily,
                color: elements.about.titleColor,
                marginBottom: "20px",
                cursor: "pointer"
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedElement("aboutTitle"); }}
            >
              {elements.about.title}
            </h2>
            <p
              style={{
                fontSize: elements.about.subtitleFontSize,
                fontFamily: elements.about.subtitleFontFamily,
                color: elements.about.subtitleColor,
                marginBottom: "60px",
                maxWidth: "600px",
                margin: "0 auto 60px",
                cursor: "pointer"
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedElement("aboutSubtitle"); }}
            >
              {elements.about.subtitle}
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
              {elements.about.features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "40px 30px",
                    borderRadius: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease"
                  }}
                  onClick={(e) => { e.stopPropagation(); setSelectedElement("aboutFeatures"); }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ fontSize: "48px", marginBottom: "20px" }}>{feature.icon}</div>
                  <h3
                    style={{
                      fontSize: feature.titleFontSize,
                      fontFamily: feature.titleFontFamily,
                      color: feature.titleColor,
                      marginBottom: "15px"
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: feature.descriptionFontSize,
                      fontFamily: feature.descriptionFontFamily,
                      color: feature.descriptionColor,
                      lineHeight: "1.6"
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          style={{
            padding: "100px 40px",
            background: elements.services.background,
            cursor: "pointer"
          }}
          onClick={() => setSelectedElement("services")}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: elements.services.titleFontSize,
                fontFamily: elements.services.titleFontFamily,
                color: elements.services.titleColor,
                marginBottom: "20px",
                cursor: "pointer"
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedElement("servicesTitle"); }}
            >
              {elements.services.title}
            </h2>
            <p
              style={{
                fontSize: elements.services.subtitleFontSize,
                fontFamily: elements.services.subtitleFontFamily,
                color: elements.services.subtitleColor,
                marginBottom: "60px",
                maxWidth: "600px",
                margin: "0 auto 60px",
                cursor: "pointer"
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedElement("servicesSubtitle"); }}
            >
              {elements.services.subtitle}
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
              {elements.services.items.map((service, index) => (
                <div
                  key={index}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,140,66,0.1))",
                    padding: "50px 30px",
                    borderRadius: "15px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255,107,53,0.2)"
                  }}
                  onClick={(e) => { e.stopPropagation(); setSelectedElement("servicesItems"); }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-10px)";
                    e.target.style.boxShadow = "0 20px 40px rgba(255,107,53,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "64px", marginBottom: "25px" }}>{service.icon}</div>
                  <h3
                    style={{
                      fontSize: service.titleFontSize,
                      fontFamily: service.titleFontFamily,
                      color: service.titleColor,
                      marginBottom: "20px"
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: service.descriptionFontSize,
                      fontFamily: service.descriptionFontFamily,
                      color: service.descriptionColor,
                      lineHeight: "1.7"
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          style={{
            padding: "100px 40px",
            background: elements.contact.background,
            cursor: "pointer"
          }}
          onClick={() => setSelectedElement("contact")}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: elements.contact.titleFontSize,
                fontFamily: elements.contact.titleFontFamily,
                color: elements.contact.titleColor,
                marginBottom: "60px",
                cursor: "pointer"
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedElement("contactTitle"); }}
            >
              {elements.contact.title}
            </h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "40px 30px",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
                onClick={(e) => { e.stopPropagation(); setSelectedElement("contactPhone"); }}
              >
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>📞</div>
                <h3 style={{ color: "#ff6b35", marginBottom: "10px", fontSize: "18px" }}>Phone</h3>
                <p style={{ color: elements.contact.phone.color, fontSize: elements.contact.phone.fontSize }}>
                  {elements.contact.phone.text}
                </p>
              </div>
              
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "40px 30px",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
                onClick={(e) => { e.stopPropagation(); setSelectedElement("contactEmail"); }}
              >
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>✉️</div>
                <h3 style={{ color: "#ff6b35", marginBottom: "10px", fontSize: "18px" }}>Email</h3>
                <p style={{ color: elements.contact.email.color, fontSize: elements.contact.email.fontSize }}>
                  {elements.contact.email.text}
                </p>
              </div>
              
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "40px 30px",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
                onClick={(e) => { e.stopPropagation(); setSelectedElement("contactAddress"); }}
              >
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>📍</div>
                <h3 style={{ color: "#ff6b35", marginBottom: "10px", fontSize: "18px" }}>Address</h3>
                <p style={{ color: elements.contact.address.color, fontSize: elements.contact.address.fontSize }}>
                  {elements.contact.address.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            padding: "60px 40px 30px",
            background: elements.footer.background,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer"
          }}
          onClick={() => setSelectedElement("footer")}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                fontSize: elements.footer.logo.fontSize,
                fontFamily: elements.footer.logo.fontFamily,
                color: elements.footer.logo.color,
                fontWeight: "900",
                marginBottom: "30px",
                cursor: "pointer"
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedElement("footerLogo"); }}
            >
              {elements.footer.logo.text}
            </div>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "30px", flexWrap: "wrap" }}>
              {elements.footer.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: elements.footer.linkColor,
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                    cursor: "pointer"
                  }}
                  onClick={(e) => { e.stopPropagation(); setSelectedElement("footerLinks"); }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ff6b35";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = elements.footer.linkColor;
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
            
            <p
              style={{
                color: elements.footer.copyright.color,
                fontSize: elements.footer.copyright.fontSize,
                fontFamily: elements.footer.copyright.fontFamily,
                margin: 0,
                cursor: "pointer"
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedElement("footerCopyright"); }}
            >
              {elements.footer.copyright.text}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

  // Default elements structure for Template4
Template4.elements = {
  navigation: {
    background: 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,20,0.9))',
    hoverBackground: 'linear-gradient(135deg, rgba(0,0,0,0.98), rgba(30,30,30,0.95))',
    borderBottom: '1px solid rgba(255,107,53,0.2)',
    hoverBorderBottom: '1px solid rgba(255,107,53,0.4)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    hoverBoxShadow: '0 6px 30px rgba(0,0,0,0.5)',
    // Add these properties to make them appear in the properties panel
    backgroundType: 'gradient', // 'solid' or 'gradient'
    backgroundColor: '#000000',
    hoverBackgroundType: 'gradient',
    hoverBackgroundColor: '#1a1a1a',
    borderColor: 'rgba(255,107,53,0.2)',
    hoverBorderColor: 'rgba(255,107,53,0.4)',
    shadowColor: 'rgba(0,0,0,0.3)',
    hoverShadowColor: 'rgba(0,0,0,0.5)'
  },
  logo: {
    text: "CLUB ACTIVE",
    fontSize: "24px",
    fontFamily: "Inter, sans-serif",
    color: "#fff"
  },
  menu: {
    items: ["Home", "About", "Services", "Amenities", "Gallery", "Contact"],
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    color: "#fff"
  },
  location: {
    text: "Located in Varkakkala, Cochin, Kerala",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    color: "#fff"
  },
  hero: {
    title: "CLUB ACTIVE",
    titleFontSize: "72px",
    titleFontFamily: "Inter, sans-serif",
    titleColor: "#fff",
    subtitle: "Transform your body and mind at Kerala's premier fitness destination. State-of-the-art equipment, expert trainers, and a community dedicated to your success.",
    subtitleFontSize: "18px",
    subtitleFontFamily: "Inter, sans-serif",
    subtitleColor: "#ccc",
    primaryButton: {
      text: "JOIN NOW",
      background: "#ff6b35",
      color: "#fff"
    },
    secondaryButton: {
      text: "LEARN MORE",
      color: "#fff"
    }
  },
  about: {
    title: "Why Choose Club Active?",
    titleFontSize: "42px",
    titleFontFamily: "Inter, sans-serif",
    titleColor: "#fff",
    subtitle: "Experience Kerala's premier fitness destination with state-of-the-art equipment, expert trainers, and a community dedicated to transforming your health and wellness journey.",
    subtitleFontSize: "18px",
    subtitleFontFamily: "Inter, sans-serif",
    subtitleColor: "#ccc",
    background: "#111",
    features: [
      {
        icon: "🧼",
        title: "Hygienic Environment",
        titleFontSize: "24px",
        titleFontFamily: "Inter, sans-serif",
        titleColor: "#fff",
        description: "Maintained to the highest standards of cleanliness and safety with regular sanitization, air purification systems, and spotless equipment for your peace of mind.",
        descriptionFontSize: "16px",
        descriptionFontFamily: "Inter, sans-serif",
        descriptionColor: "#ccc"
      },
      {
        icon: "📏",
        title: "Body Measurement & Analysis",
        titleFontSize: "24px",
        titleFontFamily: "Inter, sans-serif",
        titleColor: "#fff",
        description: "Advanced body composition analysis using InBody technology, detailed progress tracking, and personalized fitness assessments to monitor your transformation journey.",
        descriptionFontSize: "16px",
        descriptionFontFamily: "Inter, sans-serif",
        descriptionColor: "#ccc"
      },
      {
        icon: "👥",
        title: "Personal Attention",
        titleFontSize: "24px",
        titleFontFamily: "Inter, sans-serif",
        titleColor: "#fff",
        description: "Certified personal trainers provide one-on-one guidance, customized workout plans, nutritional counseling, and continuous motivation to achieve your fitness goals.",
        descriptionFontSize: "16px",
        descriptionFontFamily: "Inter, sans-serif",
        descriptionColor: "#ccc"
      },
      {
        icon: "💪",
        title: "Premium Equipment",
        titleFontSize: "24px",
        titleFontFamily: "Inter, sans-serif",
        titleColor: "#fff",
        description: "Latest fitness equipment from leading international brands including Technogym, Life Fitness, and Matrix for optimal workout experience and results.",
        descriptionFontSize: "16px",
        descriptionFontFamily: "Inter, sans-serif",
        descriptionColor: "#ccc"
      },
      {
        icon: "🕐",
        title: "Flexible Timings",
        titleFontSize: "24px",
        titleFontFamily: "Inter, sans-serif",
        titleColor: "#fff",
        description: "Open 16 hours daily from 5:00 AM to 9:00 PM, accommodating early birds and night owls with extended hours for your convenience.",
        descriptionFontSize: "16px",
        descriptionFontFamily: "Inter, sans-serif",
        descriptionColor: "#ccc"
      },
      {
        icon: "🏆",
        title: "Proven Results",
        titleFontSize: "24px",
        titleFontFamily: "Inter, sans-serif",
        titleColor: "#fff",
        description: "Over 5000+ successful transformations with documented results, testimonials, and a track record of helping members achieve their fitness dreams.",
        descriptionFontSize: "16px",
        descriptionFontFamily: "Inter, sans-serif",
        descriptionColor: "#ccc"
      }
    ]
  },
  services: {
    title: "Our Specialties",
    titleFontSize: "42px",
    titleFontFamily: "Inter, sans-serif",
    titleColor: "#fff",
    subtitle: "Comprehensive fitness solutions tailored to your needs.",
    subtitleFontSize: "18px",
    subtitleFontFamily: "Inter, sans-serif",
    subtitleColor: "#ccc",
    background: "#000",
    items: [
      {
        icon: "🏋️",
        title: "Premium Equipment",
        titleFontSize: "24px",
        titleFontFamily: "Inter, sans-serif",
        titleColor: "#fff",
        description: "Latest fitness equipment from leading brands for optimal workout experience.",
        descriptionFontSize: "16px",
        descriptionFontFamily: "Inter, sans-serif",
        descriptionColor: "#ccc"
      },
      {
        icon: "🎯",
        title: "Certified Trainers",
        titleFontSize: "24px",
        titleFontFamily: "Inter, sans-serif",
        titleColor: "#fff",
        description: "Expert guidance from certified fitness professionals with years of experience.",
        descriptionFontSize: "16px",
        descriptionFontFamily: "Inter, sans-serif",
        descriptionColor: "#ccc"
      },
      {
        icon: "⚽",
        title: "Sports Training",
        titleFontSize: "24px",
        titleFontFamily: "Inter, sans-serif",
        titleColor: "#fff",
        description: "Specialized training programs for various sports and athletic performance.",
        descriptionFontSize: "16px",
        descriptionFontFamily: "Inter, sans-serif",
        descriptionColor: "#ccc"
      }
    ]
  },
  contact: {
    title: "Get In Touch",
    titleFontSize: "42px",
    titleFontFamily: "Inter, sans-serif",
    titleColor: "#fff",
    background: "#111",
    phone: {
      text: "+91 9876543210",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      color: "#ccc"
    },
    email: {
      text: "info@clubactive.com",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      color: "#ccc"
    },
    address: {
      text: "Varkakkala, Cochin, Kerala 682021",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      color: "#ccc"
    }
  },
  footer: {
    background: "#000",
    logo: {
      text: "CLUB ACTIVE",
      fontSize: "24px",
      fontFamily: "Inter, sans-serif",
      color: "#fff"
    },
    linkColor: "#ccc",
    copyright: {
      text: "© 2024 Club Active. All rights reserved.",
      fontSize: "14px",
      fontFamily: "Inter, sans-serif",
      color: "#666"
    },
    links: ["Privacy Policy", "Terms of Service", "Membership", "Contact"]
  }
};

export default Template4;
