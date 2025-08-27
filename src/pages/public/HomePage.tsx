import React, { useState } from "react";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";

interface TemplateProps {
  elements: Record<string, any>;
  setSelectedElement: (element: string | null) => void;
}

interface TemplateType {
  id: string;
  name: string;
  description: string;
  preview: string;
  color: string;
  component: React.FC<TemplateProps>;
  elements: Record<string, any>;
}

interface ElementProperty {
  [key: string]: string | number | boolean | ElementProperty | undefined;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  background?: string;
  hoverBackground?: string;
  borderBottom?: string;
  hoverBorderBottom?: string;
  boxShadow?: string;
  hoverBoxShadow?: string;
  backgroundType?: 'solid' | 'gradient';
  hoverBackgroundType?: 'solid' | 'gradient';
}

interface ElementsType {
  [key: string]: ElementProperty;
}

// Template Selection Screen Component
const TemplateSelection = ({ onSelectTemplate }: { onSelectTemplate: (id: string) => void }) => {
  const templates: TemplateType[] = [
    {
      id: "template1",
      name: "Business Landing",
      description: "Professional business website with hero section, features, and footer",
      preview: "🏢",
      color: "#3b82f6",
      component: Template1,
      elements: Template1.elements
    },
    {
      id: "template2", 
      name: "Dashboard Layout",
      description: "Sidebar dashboard layout perfect for admin panels and analytics",
      preview: "📊",
      color: "#10b981",
      component: Template2,
      elements: {
        image: { url: "/api/placeholder/400/300" },
        title: { text: "Welcome to Our Platform", fontSize: 32, fontFamily: "Arial", color: "#333" },
        subtitle: { text: "Discover amazing features and boost your productivity", fontSize: 16, fontFamily: "Arial", color: "#666" },
        button: { text: "Get Started", fontSize: 14, fontFamily: "Arial", background: "#007bff", color: "#fff" }
      }
    },
    {
      id: "template3",
      name: "Portfolio Dark",
      description: "Dark theme portfolio with project showcase and modern design",
      preview: "🎨",
      color: "#8b5cf6",
      component: Template3,
      elements: {
        title: { text: "Creative Portfolio", fontSize: 48, fontFamily: "Arial", color: "#fff" },
        subtitle: { text: "Showcasing amazing work", fontSize: 18, fontFamily: "Arial", color: "#ccc" },
        projects: [
          { title: "Project Alpha", image: "/api/placeholder/300/200", titleColor: "#fff", titleFontSize: 24, titleFontFamily: "Arial" },
          { title: "Project Beta", image: "/api/placeholder/300/200", titleColor: "#fff", titleFontSize: 24, titleFontFamily: "Arial" },
          { title: "Project Gamma", image: "/api/placeholder/300/200", titleColor: "#fff", titleFontSize: 24, titleFontFamily: "Arial" }
        ]
      }
    },
    {
      id: "template4",
      name: "Fitness Gym",
      description: "Modern fitness gym website with hero video, services, and contact",
      preview: "🏋️",
      color: "#ff6b35",
      component: Template4,
      elements: Template4.elements
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
                (e.target as HTMLElement).style.transform = "translateY(-5px)";
                (e.target as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = "translateY(0)";
                (e.target as HTMLElement).style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
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
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [elements, setElements] = useState<ElementsType>({});
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const templates: TemplateType[] = [
    {
      id: "template1",
      name: "Business Landing",
      description: "Professional business website with hero section, features, and footer",
      preview: "🏢",
      color: "#3b82f6",
      component: Template1,
      elements: Template1.elements
    },
    {
      id: "template2", 
      name: "Dashboard Layout",
      description: "Sidebar dashboard layout perfect for admin panels and analytics",
      preview: "📊",
      color: "#10b981",
      component: Template2,
      elements: {
        image: { url: "/api/placeholder/400/300" },
        title: { text: "Welcome to Our Platform", fontSize: 32, fontFamily: "Arial", color: "#333" },
        subtitle: { text: "Discover amazing features and boost your productivity", fontSize: 16, fontFamily: "Arial", color: "#666" },
        button: { text: "Get Started", fontSize: 14, fontFamily: "Arial", background: "#007bff", color: "#fff" }
      }
    },
    {
      id: "template3",
      name: "Portfolio Dark",
      description: "Dark theme portfolio with project showcase and modern design",
      preview: "🎨",
      color: "#8b5cf6",
      component: Template3,
      elements: {
        title: { text: "Creative Portfolio", fontSize: 48, fontFamily: "Arial", color: "#fff" },
        subtitle: { text: "Showcasing amazing work", fontSize: 18, fontFamily: "Arial", color: "#ccc" },
        projects: [
          { title: "Project Alpha", image: "/api/placeholder/300/200", titleColor: "#fff", titleFontSize: 24, titleFontFamily: "Arial" },
          { title: "Project Beta", image: "/api/placeholder/300/200", titleColor: "#fff", titleFontSize: 24, titleFontFamily: "Arial" },
          { title: "Project Gamma", image: "/api/placeholder/300/200", titleColor: "#fff", titleFontSize: 24, titleFontFamily: "Arial" }
        ]
      }
    },
    {
      id: "template4",
      name: "Fitness Gym",
      description: "Modern fitness gym website with hero video, services, and contact",
      preview: "🏋️",
      color: "#ff6b35",
      component: Template4,
      elements: Template4.elements
    }
  ];

  const handleTemplateSelect = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(templateId);
      setElements(template.elements);
      setSelectedElement(null);
    }
  };

  const getElementData = (elementPath: string): ElementProperty | null => {
    const pathArray = elementPath.split('.');
    let current: any = elements;
    for (const path of pathArray) {
      if (current && current[path]) {
        current = current[path];
      } else {
        return null;
      }
    }
    return current;
  };

  const updateElementProperty = (propertyPath: string, value: string | number) => {
    setElements(prev => {
      const newElements = { ...prev };
      const path = propertyPath.split('.');
      let current: any = newElements;
      
      // Navigate to the parent of the property
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) {
          current[path[i]] = {};
        }
        current = current[path[i]];
      }
      
      // Handle special cases
      if (propertyPath.endsWith('fontSize')) {
        value = typeof value === 'string' ? parseInt(value as string, 10) : value;
        if (isNaN(value as number)) value = 16; // Default size if invalid
      }
      
      // Update the property
      current[path[path.length - 1]] = value;
      return newElements;
    });
  };

  const generateFullHTML = () => {
    const template = templates.find(t => t.id === selectedTemplate);
    if (!template) return '';

    // Get the template name for title
    const templateName = template.name;
    
    // Generate CSS based on current elements
    let css = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: ${elements.logo?.fontFamily || 'Inter, sans-serif'};
        line-height: 1.6;
        color: #333;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
    `;

    // Generate HTML based on selected template
    let html = '';
    
    if (selectedTemplate === 'template4') {
      html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${templateName}</title>
          <style>
            ${css}
            
            /* Navigation Styles */
            .nav-bar {
              background: ${elements.navigation?.background || 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,20,0.9))'};
              padding: 20px 40px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1000;
              backdrop-filter: blur(15px);
            }
            
            .logo {
              font-size: ${elements.logo?.fontSize || '24px'};
              font-family: ${elements.logo?.fontFamily || 'Inter, sans-serif'};
              color: ${elements.logo?.color || '#fff'};
              font-weight: 900;
              letter-spacing: 2px;
            }
            
            .nav-links {
              display: flex;
              list-style: none;
              gap: 30px;
            }
            
            .nav-links a {
              text-decoration: none;
              font-size: ${elements.menu?.fontSize || '16px'};
              font-family: ${elements.menu?.fontFamily || 'Inter, sans-serif'};
              color: ${elements.menu?.color || '#fff'};
              font-weight: 500;
              transition: color 0.3s ease;
            }
            
            .nav-links a:hover {
              color: #ff6b35;
            }
            
            /* Hero Section */
            .hero-section {
              position: relative;
              height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              background: linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 100%), 
                          url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920');
              background-size: cover;
              background-position: center;
              color: white;
            }
            
            .location-badge {
              position: absolute;
              top: 25%;
              left: 50%;
              transform: translateX(-50%);
              background: linear-gradient(135deg, #ff6b35, #ff8c42);
              padding: 12px 24px;
              border-radius: 30px;
              font-size: 14px;
              font-weight: 700;
            }
            
            .hero-title {
              font-size: ${elements.hero?.titleFontSize || '72px'};
              font-family: ${elements.hero?.titleFontFamily || 'Inter, sans-serif'};
              color: ${elements.hero?.titleColor || '#fff'};
              font-weight: 900;
              margin: 20px 0;
              letter-spacing: 8px;
              text-transform: uppercase;
            }
            
            .hero-subtitle {
              font-size: ${elements.hero?.subtitleFontSize || '18px'};
              font-family: ${elements.hero?.subtitleFontFamily || 'Inter, sans-serif'};
              color: ${elements.hero?.subtitleColor || '#ccc'};
              max-width: 750px;
              line-height: 1.9;
              margin: 40px 0 60px;
            }
            
            .hero-buttons {
              display: flex;
              gap: 30px;
            }
            
            .primary-btn {
              background: linear-gradient(135deg, ${elements.hero?.primaryButton?.background || '#ff6b35'}, #ff8c42);
              color: ${elements.hero?.primaryButton?.color || '#fff'};
              border: none;
              padding: 20px 40px;
              font-size: 16px;
              font-weight: 800;
              border-radius: 12px;
              cursor: pointer;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            
            .secondary-btn {
              background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
              border: 2px solid ${elements.hero?.secondaryButton?.color || '#fff'};
              color: ${elements.hero?.secondaryButton?.color || '#fff'};
              padding: 18px 38px;
              font-size: 16px;
              font-weight: 700;
              border-radius: 12px;
              cursor: pointer;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            
            /* Sections */
            section {
              padding: 100px 40px;
            }
            
            .about-section {
              background: ${elements.about?.background || '#111'};
              color: white;
              text-align: center;
            }
            
            .services-section {
              background: ${elements.services?.background || '#000'};
              color: white;
              text-align: center;
            }
            
            .contact-section {
              background: ${elements.contact?.background || '#111'};
              color: white;
              text-align: center;
            }
            
            .section-title {
              font-size: 42px;
              margin-bottom: 20px;
              color: #fff;
            }
            
            .section-subtitle {
              font-size: 18px;
              color: #ccc;
              margin-bottom: 60px;
              max-width: 600px;
              margin-left: auto;
              margin-right: auto;
            }
            
            .features-grid, .services-grid, .contact-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 40px;
              margin-top: 40px;
            }
            
            .feature-card, .service-card, .contact-card {
              background: rgba(255,255,255,0.05);
              padding: 40px 30px;
              border-radius: 10px;
              text-align: center;
            }
            
            .service-card {
              background: linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,140,66,0.1));
              border: 1px solid rgba(255,107,53,0.2);
            }
            
            /* Footer */
            .footer {
              background: ${elements.footer?.background || '#000'};
              padding: 60px 40px 30px;
              color: white;
              text-align: center;
            }
            
            .footer-logo {
              font-size: ${elements.footer?.logo?.fontSize || '24px'};
              font-family: ${elements.footer?.logo?.fontFamily || 'Inter, sans-serif'};
              color: ${elements.footer?.logo?.color || '#fff'};
              font-weight: 900;
              margin-bottom: 30px;
            }
            
            .footer-links {
              display: flex;
              justify-content: center;
              gap: 30px;
              margin-bottom: 30px;
              flex-wrap: wrap;
            }
            
            .footer-links a {
              color: ${elements.footer?.linkColor || '#ccc'};
              text-decoration: none;
              font-size: 14px;
            }
            
            .footer-copyright {
              color: ${elements.footer?.copyright?.color || '#666'};
              font-size: ${elements.footer?.copyright?.fontSize || '14px'};
              margin: 0;
            }
          </style>
        </head>
        <body>
          <!-- Navigation -->
          <nav class="nav-bar">
            <div class="logo">${elements.logo?.text || 'CLUB ACTIVE'}</div>
            <ul class="nav-links">
              ${elements.menu?.items?.map((item: string) => `<li><a href="#">${item}</a></li>`).join('') || ''}
            </ul>
          </nav>

          <!-- Hero Section -->
          <section class="hero-section">
            <div class="location-badge">📍 ${elements.location?.text || 'Located in Varkakkala, Cochin, Kerala'}</div>
            <h1 class="hero-title">${elements.hero?.title || 'CLUB ACTIVE'}</h1>
            <p class="hero-subtitle">${elements.hero?.subtitle || 'Transform your body and mind at Kerala\'s premier fitness destination.'}</p>
            <div class="hero-buttons">
              <button class="primary-btn">${elements.hero?.primaryButton?.text || 'JOIN NOW'}</button>
              <button class="secondary-btn">${elements.hero?.secondaryButton?.text || 'LEARN MORE'}</button>
            </div>
          </section>

          <!-- About Section -->
          <section class="about-section">
            <div class="container">
              <h2 class="section-title">${elements.about?.title || 'Why Choose Club Active?'}</h2>
              <p class="section-subtitle">${elements.about?.subtitle || 'Experience Kerala\'s premier fitness destination.'}</p>
              
              <div class="features-grid">
                ${elements.about?.features?.map((feature: any) => `
                  <div class="feature-card">
                    <div style="font-size: 48px; margin-bottom: 20px;">${feature.icon}</div>
                    <h3 style="color: #fff; margin-bottom: 15px;">${feature.title}</h3>
                    <p style="color: #ccc; line-height: 1.6;">${feature.description}</p>
                  </div>
                `).join('') || ''}
              </div>
            </div>
          </section>

          <!-- Services Section -->
          <section class="services-section">
            <div class="container">
              <h2 class="section-title">${elements.services?.title || 'Our Specialties'}</h2>
              <p class="section-subtitle">${elements.services?.subtitle || 'Comprehensive fitness solutions.'}</p>
              
              <div class="services-grid">
                ${elements.services?.items?.map((service: any) => `
                  <div class="service-card">
                    <div style="font-size: 64px; margin-bottom: 25px;">${service.icon}</div>
                    <h3 style="color: #fff; margin-bottom: 20px;">${service.title}</h3>
                    <p style="color: #ccc; line-height: 1.7;">${service.description}</p>
                  </div>
                `).join('') || ''}
              </div>
            </div>
          </section>

          <!-- Contact Section -->
          <section class="contact-section">
            <div class="container">
              <h2 class="section-title">${elements.contact?.title || 'Get In Touch'}</h2>
              
              <div class="contact-grid">
                <div class="contact-card">
                  <div style="font-size: 32px; margin-bottom: 20px;">📞</div>
                  <h3 style="color: #ff6b35; margin-bottom: 10px;">Phone</h3>
                  <p style="color: #ccc;">${elements.contact?.phone?.text || '+91 9876543210'}</p>
                </div>
                
                <div class="contact-card">
                  <div style="font-size: 32px; margin-bottom: 20px;">✉️</div>
                  <h3 style="color: #ff6b35; margin-bottom: 10px;">Email</h3>
                  <p style="color: #ccc;">${elements.contact?.email?.text || 'info@clubactive.com'}</p>
                </div>
                
                <div class="contact-card">
                  <div style="font-size: 32px; margin-bottom: 20px;">📍</div>
                  <h3 style="color: #ff6b35; margin-bottom: 10px;">Address</h3>
                  <p style="color: #ccc;">${elements.contact?.address?.text || 'Varkakkala, Cochin, Kerala'}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Footer -->
          <footer class="footer">
            <div class="container">
              <div class="footer-logo">${elements.footer?.logo?.text || 'CLUB ACTIVE'}</div>
              
              <div class="footer-links">
                ${elements.footer?.links?.map((link: string) => `<a href="#">${link}</a>`).join('') || ''}
              </div>
              
              <p class="footer-copyright">${elements.footer?.copyright?.text || '© 2024 Club Active. All rights reserved.'}</p>
            </div>
          </footer>
        </body>
        </html>
      `;
    }
    
    return html;
  };

  const renderElementProperties = () => {
    if (!selectedElement || !elements) {
      return <div style={{ color: "#9ca3af", fontSize: "13px" }}>Select an element to edit its properties.</div>;
    }
        
    // Common web-safe fonts
    const fontFamilies = [
      'Arial, sans-serif',
      'Verdana, sans-serif',
      'Helvetica, sans-serif',
      'Tahoma, sans-serif',
      'Trebuchet MS, sans-serif',
      'Times New Roman, serif',
      'Georgia, serif',
      'Garamond, serif',
      'Courier New, monospace',
      'Brush Script MT, cursive',
      'Inter, sans-serif',
      'Poppins, sans-serif',
      'Roboto, sans-serif',
      'Open Sans, sans-serif',
      'Montserrat, sans-serif'
    ];

    const renderPropertyInput = (key: string, value: any, parentKey = '') => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      const propertyPath = selectedElement + '.' + fullKey;
      const label = key.replace(/([A-Z])/g, ' $1').trim();
      const lowerKey = key.toLowerCase();
      const isFontSize = lowerKey.includes('fontsize');
      const isFontFamily = lowerKey.includes('fontfamily');
      const isColor = lowerKey.includes('color') && !lowerKey.includes('font');
      const isBackground = lowerKey === 'background' || lowerKey === 'hoverbackground';
      const isBackgroundType = lowerKey === 'backgroundtype' || lowerKey === 'hoverbackgroundtype';

      return (
        <div key={key} style={{ marginBottom: '15px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px', 
            fontSize: '12px', 
            color: '#9ca3af',
            textTransform: 'capitalize'
          }}>
            {label}
          </label>
          
          {isBackgroundType ? (
            <select
              value={value}
              onChange={(e) => updateElementProperty(propertyPath, e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                background: '#374151',
                border: '1px solid #4b5563',
                borderRadius: '4px',
                color: '#d1d5db',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              <option value="solid">Solid Color</option>
              <option value="gradient">Gradient</option>
            </select>
          ) : isBackground ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {elements[selectedElement]?.backgroundType === 'gradient' ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => updateElementProperty(propertyPath, e.target.value)}
                  placeholder="linear-gradient(135deg, #000000, #1a1a1a)"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '4px',
                    color: '#d1d5db',
                    fontSize: '13px',
                    fontFamily: 'monospace'
                  }}
                />
              ) : (
                <input
                  type="color"
                  value={value}
                  onChange={(e) => updateElementProperty(propertyPath, e.target.value)}
                  style={{
                    width: '100%',
                    height: '36px',
                    padding: 0,
                    border: '1px solid #4b5563',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                />
              )}
            </div>
          ) : isFontSize ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="number"
                value={typeof value === 'number' ? value : parseInt(value, 10) || ''}
                onChange={(e) => updateElementProperty(propertyPath, e.target.value)}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  background: '#374151',
                  border: '1px solid #4b5563',
                  borderRadius: '4px 0 0 4px',
                  color: '#d1d5db',
                  fontSize: '13px'
                }}
              />
              <div style={{
                background: '#4b5563',
                color: '#d1d5db',
                padding: '0 10px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #4b5563',
                borderLeft: 'none',
                borderRadius: '0 4px 4px 0',
                fontSize: '12px'
              }}>
                px
              </div>
            </div>
          ) : isFontFamily ? (
            <select
              value={value}
              onChange={(e) => updateElementProperty(propertyPath, e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                background: '#374151',
                border: '1px solid #4b5563',
                borderRadius: '4px',
                color: '#d1d5db',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              {fontFamilies.map((font) => (
                <option key={font} value={font} style={{ fontFamily: font.split(',')[0] }}>
                  {font.split(',')[0]}
                </option>
              ))}
            </select>
          ) : isColor ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="color"
                value={value}
                onChange={(e) => updateElementProperty(propertyPath, e.target.value)}
                style={{
                  width: '40px',
                  height: '36px',
                  padding: 0,
                  border: '1px solid #4b5563',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              />
              <input
                type="text"
                value={value}
                onChange={(e) => updateElementProperty(propertyPath, e.target.value)}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  background: '#374151',
                  border: '1px solid #4b5563',
                  borderRadius: '4px',
                  color: '#d1d5db',
                  fontSize: '13px',
                  fontFamily: 'monospace'
                }}
              />
            </div>
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => updateElementProperty(propertyPath, e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                background: '#374151',
                border: '1px solid #4b5563',
                borderRadius: '4px',
                color: '#d1d5db',
                fontSize: '13px'
              }}
            />
          )}
        </div>
      );
    };

    const elementData = getElementData(selectedElement);
    if (!elementData) return <div style={{ color: "#9ca3af", fontSize: "13px" }}>No properties available for this element.</div>;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px',
        padding: '15px',
        maxHeight: 'calc(100vh - 60px)',
        overflowY: 'auto'
      }}>
        <div style={{ 
          paddingBottom: '15px',
          marginBottom: '15px',
          borderBottom: '1px solid #374151'
        }}>
          <h3 style={{ 
            color: '#fff', 
            fontSize: '14px',
            margin: '0 0 15px 0',
            textTransform: 'capitalize'
          }}>
            {selectedElement.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          {elementData.text && renderPropertyInput('text', elementData.text)}
        </div>
        
        {Object.entries(elementData).map(([key, value]) => {
          if (key === 'navigation') {
            // Special handling for navigation properties
            return (
              <div key={key} style={{ marginBottom: '20px' }}>
                <h4 style={{ 
                  color: '#fff', 
                  fontSize: '13px',
                  margin: '0 0 10px 0',
                  paddingBottom: '5px',
                  borderBottom: '1px solid #374151'
                }}>
                  Navigation Settings
                </h4>
                <div style={{ paddingLeft: '10px' }}>
                  {Object.entries(value as Record<string, any>).map(([subKey, subValue]) => {
                    if (typeof subValue === 'string' || typeof subValue === 'number') {
                      return renderPropertyInput(subKey, subValue, key);
                    }
                    return null;
                  })}
                </div>
              </div>
            );
          } else if (key !== 'text' && (typeof value === 'string' || typeof value === 'number')) {
            return renderPropertyInput(key, value);
          }
          return null;
        })}
      </div>
    );
  };
        
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "template1":
        return <Template1 elements={elements} setSelectedElement={setSelectedElement} />;
      case "template2":
        return <Template2 elements={elements} setSelectedElement={setSelectedElement} />;
      case "template3":
        return <Template3 elements={elements} setSelectedElement={setSelectedElement} />;
      case "template4":
        return <Template4 elements={elements} setSelectedElement={setSelectedElement} />;
      default:
        return null;
    }
  };

  // If no template is selected, show template selection
  if (!selectedTemplate) {
    return <TemplateSelection onSelectTemplate={handleTemplateSelect} />;
  }

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
          background: "#374151",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          marginBottom: "10px",
          color: "#fff"
        }}>
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
               selectedTemplate === "template2" ? "Dashboard Layout" : 
               selectedTemplate === "template3" ? "Portfolio Dark" : "Fitness Gym"} Editor
            </span>
            <div style={{ display: "flex", gap: "5px" }}>
              <button 
                style={{ 
                  padding: "5px 10px", 
                  background: "#4b5563", 
                  border: "none", 
                  borderRadius: "4px", 
                  color: "#d1d5db",
                  fontSize: "12px",
                  cursor: "pointer"
                }}
                onClick={() => setShowPreview(true)}
              >
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
          Properties
        </div>

        <div style={{ flex: 1, overflow: "hidden" }}>
          {selectedElement ? renderElementProperties() : (
            <div style={{ 
              padding: "20px", 
              color: "#6b7280", 
              textAlign: "center",
              fontSize: "14px"
            }}>
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

      {/* HTML Preview Popup */}
      {showPreview && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px"
        }}>
          <div style={{
            background: "#1f2937",
            borderRadius: "8px",
            width: "90%",
            height: "90%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #374151"
          }}>
            {/* Popup Header */}
            <div style={{
              padding: "20px",
              borderBottom: "1px solid #374151",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <h2 style={{ color: "#fff", margin: 0, fontSize: "18px" }}>HTML Preview</h2>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => {
                    const htmlContent = generateFullHTML();
                    navigator.clipboard.writeText(htmlContent);
                    alert("HTML copied to clipboard!");
                  }}
                  style={{
                    background: "#3b82f6",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    cursor: "pointer"
                  }}
                >
                  Copy HTML
                </button>
                <button
                  onClick={() => {
                    const htmlContent = generateFullHTML();
                    const blob = new Blob([htmlContent], { type: 'text/html' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${selectedTemplate}-template.html`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                  }}
                  style={{
                    background: "#10b981",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    cursor: "pointer"
                  }}
                >
                  Download HTML
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    cursor: "pointer"
                  }}
                >
                  ✕ Close
                </button>
              </div>
            </div>

            {/* HTML Content */}
            <div style={{
              flex: 1,
              overflow: "auto",
              padding: "0"
            }}>
              <pre style={{
                background: "#111827",
                color: "#e5e7eb",
                padding: "20px",
                margin: 0,
                fontSize: "12px",
                fontFamily: "Monaco, Menlo, 'Ubuntu Mono', monospace",
                lineHeight: "1.5",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
              }}>
                <code>{generateFullHTML()}</code>
              </pre>
            </div>

            {/* Preview iframe */}
            <div style={{
              height: "50%",
              borderTop: "1px solid #374151"
            }}>
              <div style={{
                background: "#374151",
                padding: "10px 20px",
                fontSize: "12px",
                color: "#9ca3af",
                fontWeight: "600"
              }}>
                Live Preview:
              </div>
              <iframe
                srcDoc={generateFullHTML()}
                style={{
                  width: "100%",
                  height: "calc(100% - 41px)",
                  border: "none",
                  background: "#fff"
                }}
                title="Template Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;