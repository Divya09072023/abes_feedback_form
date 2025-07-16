import React from "react";

const IDCard = () => {
  const styles = {
    card: {
      width: "350px",
      backgroundColor: "#fde6c7",
      border: "3px solid red",
      padding: "15px",
      fontFamily: "'Segoe UI', sans-serif",
    },
    title: {
      fontSize: "26px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    image: {
      width: "100%",
      maxWidth: "300px",
      display: "block",
      marginBottom: "15px",
    },
    textRow: {
      fontSize: "18px",
      margin: "6px 0",
    },
    label: {
      fontWeight: "bold",
    },
    value: {
      marginLeft: "10px",
    },
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.title}>ABES Engineering College</h1>
      <img
        src="https://via.placeholder.com/300x250.png?text=Student+Photo"
        alt="student"
        style={styles.image}
      />
      <p style={styles.textRow}>
        <span style={styles.label}>Roll:</span>
        <span style={styles.value}>56565656</span>
      </p>
      <p style={styles.textRow}>
        <span style={styles.label}>Name:</span>
        <span style={styles.value}>Rahul Kumar</span>
      </p>
      <p style={styles.textRow}>
        <span style={styles.label}>Branch:</span>
        <span style={styles.value}>CSE AIML</span>
      </p>
      <p style={styles.textRow}>
        <span style={styles.label}>Section:</span>
        <span style={styles.value}>B</span>
      </p>
    </div>
  );
};

export default IDCard;
