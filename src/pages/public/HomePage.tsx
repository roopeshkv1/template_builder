import React, { useState } from "react";

const HomePage = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  const [elements, setElements] = useState({
    title: {
      text: "Welcome to My Template",
      fontSize: 32,
      fontFamily: "Arial",
    },
    subtitle: {
      text: "This is a simple editable template.",
      fontSize: 18,
      fontFamily: "Verdana",
    },
    image: {
      url: "https://via.placeholder.com/1200x400?text=Banner",
    },
  });

  const handleTextChange = (key, field, value) => {
    setElements((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setElements((prev) => ({
        ...prev,
        image: { ...prev.image, url },
      }));
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f6f8" }}>
      {/* Preview */}
      <div style={{ flex: 1, padding: 24 }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={elements.image.url}
            alt="Banner"
            style={{ width: "100%", height: 300, objectFit: "cover" }}
            onClick={() => setSelectedElement("image")}
          />
          <div style={{ padding: 24, textAlign: "center" }}>
            <h1
              style={{
                fontSize: elements.title.fontSize,
                fontFamily: elements.title.fontFamily,
                cursor: "pointer",
              }}
              onClick={() => setSelectedElement("title")}
            >
              {elements.title.text}
            </h1>
            <p
              style={{
                fontSize: elements.subtitle.fontSize,
                fontFamily: elements.subtitle.fontFamily,
                color: "#555",
                cursor: "pointer",
              }}
              onClick={() => setSelectedElement("subtitle")}
            >
              {elements.subtitle.text}
            </p>
          </div>
        </div>
      </div>

      {/* Side Editor Panel */}
      {selectedElement && (
        <div
          style={{
            width: 300,
            background: "#fff",
            borderLeft: "1px solid #ddd",
            padding: 16,
            boxShadow: "-4px 0 12px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Edit {selectedElement}</h3>

          {selectedElement === "image" ? (
            <>
              <label>Change Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </>
          ) : (
            <>
              <label style={{ display: "block", marginBottom: 6 }}>Text</label>
              <input
                type="text"
                value={elements[selectedElement].text}
                onChange={(e) =>
                  handleTextChange(selectedElement, "text", e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "12px",
                }}
              />

              <label style={{ display: "block", marginBottom: 6 }}>
                Font Size
              </label>
              <input
                type="number"
                value={elements[selectedElement].fontSize}
                onChange={(e) =>
                  handleTextChange(
                    selectedElement,
                    "fontSize",
                    parseInt(e.target.value) || 12
                  )
                }
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "12px",
                }}
              />

              <label style={{ display: "block", marginBottom: 6 }}>
                Font Family
              </label>
              <select
                value={elements[selectedElement].fontFamily}
                onChange={(e) =>
                  handleTextChange(selectedElement, "fontFamily", e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "12px",
                }}
              >
                <option>Arial</option>
                <option>Verdana</option>
                <option>Georgia</option>
                <option>Courier New</option>
                <option>Times New Roman</option>
              </select>
            </>
          )}

          <button
            onClick={() => setSelectedElement(null)}
            style={{
              marginTop: 16,
              padding: "8px 12px",
              border: "none",
              background: "#3b82f6",
              color: "#fff",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
