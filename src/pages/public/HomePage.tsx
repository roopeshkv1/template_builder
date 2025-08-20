import React, { useState } from "react";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";

const HomePage = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const [elements, setElements] = useState({
    title: { text: "Welcome", fontSize: 36, fontFamily: "Arial", color: "#111827" },
    subtitle: { text: "Choose your template to start editing.", fontSize: 18, fontFamily: "Verdana", color: "#4b5563" },
    button: { text: "Click Me", fontSize: 16, fontFamily: "Arial", color: "#fff", background: "#3b82f6" },
    image: { url: "https://via.placeholder.com/1200x400?text=Banner" },
  });

  const handleChange = (key, field, value) => {
    setElements((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setElements((prev) => ({ ...prev, image: { ...prev.image, url } }));
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f6f8" }}>
      {/* Left Preview */}
      <div style={{ flex: 1, padding: 24 }}>
        <div style={{ marginBottom: 20 }}>
          <label>Select Template: </label>
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
          >
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
          </select>
        </div>

        {selectedTemplate === "template1" && (
          <Template1 elements={elements} setSelectedElement={setSelectedElement} />
        )}
        {selectedTemplate === "template2" && (
          <Template2 elements={elements} setSelectedElement={setSelectedElement} />
        )}
      </div>

      {/* Right Sidebar */}
      {selectedElement && (
        <div
          style={{
            width: 300,
            background: "#fff",
            borderLeft: "1px solid #ddd",
            padding: 20,
          }}
        >
          <h3>Edit {selectedElement}</h3>

          {selectedElement === "image" ? (
            <>
              <label>Change Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </>
          ) : (
            <>
              <label>Text</label>
              <input
                type="text"
                value={elements[selectedElement].text}
                onChange={(e) => handleChange(selectedElement, "text", e.target.value)}
                style={{ width: "100%", marginBottom: 12 }}
              />

              <label>Font Size</label>
              <input
                type="number"
                value={elements[selectedElement].fontSize}
                onChange={(e) =>
                  handleChange(selectedElement, "fontSize", parseInt(e.target.value) || 12)
                }
                style={{ width: "100%", marginBottom: 12 }}
              />

              <label>Font Family</label>
              <select
                value={elements[selectedElement].fontFamily}
                onChange={(e) => handleChange(selectedElement, "fontFamily", e.target.value)}
                style={{ width: "100%", marginBottom: 12 }}
              >
                <option>Arial</option>
                <option>Verdana</option>
                <option>Georgia</option>
                <option>Courier New</option>
                <option>Times New Roman</option>
              </select>

              <label>Text Color</label>
              <input
                type="color"
                value={elements[selectedElement].color}
                onChange={(e) => handleChange(selectedElement, "color", e.target.value)}
              />

              {selectedElement === "button" && (
                <>
                  <label>Background</label>
                  <input
                    type="color"
                    value={elements.button.background}
                    onChange={(e) => handleChange("button", "background", e.target.value)}
                  />
                </>
              )}
            </>
          )}

          <button onClick={() => setSelectedElement(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
