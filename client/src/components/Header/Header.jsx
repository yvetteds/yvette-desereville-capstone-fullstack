import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__name">My Projects</div>
        <div className="header__profile--container">
          <img
            src="/src/assets/icons/profile.svg"
            alt="menu-icon"
            className="header__profile"
          />
        </div>
      </div>
    </header>
  );
};
