import React from "react";

const Template3 = ({ elements, setSelectedElement }) => {
    return (
      <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
        {/* Modern Dark Portfolio Template */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
          {/* Header */}
          <header style={{ textAlign: "center", marginBottom: "80px" }}>
            <h1 style={{ 
              fontSize: elements.portfolio?.titleFontSize || 72, 
              fontWeight: "300", 
              marginBottom: "20px",
              background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer",
              fontFamily: elements.portfolio?.titleFontFamily || "Arial"
            }}
            onClick={() => setSelectedElement("portfolioTitle")}
            >
              {elements.portfolio?.title || "CREATIVE"}
            </h1>
            <p style={{ 
              fontSize: elements.portfolio?.subtitleFontSize || 24, 
              color: elements.portfolio?.subtitleColor || "#666",
              cursor: "pointer",
              fontFamily: elements.portfolio?.subtitleFontFamily || "Arial"
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
                  fontSize: project.titleFontSize || 24, 
                  fontWeight: "600",
                  color: project.titleColor || "#fff",
                  fontFamily: project.titleFontFamily || "Arial"
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

export default Template3;