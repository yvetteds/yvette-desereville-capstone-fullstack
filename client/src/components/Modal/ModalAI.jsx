import "./Modal.scss";

import closeIcon from "../../assets/icons/close.svg";

export const ModalAI = ({ onClose }) => {
  const message = {
    heading: "Prompt.",
    paragraph: ``,
  };

  return (
    <main className="modal">
      <section className="modal__card">
        <nav className="modal__header">
          <button onClick={onClose} className="modal__close--button">
            <img src={closeIcon} alt="X icon" />
          </button>
        </nav>
        <hgroup className="modal__body">
          <h2 className="modal__body--heading">{message.heading}</h2>
          <p className="modal__body--paragraph">{message.paragraph}</p>
        </hgroup>

        <nav className="modal__footer">
          <div className="cancel__button">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
          <div className="delete__button">
            <button type="button" className="delete">
              Delete
            </button>
          </div>
        </nav>
      </section>
    </main>
  );
};
