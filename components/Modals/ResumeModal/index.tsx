interface ResumeModalProps {
  isActive: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isActive, onClose }: ResumeModalProps) => {
  const resumePath = "/Deyby%20Rodriguez%20-%20Resume.pdf#view=FitH";

  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      {/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      {/** biome-ignore lint/a11y/noStaticElementInteractions: <explanation> */}
      <div className={"modal-background"} onClick={onClose}></div>

      <div className="modal-content is-huge">
        <div className="box p-0" style={{ height: "80vh", overflow: "hidden" }}>
          <iframe
            src={resumePath}
            width={"100%"}
            height={"100%"}
            title={"Deyby Rodriguez's Resume"}
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>

      <button
        className={"modal-close is-large"}
        aria-label={"close"}
        onClick={onClose}
        type={"button"}
      ></button>
    </div>
  );
};

export default ResumeModal;
