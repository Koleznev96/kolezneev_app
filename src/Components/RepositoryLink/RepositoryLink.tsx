import React from "react";

const RepositoryLink = () => {
  return (
    <a
      href="https://github.com/example-repo"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "rgba(0, 123, 255, 0.8)",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "4px",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        border: "none",
        outline: "none",
        cursor: "pointer",
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        marginBottom: "24px",
      }}
    >
      Repository текущего проекта
    </a>
  );
};

export default RepositoryLink;
