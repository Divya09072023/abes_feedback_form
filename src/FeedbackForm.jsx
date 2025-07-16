import React, { useState } from "react";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    enrollment: "",
    branch: "",
    clearConcept: "",
    deepUnderstanding: "",
    audible: "",
    overallSatisfaction: ""
  });

  const branches = ["CSE", "IT", "ECE", "EEE", "ME", "CE"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(form).every((val) => val !== "");
    if (!allFilled) {
      alert("Please fill all required fields.");
      return;
    }
    alert("Feedback submitted successfully!");
    console.log("Submitted data:", form);
  };

  const renderRating = (field) => (
    <div className="rating-section">
      <div className="rating-options">
        {[1, 2, 3, 4, 5].map((val) => (
          <label key={val}>
            <input
              type="radio"
              name={field}
              value={val}
              checked={form[field] === val.toString()}
              onChange={handleChange}
              required
            />
            <span>{val}</span>
          </label>
        ))}
      </div>
      <div className="min-max">
        <span>MINIMUM</span>
        <span>MAXIMUM</span>
      </div>
    </div>
  );

  return (
    <div className="form-container">
      <h2>Feedback</h2>
      <p className="required-note">* Indicates required question</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your answer"
            required
          />
        </div>

        <div className="form-group">
          <label>
            Enrollment No. <span className="required">*</span>
          </label>
          <input
            type="text"
            name="enrollment"
            value={form.enrollment}
            onChange={handleChange}
            placeholder="Your answer"
            required
          />
        </div>

        <div className="form-group">
          <label>
            Branch <span className="required">*</span>
          </label>
          <select name="branch" value={form.branch} onChange={handleChange} required>
            <option value="">Choose</option>
            {branches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>
            Was the faculty clear while explaining concepts? <span className="required">*</span>
          </label>
          {renderRating("clearConcept")}
        </div>

        <div className="form-group">
          <label>
            Did the faculty demonstrate deep understanding of the subject? <span className="required">*</span>
          </label>
          {renderRating("deepUnderstanding")}
        </div>

        <div className="form-group">
          <label>
            Was the faculty audible, articulate, and easy to understand? <span className="required">*</span>
          </label>
          {renderRating("audible")}
        </div>

        <div className="form-group">
          <label>
            How satisfied are you with the faculty’s performance overall? <span className="required">*</span>
          </label>
          {renderRating("overallSatisfaction")}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

