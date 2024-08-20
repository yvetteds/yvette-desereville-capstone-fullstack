import "./Prompt.scss";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Prompt = () => {
  const [formValues, setFormValues] = useState({
    prompt: "",
  });

  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    const genAI = new GoogleGenerativeAI(
      "AIzaSyDYMV6C53RCB8PgUYxCnuvHv0sMfpMMF5M"
    );

    try {
      setText("Loading...");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = formValues.prompt;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      setText(text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main">
      <form action="submit" className="prompt-form" onSubmit={handleSubmit}>
        <div className="label-and-input">
          <label htmlFor="prompt" className="label">
            Prompt
          </label>
          <textarea
            className="textarea"
            type="text"
            placeholder="Type AI prompt here"
            name="prompt"
            value={formValues.prompt}
            onChange={handleInputChange}
          />
        </div>
        <p className="response">
          {text !== "" ? text : "AI response will appear here"}
        </p>
        <div className="submit-button__container">
          <button type="submit" className="submit-button">
            Prompt
          </button>
        </div>
      </form>
      <footer className="footer">
        <NavLink to="/">
          <div className="project__add">
            <button type="button" className="home-button">
              <img
                src="/src/assets/icons/home.svg"
                alt="home-house"
                className="home-icon"
              />
            </button>
          </div>
        </NavLink>
      </footer>
    </main>
  );
};
