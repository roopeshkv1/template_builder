import React from "react";

const Template1 = ({ elements, setSelectedElement }) => {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={elements.image.url}
        alt="Banner"
        style={{ width: "100%", height: 320, objectFit: "cover", cursor: "pointer" }}
        onClick={() => setSelectedElement("image")}
      />
      <div style={{ padding: 40, textAlign: "center" }}>
        <h1
          style={{
            fontSize: elements.title.fontSize,
            fontFamily: elements.title.fontFamily,
            color: elements.title.color,
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
            color: elements.subtitle.color,
            cursor: "pointer",
          }}
          onClick={() => setSelectedElement("subtitle")}
        >
          {elements.subtitle.text}
        </p>
        <button
          style={{
            padding: "12px 24px",
            borderRadius: 8,
            fontSize: elements.button.fontSize,
            fontFamily: elements.button.fontFamily,
            background: elements.button.background,
            color: elements.button.color,
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setSelectedElement("button")}
        >
          {elements.button.text}
        </button>
      </div>
    </div>
  );
};

export default Template1;
