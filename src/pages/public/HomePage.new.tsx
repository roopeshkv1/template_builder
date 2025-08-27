import React, { useState } from "react";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

// Type definitions
interface TemplateProps {
  elements: Record<string, any>;
  setSelectedElement: (element: string | null) => void;
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

interface TemplateType {
  id: string;
  name: string;
  description: string;
  preview: string;
  color: string;
  component: React.FC<TemplateProps>;
  elements: Record<string, any>;
}

// Template Selection Component
const TemplateSelection = ({ onSelectTemplate }: { onSelectTemplate: (id: string) => void }) => {
  const templates: Omit<TemplateType, 'component' | 'elements'>[] = [
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
      description: "Dark theme portfolio with project showcase and modern design",
      preview: "🎨",
      color: "#8b5cf6"
    },
    {
      id: "template4",
      name: "Fitness Gym",
      description: "Modern fitness gym website with hero video, services, and contact",
      preview: "🏋️",
      color: "#ff6b35"
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

// Main HomePage Component
const HomePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [elements, setElements] = useState<Record<string, any>>({});

  // Template configurations
  const templates: Record<string, TemplateType> = {
    template1: {
      id: "template1",
      name: "Business Landing",
      description: "Professional business website with hero section, features, and footer",
      preview: "🏢",
      color: "#3b82f6",
      component: Template1,
      elements: Template1.elements
    },
    template2: {
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
    template3: {
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
    template4: {
      id: "template4",
      name: "Fitness Gym",
      description: "Modern fitness gym website with hero video, services, and contact",
      preview: "🏋️",
      color: "#ff6b35",
      component: Template4,
      elements: Template4.elements
    }
  };

  // Handle template selection
  const handleTemplateSelect = (templateId: string) => {
    const template = templates[templateId];
    if (template) {
      setSelectedTemplate(templateId);
      setElements(template.elements);
      setSelectedElement(null);
    }
  };

  // Update element property
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

  // Render properties panel for the selected element
  const renderElementProperties = () => {
    if (!selectedElement || !elements) {
      return <div style={{ color: "#9ca3af", fontSize: "13px" }}>Select an element to edit its properties.</div>;
    }

    // Get element data by path (e.g., 'navigation.background')
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

    const elementData = getElementData(selectedElement);
    if (!elementData) {
      return <div style={{ color: "#9ca3af", fontSize: "13px" }}>No properties available for this element.</div>;
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

    // Render a single property input field
    const renderPropertyInput = (key: string, value: any, parentKey = '') => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      const label = key.replace(/([A-Z])/g, ' $1').trim();
      const lowerKey = key.toLowerCase();
      const isFontSize = lowerKey.includes('fontsize');
      const isFontFamily = lowerKey.includes('fontfamily');
      const isColor = lowerKey.includes('color') && !lowerKey.includes('font');
      const isBackground = lowerKey === 'background' || lowerKey === 'hoverbackground';
      const isBackgroundType = lowerKey === 'backgroundtype' || lowerKey === 'hoverbackgroundtype';

      return (
        <div key={fullKey} style={{ marginBottom: '15px' }}>
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
              onChange={(e) => updateElementProperty(fullKey, e.target.value)}
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
                  onChange={(e) => updateElementProperty(fullKey, e.target.value)}
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
                  onChange={(e) => updateElementProperty(fullKey, e.target.value)}
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
                onChange={(e) => updateElementProperty(fullKey, e.target.value)}
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
              onChange={(e) => updateElementProperty(fullKey, e.target.value)}
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
                onChange={(e) => updateElementProperty(fullKey, e.target.value)}
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
                onChange={(e) => updateElementProperty(fullKey, e.target.value)}
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
              onChange={(e) => updateElementProperty(fullKey, e.target.value)}
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
            {selectedElement.split('.').map(part => 
              part.charAt(0).toUpperCase() + part.slice(1)
            ).join(' ')}
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

  // Render the selected template
  const renderTemplate = () => {
    if (!currentUser) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: '#111827',
          color: '#fff',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h2>Please sign in to access templates</h2>
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <button 
              onClick={() => navigate("/login")} 
              style={{
                padding: '10px 20px',
                background: '#3b82f6',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#2563eb')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#3b82f6')}
            >
              Log In
            </button>
            <button 
              onClick={() => navigate("/signup")} 
              style={{
                padding: '10px 20px',
                background: '#10b981',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#059669')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#10b981')}
            >
              Sign Up
            </button>
          </div>
        </div>
      );
    }

    if (!selectedTemplate) {
      return <TemplateSelection onSelectTemplate={handleTemplateSelect} />;
    }

    const template = templates[selectedTemplate];
    if (!template) return null;
    
    const TemplateComponent = template.component;
    
    return (
      <div style={{ display: 'flex', minHeight: '100vh', background: '#111827' }}>
        {/* Left Toolbar */}
        <div style={{ 
          width: '60px', 
          background: '#1f2937', 
          borderRight: '1px solid #374151', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: '20px 0' 
        }}>
          <button 
            onClick={() => setSelectedTemplate(null)} 
            style={{ 
              background: '#ef4444', 
              border: 'none', 
              borderRadius: '8px', 
              width: '40px', 
              height: '40px', 
              color: '#fff', 
              cursor: 'pointer', 
              marginBottom: '20px', 
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Back to Templates"
          >
            ←
          </button>
          <div style={{ color: '#9ca3af', fontSize: '24px', marginBottom: '30px' }}>⚡</div>
          <div 
            style={{ 
              width: '40px', 
              height: '40px', 
              background: '#374151', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer', 
              marginBottom: '10px', 
              color: '#fff' 
            }}
            onClick={() => console.log('Style tab clicked')}
          >
            🎨
          </div>
        </div>

        {/* Main Preview Area */}
        <div style={{ flex: 1, background: '#1f2937', overflow: 'auto' }}>
          <div style={{ 
            background: '#374151', 
            padding: '15px 20px', 
            borderBottom: '1px solid #4b5563', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <span style={{ color: '#d1d5db', fontSize: '14px', fontWeight: '600' }}>
                {template.name} Editor
              </span>
              <div style={{ display: 'flex', gap: '5px' }}>
                <button style={{ 
                  padding: '5px 10px', 
                  background: '#4b5563', 
                  border: 'none', 
                  borderRadius: '4px', 
                  color: '#d1d5db', 
                  fontSize: '12px', 
                  cursor: 'pointer' 
                }}>
                  Preview
                </button>
                <button style={{ 
                  padding: '5px 10px', 
                  background: '#3b82f6', 
                  border: 'none', 
                  borderRadius: '4px', 
                  color: '#fff', 
                  fontSize: '12px', 
                  cursor: 'pointer' 
                }}>
                  Export
                </button>
              </div>
            </div>
          </div>

          <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              background: template.id === 'template3' ? '#000' : '#fff', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)', 
              maxWidth: '1200px', 
              width: '100%' 
            }}>
              <TemplateComponent 
                elements={elements} 
                setSelectedElement={setSelectedElement} 
              />
            </div>
          </div>
        </div>

        {/* Right Properties Panel */}
        <div style={{ 
          width: '320px', 
          background: '#1f2937', 
          borderLeft: '1px solid #374151', 
          display: 'flex', 
          flexDirection: 'column' 
        }}>
          <div style={{ 
            background: '#374151', 
            padding: '15px 20px', 
            borderBottom: '1px solid #4b5563' 
          }}>
            <h3 style={{ 
              color: '#fff', 
              margin: '0 0 15px 0',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {selectedElement ? 
                selectedElement.split('.').map(part => 
                  part.charAt(0).toUpperCase() + part.slice(1)
                ).join(' ') : 
                'Properties'}
            </h3>
            {renderElementProperties()}
          </div>

          {selectedElement && (
            <div style={{ 
              background: '#374151', 
              padding: '15px 20px', 
              borderTop: '1px solid #4b5563',
              marginTop: 'auto'
            }}>
              <button 
                onClick={() => setSelectedElement(null)}
                style={{ 
                  width: '100%',
                  padding: '10px', 
                  background: '#ef4444', 
                  border: 'none', 
                  borderRadius: '4px', 
                  color: '#fff', 
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '500',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#dc2626')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#ef4444')}
              >
                Deselect Element
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return renderTemplate();
};

export default HomePage;
