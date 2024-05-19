import React, { useState, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import { IoCheckmark } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";
import "../../styles/AddExam.css";

const QuestionForm = ({ onSave }) => {
  const [questions, setQuestions] = useState(() => {
    const storedQuestions = localStorage.getItem("questions");
    return storedQuestions
      ? JSON.parse(storedQuestions)
      : [{ question: "", options: [] }];
  });

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: "", options: [] }]);
  };

  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (index) => {
    const updatedQuestions = [...questions];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const newOption = alphabet[updatedQuestions[index].options.length];
    updatedQuestions[index].options.push({ text: newOption, checked: false });
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].text = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleToggleOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].checked =
      !updatedQuestions[questionIndex].options[optionIndex].checked;
    setQuestions(updatedQuestions);
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <>
      {questions.map((question, index) => (
        <div key={index} className="question-container">
          <div className="question-div">
            <h2 className="question-title">
              <TbGridDots className="dot-grid" />
              <span>Question {index + 1}</span>
            </h2>
            <button
              className="close-button close-btn"
              onClick={() => handleRemoveQuestion(index)}
            >
              <TfiClose />
            </button>
          </div>
          <input
            type="text"
            className="question-input"
            value={question.question}
            onChange={(e) => handleQuestionChange(e, index)}
          />
          <div className="options">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option">
                <span className="option-letter">
                  <RxDragHandleDots2 />
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <div className="option-div">
                  <div className="input-container">
                    <input
                      className="option-input"
                      type="text"
                      onChange={(e) =>
                        handleOptionChange(e, index, optionIndex)
                      }
                    />
                  </div>
                  <div className="checkmark">
                    <button
                      type="button"
                      className={`checkmark-button ${
                        option.checked ? "checked" : ""
                      }`}
                      style={{
                        backgroundColor: option.checked ? "lime" : "",
                      }}
                      onClick={() => handleToggleOption(index, optionIndex)}
                    >
                      <IoCheckmark />
                    </button>
                    <button
                      className="close-button"
                      onClick={() => handleRemoveOption(index, optionIndex)}
                    >
                      <TfiClose />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => handleAddOption(index)}
              className="add-option-button"
              disabled={question.question.trim() === ""}
            >
              <MdAdd className="addicon" />
              <span>Add Option</span>
            </button>
          </div>
        </div>
      ))}
      <div className="add-question">
        <button onClick={handleAddQuestion} className="add-question-button">
          <MdAdd className="addicon" />
          <span>Add Question</span>
        </button>
      </div>
    </>
  );
};

export default QuestionForm;
