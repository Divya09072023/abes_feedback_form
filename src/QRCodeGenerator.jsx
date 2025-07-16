import React from "react";
import { QRCode } from "qrcode.react";

export default function QRCodeGenerator() {
  const feedbackURL = "http://localhost:5173/"; // Replace with your actual deployed form URL

  return (
    <div style={styles.container}>
      <h2>Scan to Give Feedback</h2>
      <QRCode value={feedbackURL} size={220} />
      <p style={styles.text}>{feedbackURL}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial, sans-serif",
  },
  text: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
};
