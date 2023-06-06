import "../styles/Profile.css";
function Profile() {
  return (
    <div className="profile">
      <div className="profile-title">
        <span className="profile-title-text">Profile</span>
      </div>
      <div className="profile-content">
        <div className="profile-card">
          <span className="profile-card-title"> Profile </span>

          <div className="profile-card-content">
            <div className="profile-card-sub-content">
              <span className="Profile-card-sub-title">Name</span>
              <span className="Profile-card-text">Ege Külahlı</span>
            </div>
            <div className="profile-card-sub-content">
              <span className="Profile-card-sub-title">Age</span>
              <span className="Profile-card-text">29</span>
            </div>
            <div className="profile-card-sub-content">
              <span className="Profile-card-sub-title">Education</span>
              <span className="Profile-card-text">
                Bogazici University, International Trade
              </span>
            </div>
            <div className="profile-card-sub-content">
              <span className="Profile-card-sub-title">Desired Role</span>
              <span className="Profile-card-text">Frontend Developer</span>
            </div>
          </div>
        </div>
        <div className="about-me-section">
          <span className="about-me-title">About Me</span>
          <div className="about-me-text">
            <span className="about-me-text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.{" "}
            </span>
            <span className="about-me-text-content">
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </span>
          </div>
        </div>
      </div>
      <div className="pink-line"></div>
    </div>
  );
}

export default Profile;
