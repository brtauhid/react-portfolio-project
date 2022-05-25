import "./intro.css";
import Me from "../../img/me.png";
const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello My name is</h2>
          <h2 className="i-name">B. R. Tauhid</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">PSD to HTML</div>
              <div className="i-title-item">React Developer</div>
            </div>
          </div>
          <div className="i-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            architecto temporibus similique sed perferendis harum r.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} className="i-img" alt="" />
      </div>
    </div>
  );
};

export default intro;
