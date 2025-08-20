import React, { useState } from "react";

// Template Components (these would be imported from separate files)
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

const Template2 = ({ elements, setSelectedElement }) => {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      {/* Sidebar Layout Template */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{ 
          width: "300px", 
          background: "#1e293b", 
          color: "#fff", 
          padding: "40px 20px",
          minHeight: "100vh",
          cursor: "pointer"
        }}
        onClick={() => setSelectedElement("sidebar")}
        >
          <h2 style={{ 
            fontSize: "24px", 
            marginBottom: "30px",
            cursor: "pointer"
          }}
          onClick={(e) => { e.stopPropagation(); setSelectedElement("sidebarTitle"); }}
          >
            {elements.sidebar?.title || "Sidebar Title"}
          </h2>
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {(elements.sidebar?.menu || ["Dashboard", "Analytics", "Reports", "Settings"]).map((item, index) => (
                <li key={index} style={{ marginBottom: "15px" }}>
                  <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "40px" }}>
          <header style={{ marginBottom: "40px" }}>
            <h1 style={{ 
              fontSize: "36px", 
              color: "#1e293b", 
              marginBottom: "10px",
              cursor: "pointer"
            }}
            onClick={() => setSelectedElement("mainTitle")}
            >
              {elements.main?.title || "Dashboard Overview"}
            </h1>
            <p style={{ 
              color: "#64748b", 
              fontSize: "18px",
              cursor: "pointer"
            }}
            onClick={() => setSelectedElement("mainSubtitle")}
            >
              {elements.main?.subtitle || "Welcome to your analytics dashboard"}
            </p>
          </header>

          {/* Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            {(elements.cards || [
              { title: "Total Users", value: "12,345", color: "#3b82f6" },
              { title: "Revenue", value: "$45,678", color: "#10b981" },
              { title: "Orders", value: "1,234", color: "#f59e0b" },
              { title: "Growth", value: "+23%", color: "#ef4444" }
            ]).map((card, index) => (
              <div 
                key={index} 
                style={{ 
                  background: "#fff", 
                  padding: "30px", 
                  borderRadius: "12px", 
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  cursor: "pointer"
                }}
                onClick={() => setSelectedElement(`card${index}`)}
              >
                <h3 style={{ color: "#64748b", fontSize: "14px", marginBottom: "10px" }}>{card.title}</h3>
                <div style={{ fontSize: "32px", fontWeight: "bold", color: card.color }}>{card.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Template3 = ({ elements, setSelectedElement }) => {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Modern Dark Portfolio Template */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1 style={{ 
            fontSize: "72px", 
            fontWeight: "300", 
            marginBottom: "20px",
            background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer"
          }}
          onClick={() => setSelectedElement("portfolioTitle")}
          >
            {elements.portfolio?.title || "CREATIVE"}
          </h1>
          <p style={{ 
            fontSize: "24px", 
            color: "#666",
            cursor: "pointer"
          }}
          onClick={() => setSelectedElement("portfolioSubtitle")}
          >
            {elements.portfolio?.subtitle || "Designer & Developer"}
          </p>
        </header>

        {/* Project Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}>
          {(elements.projects || [
            { title: "Project Alpha", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400" },
            { title: "Project Beta", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400" },
            { title: "Project Gamma", image: "https://images.unsplash.com/photo-1558655146-364adfc43fb5?w=400" },
            { title: "Project Delta", image: "https://images.unsplash.com/photo-1558655146-2c7c6e04e1e8?w=400" }
          ]).map((project, index) => (
            <div 
              key={index} 
              style={{ 
                position: "relative", 
                overflow: "hidden", 
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
              onClick={() => setSelectedElement(`project${index}`)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: "100%", 
                  height: "300px", 
                  objectFit: "cover",
                  filter: "brightness(0.7)"
                }}
              />
              <div style={{ 
                position: "absolute", 
                bottom: "20px", 
                left: "20px", 
                fontSize: "24px", 
                fontWeight: "600"
              }}>
                {project.title}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer style={{ textAlign: "center", marginTop: "80px", padding: "40px 0", borderTop: "1px solid #333" }}>
          <p style={{ color: "#666" }}>© 2025 Creative Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

// Template Selection Screen Component
const TemplateSelection = ({ onSelectTemplate }) => {
  const templates = [
    {
      id: "template1",
      name: "Business Landing",
      description: "Professional business website with hero section, features, and footer",
      preview: "🏢",
      color: "#3b82f6"
    },
    {
      id: "template2", 
      name: "Dashboard Layout",
      description: "Sidebar dashboard layout perfect for admin panels and analytics",
      preview: "📊",
      color: "#10b981"
    },
    {
      id: "template3",
      name: "Portfolio Dark",
      description: "Modern dark portfolio template for creatives and developers",
      preview: "🎨",
      color: "#8b5cf6"
    }
  ];

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ 
            fontSize: "48px", 
            color: "#fff", 
            marginBottom: "20px", 
            fontWeight: "300" 
          }}>
            Choose Your Template
          </h1>
          <p style={{ 
            fontSize: "20px", 
            color: "rgba(255,255,255,0.8)", 
            maxWidth: "600px", 
            margin: "0 auto" 
          }}>
            Select a template to start building your website. You can customize every element after selection.
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
          gap: "30px" 
        }}>
          {templates.map((template) => (
            <div
              key={template.id}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              onClick={() => onSelectTemplate(template.id)}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}
            >
              <div style={{ 
                fontSize: "64px", 
                marginBottom: "20px",
                background: template.color,
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
                color: "#fff"
              }}>
                {template.preview}
              </div>
              
              <h3 style={{ 
                fontSize: "24px", 
                color: "#1f2937", 
                marginBottom: "15px",
                fontWeight: "600"
              }}>
                {template.name}
              </h3>
              
              <p style={{ 
                color: "#6b7280", 
                lineHeight: "1.6",
                marginBottom: "30px"
              }}>
                {template.description}
              </p>
              
              <button style={{
                background: template.color,
                color: "#fff",
                border: "none",
                padding: "12px 30px",
                borderRadius: "25px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.3s ease"
              }}>
                Select Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeTab, setActiveTab] = useState("style");

  // Default elements for each template
  const getDefaultElements = (templateId) => {
    switch (templateId) {
      case "template1":
        return {
          logo: { text: "YourBrand", fontSize: 24, fontFamily: "Arial", color: "#1f2937" },
          menu: { items: ["Home", "About", "Services", "Contact"], fontSize: 16, fontFamily: "Arial", color: "#1f2937" },
          header: { background: "#ffffff" },
          hero: {
            backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            title: { text: "Welcome to Our Amazing Platform", fontSize: 48, fontFamily: "Arial", color: "#ffffff", fontWeight: "bold" },
            subtitle: { text: "Discover powerful solutions that will transform your business", fontSize: 20, fontFamily: "Arial", color: "#f3f4f6" },
            button: { text: "Get Started", fontSize: 18, fontFamily: "Arial", color: "#fff", background: "#3b82f6", borderRadius: 8 }
          },
          content: {
            background: "#f9fafb",
            title: { text: "Why Choose Us", fontSize: 36, fontFamily: "Arial", color: "#1f2937" },
            description: { text: "We provide cutting-edge solutions that help businesses grow and succeed in today's competitive market.", fontSize: 18, fontFamily: "Arial", color: "#6b7280" },
            features: [
              { title: "Fast Performance", description: "Lightning-fast solutions that boost your productivity", boxBackground: "#ffffff", borderRadius: 12, boxShadow: "0 5px 20px rgba(0,0,0,0.1)", border: "none", titleColor: "#1f2937", titleFontSize: 20, titleFontFamily: "Arial", titleFontWeight: "600", descriptionColor: "#6b7280", descriptionFontSize: 14, descriptionFontFamily: "Arial" },
              { title: "Secure & Reliable", description: "Enterprise-grade security you can trust", boxBackground: "#ffffff", borderRadius: 12, boxShadow: "0 5px 20px rgba(0,0,0,0.1)", border: "none", titleColor: "#1f2937", titleFontSize: 20, titleFontFamily: "Arial", titleFontWeight: "600", descriptionColor: "#6b7280", descriptionFontSize: 14, descriptionFontFamily: "Arial" },
              { title: "24/7 Support", description: "Round-the-clock customer support", boxBackground: "#ffffff", borderRadius: 12, boxShadow: "0 5px 20px rgba(0,0,0,0.1)", border: "none", titleColor: "#1f2937", titleFontSize: 20, titleFontFamily: "Arial", titleFontWeight: "600", descriptionColor: "#6b7280", descriptionFontSize: 14, descriptionFontFamily: "Arial" }
            ]
          },
          footer: { background: "#1f2937", color: "#d1d5db", text: { content: "© 2025 YourBrand. All rights reserved.", fontSize: 14, fontFamily: "Arial" }, links: ["Privacy Policy", "Terms of Service", "Contact Us", "About"] }
        };
      case "template2":
        return {
          sidebar: { title: "Dashboard", menu: ["Overview", "Analytics", "Reports", "Settings"] },
          main: { title: "Dashboard Overview", subtitle: "Welcome to your analytics dashboard" },
          cards: [
            { title: "Total Users", value: "12,345", color: "#3b82f6" },
            { title: "Revenue", value: "$45,678", color: "#10b981" },
            { title: "Orders", value: "1,234", color: "#f59e0b" },
            { title: "Growth", value: "+23%", color: "#ef4444" }
          ]
        };
      case "template3":
        return {
          portfolio: { title: "CREATIVE", subtitle: "Designer & Developer" },
          projects: [
            { title: "Project Alpha", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400" },
            { title: "Project Beta", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400" },
            { title: "Project Gamma", image: "https://images.unsplash.com/photo-1558655146-364adfc43fb5?w=400" },
            { title: "Project Delta", image: "https://images.unsplash.com/photo-1558655146-2c7c6e04e1e8?w=400" }
          ]
        };
      default:
        return {};
    }
  };

  const [elements, setElements] = useState({});

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    setElements(getDefaultElements(templateId));
    setSelectedElement(null);
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "template1":
        return <Template1 elements={elements} setSelectedElement={setSelectedElement} />;
      case "template2":
        return <Template2 elements={elements} setSelectedElement={setSelectedElement} />;
      case "template3":
        return <Template3 elements={elements} setSelectedElement={setSelectedElement} />;
      default:
        return null;
    }
  };

  // If no template is selected, show template selection
  if (!selectedTemplate) {
    return <TemplateSelection onSelectTemplate={handleTemplateSelect} />;
  }

  // Rest of the editing interface code (simplified for brevity)
  const handleElementChange = (field, value) => {
    // Handle element changes based on selected template and element
    // Implementation would be similar to previous version but adapted for multiple templates
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    background: "#374151",
    border: "1px solid #4b5563",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "13px"
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#111827" }}>
      {/* Left Toolbar */}
      <div style={{ 
        width: "60px", 
        background: "#1f2937", 
        borderRight: "1px solid #374151",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0"
      }}>
        <button
          onClick={() => setSelectedTemplate(null)}
          style={{
            background: "#ef4444",
            border: "none",
            borderRadius: "8px",
            width: "40px",
            height: "40px",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "20px",
            fontSize: "18px"
          }}
          title="Back to Templates"
        >
          ←
        </button>
        <div style={{ color: "#9ca3af", fontSize: "24px", marginBottom: "30px" }}>⚡</div>
        <div style={{ 
          width: "40px", 
          height: "40px", 
          background: activeTab === "style" ? "#3b82f6" : "#374151",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          marginBottom: "10px",
          color: "#fff"
        }} onClick={() => setActiveTab("style")}>
          🎨
        </div>
      </div>

      {/* Main Preview Area */}
      <div style={{ flex: 1, background: "#1f2937", overflow: "auto" }}>
        <div style={{ 
          background: "#374151", 
          padding: "15px 20px", 
          borderBottom: "1px solid #4b5563",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <span style={{ color: "#d1d5db", fontSize: "14px", fontWeight: "600" }}>
              {selectedTemplate === "template1" ? "Business Landing" : 
               selectedTemplate === "template2" ? "Dashboard Layout" : "Portfolio Dark"} Editor
            </span>
            <div style={{ display: "flex", gap: "5px" }}>
              <button style={{ 
                padding: "5px 10px", 
                background: "#4b5563", 
                border: "none", 
                borderRadius: "4px", 
                color: "#d1d5db",
                fontSize: "12px",
                cursor: "pointer"
              }}>
                Preview
              </button>
              <button style={{ 
                padding: "5px 10px", 
                background: "#3b82f6", 
                border: "none", 
                borderRadius: "4px", 
                color: "#fff",
                fontSize: "12px",
                cursor: "pointer"
              }}>
                Export
              </button>
            </div>
          </div>
        </div>

        <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
          <div style={{ 
            background: selectedTemplate === "template3" ? "#000" : "#fff", 
            borderRadius: "8px", 
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            maxWidth: "1200px",
            width: "100%"
          }}>
            {renderTemplate()}
          </div>
        </div>
      </div>

      {/* Right Properties Panel */}
      <div style={{
        width: "320px",
        background: "#1f2937",
        borderLeft: "1px solid #374151",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{ 
          background: "#374151", 
          padding: "15px 20px", 
          borderBottom: "1px solid #4b5563",
          color: "#fff",
          fontWeight: "600",
          fontSize: "14px"
        }}>
          Properties Panel
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "20px" }}>
          {selectedElement ? (
            <div style={{ color: "#d1d5db" }}>
              <h3 style={{ marginBottom: "20px", borderBottom: "1px solid #374151", paddingBottom: "10px" }}>
                Editing: {selectedElement}
              </h3>
              <p style={{ fontSize: "13px", color: "#9ca3af" }}>
                Properties for {selectedElement} will be available here. 
                Each template has different customizable elements.
              </p>
            </div>
          ) : (
            <div style={{ color: "#6b7280" }}>
              Select an element to edit its properties
            </div>
          )}
        </div>

        {selectedElement && (
          <div style={{ 
            background: "#374151", 
            padding: "15px 20px", 
            borderTop: "1px solid #4b5563"
          }}>
            <button 
              onClick={() => setSelectedElement(null)}
              style={{ 
                width: "100%",
                padding: "10px", 
                background: "#ef4444", 
                border: "none", 
                borderRadius: "4px", 
                color: "#fff",
                cursor: "pointer",
                fontSize: "13px"
              }}
            >
              Deselect Element
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;