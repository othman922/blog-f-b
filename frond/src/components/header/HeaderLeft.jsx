const HeaderLeft = ({ toggle, setToggle }) => {
  return (
    <div className="header-left">
      <div className="header-logo">
        <strong>oTHMAN</strong>
      </div>
      <div onClick={() => setToggle((prev) => !prev)} className="header-menu">
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
    </div>
  );
};

export default HeaderLeft;
