import React, { useState } from "react";

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

const HomePage = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeTab, setActiveTab] = useState("style");

  const [elements, setElements] = useState({
    logo: { 
      text: "YourBrand", 
      fontSize: 24, 
      fontFamily: "Arial", 
      color: "#1f2937" 
    },
    menu: { 
      items: ["Home", "About", "Services", "Contact"],
      fontSize: 16,
      fontFamily: "Arial",
      color: "#1f2937"
    },
    header: {
      background: "#ffffff"
    },
    hero: {
      backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: { 
        text: "Welcome to Our Amazing Platform", 
        fontSize: 48, 
        fontFamily: "Arial", 
        color: "#ffffff",
        fontWeight: "bold"
      },
      subtitle: { 
        text: "Discover powerful solutions that will transform your business", 
        fontSize: 20, 
        fontFamily: "Arial", 
        color: "#f3f4f6" 
      },
      button: { 
        text: "Get Started", 
        fontSize: 18, 
        fontFamily: "Arial", 
        color: "#fff", 
        background: "#3b82f6",
        borderRadius: 8
      }
    },
    content: {
      background: "#f9fafb",
      title: { 
        text: "Why Choose Us", 
        fontSize: 36, 
        fontFamily: "Arial", 
        color: "#1f2937" 
      },
      description: { 
        text: "We provide cutting-edge solutions that help businesses grow and succeed in today's competitive market.", 
        fontSize: 18, 
        fontFamily: "Arial", 
        color: "#6b7280" 
      },
      features: [
        { 
          title: "Fast Performance", 
          description: "Lightning-fast solutions that boost your productivity",
          boxBackground: "#ffffff",
          borderRadius: 12,
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          border: "none",
          titleColor: "#1f2937",
          titleFontSize: 20,
          titleFontFamily: "Arial",
          titleFontWeight: "600",
          descriptionColor: "#6b7280",
          descriptionFontSize: 14,
          descriptionFontFamily: "Arial"
        },
        { 
          title: "Secure & Reliable", 
          description: "Enterprise-grade security you can trust",
          boxBackground: "#ffffff",
          borderRadius: 12,
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          border: "none",
          titleColor: "#1f2937",
          titleFontSize: 20,
          titleFontFamily: "Arial",
          titleFontWeight: "600",
          descriptionColor: "#6b7280",
          descriptionFontSize: 14,
          descriptionFontFamily: "Arial"
        },
        { 
          title: "24/7 Support", 
          description: "Round-the-clock customer support",
          boxBackground: "#ffffff",
          borderRadius: 12,
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          border: "none",
          titleColor: "#1f2937",
          titleFontSize: 20,
          titleFontFamily: "Arial",
          titleFontWeight: "600",
          descriptionColor: "#6b7280",
          descriptionFontSize: 14,
          descriptionFontFamily: "Arial"
        }
      ]
    },
    footer: {
      background: "#1f2937",
      color: "#d1d5db",
      text: {
        content: "© 2025 YourBrand. All rights reserved.",
        fontSize: 14,
        fontFamily: "Arial"
      },
      links: ["Privacy Policy", "Terms of Service", "Contact Us", "About"]
    }
  });

  const handleChange = (key, field, value, subkey = null) => {
    if (subkey) {
      setElements((prev) => ({
        ...prev,
        [key]: { 
          ...prev[key], 
          [subkey]: { ...prev[key][subkey], [field]: value }
        },
      }));
    } else {
      setElements((prev) => ({
        ...prev,
        [key]: { ...prev[key], [field]: value },
      }));
    }
  };

  const handleImageChange = (e, elementKey, imageField = "backgroundImage") => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setElements((prev) => ({ 
        ...prev, 
        [elementKey]: { ...prev[elementKey], [imageField]: url } 
      }));
    }
  };

  const renderStyleControls = () => {
    if (!selectedElement) return <div style={{ padding: "20px", color: "#6b7280" }}>Select an element to edit</div>;

    const elementData = getElementData();
    if (!elementData) return null;

    return (
      <div style={{ padding: "20px" }}>
        <h3 style={{ color: "#fff", marginBottom: "20px", borderBottom: "1px solid #374151", paddingBottom: "10px" }}>
          Style Properties
        </h3>
        
        {elementData.text !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>TEXT</label>
            <input
              type="text"
              value={elementData.text}
              onChange={(e) => handleElementChange("text", e.target.value)}
              style={inputStyle}
            />
          </div>
        )}

        {elementData.fontSize !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>FONT SIZE</label>
            <input
              type="range"
              min="8"
              max="72"
              value={elementData.fontSize}
              onChange={(e) => handleElementChange("fontSize", parseInt(e.target.value))}
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <div style={{ color: "#9ca3af", fontSize: "11px" }}>{elementData.fontSize}px</div>
          </div>
        )}

        {elementData.fontFamily !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>FONT FAMILY</label>
            <select
              value={elementData.fontFamily}
              onChange={(e) => handleElementChange("fontFamily", e.target.value)}
              style={selectStyle}
            >
              <option>Arial</option>
              <option>Verdana</option>
              <option>Georgia</option>
              <option>Courier New</option>
              <option>Times New Roman</option>
              <option>Helvetica</option>
              <option>Inter</option>
            </select>
          </div>
        )}

        {elementData.color !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>TEXT COLOR</label>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input
                type="color"
                value={elementData.color}
                onChange={(e) => handleElementChange("color", e.target.value)}
                style={{ width: "40px", height: "30px", border: "none", borderRadius: "4px" }}
              />
              <input
                type="text"
                value={elementData.color}
                onChange={(e) => handleElementChange("color", e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
          </div>
        )}

        {elementData.background !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>BACKGROUND</label>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input
                type="color"
                value={elementData.background}
                onChange={(e) => handleElementChange("background", e.target.value)}
                style={{ width: "40px", height: "30px", border: "none", borderRadius: "4px" }}
              />
              <input
                type="text"
                value={elementData.background}
                onChange={(e) => handleElementChange("background", e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
          </div>
        )}

        {elementData.titleColor !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>TITLE COLOR</label>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input
                type="color"
                value={elementData.titleColor}
                onChange={(e) => handleElementChange("titleColor", e.target.value)}
                style={{ width: "40px", height: "30px", border: "none", borderRadius: "4px" }}
              />
              <input
                type="text"
                value={elementData.titleColor}
                onChange={(e) => handleElementChange("titleColor", e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
          </div>
        )}

        {elementData.titleFontSize !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>TITLE FONT SIZE</label>
            <input
              type="range"
              min="12"
              max="36"
              value={elementData.titleFontSize}
              onChange={(e) => handleElementChange("titleFontSize", parseInt(e.target.value))}
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <div style={{ color: "#9ca3af", fontSize: "11px" }}>{elementData.titleFontSize}px</div>
          </div>
        )}

        {elementData.titleFontFamily !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>TITLE FONT FAMILY</label>
            <select
              value={elementData.titleFontFamily}
              onChange={(e) => handleElementChange("titleFontFamily", e.target.value)}
              style={selectStyle}
            >
              <option>Arial</option>
              <option>Verdana</option>
              <option>Georgia</option>
              <option>Courier New</option>
              <option>Times New Roman</option>
              <option>Helvetica</option>
              <option>Inter</option>
            </select>
          </div>
        )}

        {elementData.titleFontWeight !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>TITLE FONT WEIGHT</label>
            <select
              value={elementData.titleFontWeight}
              onChange={(e) => handleElementChange("titleFontWeight", e.target.value)}
              style={selectStyle}
            >
              <option value="normal">Normal</option>
              <option value="600">Semi Bold</option>
              <option value="bold">Bold</option>
              <option value="300">Light</option>
            </select>
          </div>
        )}

        {elementData.descriptionColor !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>DESCRIPTION COLOR</label>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input
                type="color"
                value={elementData.descriptionColor}
                onChange={(e) => handleElementChange("descriptionColor", e.target.value)}
                style={{ width: "40px", height: "30px", border: "none", borderRadius: "4px" }}
              />
              <input
                type="text"
                value={elementData.descriptionColor}
                onChange={(e) => handleElementChange("descriptionColor", e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
          </div>
        )}

        {elementData.descriptionFontSize !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>DESCRIPTION FONT SIZE</label>
            <input
              type="range"
              min="10"
              max="24"
              value={elementData.descriptionFontSize}
              onChange={(e) => handleElementChange("descriptionFontSize", parseInt(e.target.value))}
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <div style={{ color: "#9ca3af", fontSize: "11px" }}>{elementData.descriptionFontSize}px</div>
          </div>
        )}

        {elementData.descriptionFontFamily !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>DESCRIPTION FONT FAMILY</label>
            <select
              value={elementData.descriptionFontFamily}
              onChange={(e) => handleElementChange("descriptionFontFamily", e.target.value)}
              style={selectStyle}
            >
              <option>Arial</option>
              <option>Verdana</option>
              <option>Georgia</option>
              <option>Courier New</option>
              <option>Times New Roman</option>
              <option>Helvetica</option>
              <option>Inter</option>
            </select>
          </div>
        )}

        {elementData.boxBackground !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>BOX BACKGROUND</label>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input
                type="color"
                value={elementData.boxBackground}
                onChange={(e) => handleElementChange("boxBackground", e.target.value)}
                style={{ width: "40px", height: "30px", border: "none", borderRadius: "4px" }}
              />
              <input
                type="text"
                value={elementData.boxBackground}
                onChange={(e) => handleElementChange("boxBackground", e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
          </div>
        )}

        {elementData.borderRadius !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>BORDER RADIUS</label>
            <input
              type="range"
              min="0"
              max="30"
              value={elementData.borderRadius}
              onChange={(e) => handleElementChange("borderRadius", parseInt(e.target.value))}
              style={{ width: "100%", marginBottom: "5px" }}
            />
            <div style={{ color: "#9ca3af", fontSize: "11px" }}>{elementData.borderRadius}px</div>
          </div>
        )}

        {elementData.boxShadow !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>BOX SHADOW</label>
            <select
              value={elementData.boxShadow}
              onChange={(e) => handleElementChange("boxShadow", e.target.value)}
              style={selectStyle}
            >
              <option value="none">None</option>
              <option value="0 2px 10px rgba(0,0,0,0.1)">Light</option>
              <option value="0 5px 20px rgba(0,0,0,0.1)">Medium</option>
              <option value="0 10px 40px rgba(0,0,0,0.2)">Strong</option>
              <option value="0 20px 60px rgba(0,0,0,0.3)">Heavy</option>
            </select>
          </div>
        )}

        {elementData.border !== undefined && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>BORDER</label>
            <select
              value={elementData.border}
              onChange={(e) => handleElementChange("border", e.target.value)}
              style={selectStyle}
            >
              <option value="none">None</option>
              <option value="1px solid #e5e7eb">Light Gray</option>
              <option value="2px solid #d1d5db">Medium Gray</option>
              <option value="1px solid #3b82f6">Blue</option>
              <option value="2px solid #10b981">Green</option>
              <option value="2px solid #f59e0b">Orange</option>
            </select>
          </div>
        )}

        {elementData.title !== undefined && selectedElement.includes("feature") && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>TITLE TEXT</label>
            <input
              type="text"
              value={elementData.title}
              onChange={(e) => handleElementChange("title", e.target.value)}
              style={inputStyle}
            />
          </div>
        )}

        {elementData.description !== undefined && selectedElement.includes("feature") && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>DESCRIPTION TEXT</label>
            <textarea
              value={elementData.description}
              onChange={(e) => handleElementChange("description", e.target.value)}
              style={{ ...inputStyle, height: "60px", resize: "vertical" }}
            />
          </div>
        )}

        {(selectedElement === "hero") && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>BACKGROUND IMAGE</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => handleImageChange(e, "hero")}
              style={inputStyle}
            />
          </div>
        )}

        {selectedElement === "menu" && (
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#d1d5db", fontSize: "12px", display: "block", marginBottom: "5px" }}>MENU ITEMS</label>
            {elements.menu.items.map((item, index) => (
              <input
                key={index}
                type="text"
                value={item}
                onChange={(e) => {
                  const newItems = [...elements.menu.items];
                  newItems[index] = e.target.value;
                  setElements(prev => ({ ...prev, menu: { ...prev.menu, items: newItems } }));
                }}
                style={{ ...inputStyle, marginBottom: "5px" }}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const getElementData = () => {
    switch (selectedElement) {
      case "logo": return elements.logo;
      case "menu": return elements.menu;
      case "header": return elements.header;
      case "hero": return elements.hero;
      case "heroTitle": return elements.hero.title;
      case "heroSubtitle": return elements.hero.subtitle;
      case "heroButton": return elements.hero.button;
      case "content": return elements.content;
      case "contentTitle": return elements.content.title;
      case "contentDescription": return elements.content.description;
      case "footer": return elements.footer;
      case "footerText": return elements.footer.text;
      case "feature0": return elements.content.features[0];
      case "feature1": return elements.content.features[1];
      case "feature2": return elements.content.features[2];
      default: return null;
    }
  };

  const handleElementChange = (field, value) => {
    switch (selectedElement) {
      case "logo":
        setElements(prev => ({ ...prev, logo: { ...prev.logo, [field]: value } }));
        break;
      case "menu":
        setElements(prev => ({ ...prev, menu: { ...prev.menu, [field]: value } }));
        break;
      case "header":
        setElements(prev => ({ ...prev, header: { ...prev.header, [field]: value } }));
        break;
      case "hero":
        setElements(prev => ({ ...prev, hero: { ...prev.hero, [field]: value } }));
        break;
      case "heroTitle":
        setElements(prev => ({ ...prev, hero: { ...prev.hero, title: { ...prev.hero.title, [field]: value } } }));
        break;
      case "heroSubtitle":
        setElements(prev => ({ ...prev, hero: { ...prev.hero, subtitle: { ...prev.hero.subtitle, [field]: value } } }));
        break;
      case "heroButton":
        setElements(prev => ({ ...prev, hero: { ...prev.hero, button: { ...prev.hero.button, [field]: value } } }));
        break;
      case "content":
        setElements(prev => ({ ...prev, content: { ...prev.content, [field]: value } }));
        break;
      case "contentTitle":
        setElements(prev => ({ ...prev, content: { ...prev.content, title: { ...prev.content.title, [field]: value } } }));
        break;
      case "contentDescription":
        setElements(prev => ({ ...prev, content: { ...prev.content, description: { ...prev.content.description, [field]: value } } }));
        break;
      case "footer":
        setElements(prev => ({ ...prev, footer: { ...prev.footer, [field]: value } }));
        break;
      case "footerText":
        setElements(prev => ({ ...prev, footer: { ...prev.footer, text: { ...prev.footer.text, [field]: value } } }));
        break;
      case "feature0":
      case "feature1":
      case "feature2":
        const featureIndex = parseInt(selectedElement.replace('feature', ''));
        setElements(prev => ({
          ...prev,
          content: {
            ...prev.content,
            features: prev.content.features.map((feature, index) =>
              index === featureIndex ? { ...feature, [field]: value } : feature
            )
          }
        }));
        break;
    }
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

  const selectStyle = {
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
        <div style={{ 
          width: "40px", 
          height: "40px", 
          background: activeTab === "layers" ? "#3b82f6" : "#374151",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          marginBottom: "10px",
          color: "#fff"
        }} onClick={() => setActiveTab("layers")}>
          📋
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
            <span style={{ color: "#d1d5db", fontSize: "14px", fontWeight: "600" }}>Website Editor</span>
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
            background: "#fff", 
            borderRadius: "8px", 
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            maxWidth: "1200px",
            width: "100%"
          }}>
            <Template1 elements={elements} setSelectedElement={setSelectedElement} />
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

        <div style={{ flex: 1, overflow: "auto" }}>
          {activeTab === "style" && renderStyleControls()}
          
          {activeTab === "layers" && (
            <div style={{ padding: "20px" }}>
              <h3 style={{ color: "#fff", marginBottom: "20px", borderBottom: "1px solid #374151", paddingBottom: "10px" }}>
                Layers
              </h3>
              {[
                { name: "Header", id: "header" },
                { name: "Hero Section", id: "hero" },
                { name: "Content Section", id: "content" },
                { name: "Feature Card 1", id: "feature0" },
                { name: "Feature Card 2", id: "feature1" },
                { name: "Feature Card 3", id: "feature2" },
                { name: "Footer", id: "footer" }
              ].map((layer, index) => (
                <div 
                  key={index}
                  style={{ 
                    padding: "10px", 
                    background: selectedElement === layer.id ? "#3b82f6" : "#374151", 
                    margin: "5px 0", 
                    borderRadius: "4px",
                    color: "#d1d5db",
                    cursor: "pointer",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                  onClick={() => setSelectedElement(layer.id)}
                >
                  <span>👁️</span>
                  <span>{layer.name}</span>
                  {selectedElement === layer.id && <span style={{ marginLeft: "auto", fontSize: "10px" }}>●</span>}
                </div>
              ))}
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