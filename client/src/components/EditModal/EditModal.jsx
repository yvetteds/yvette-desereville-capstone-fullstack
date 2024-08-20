import "./Modal.scss";

export const EditModal = () => {
  const modalHeader = {
    heading: `Edit Project Dashboard Item?`,
    paragraph: `Test`,
  };

  return (
    <main className="modal">
      <section className="modal__card">
        <nav className="modal__header">
          <button className="modal__close--button"></button>
        </nav>
        <hgroup className="modal__body">
          <h2 className="modal__body--heading">{modalHeader.heading}</h2>
          <p className="modal__body--paragraph">{modalHeader.paragraph}</p>
        </hgroup>

        <nav className="modal__footer"></nav>
      </section>
    </main>
  );
};
