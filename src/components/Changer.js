import "../styles/Changer.css";
function Changer() {
  return (
    <div className="Changer">
        <span>slider</span>
        <span className="changer-text">DARK MODE</span>
        <span className="changer-line">|</span>
        <span className="changer-text"><button id='language-changer'><span className="language-changer-span">TÜRKÇE</span></button>’YE GEÇ</span>
    </div>
  );
}

export default Changer;