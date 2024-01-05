import { SidebatContainer } from "./Sidebar.styles";

const Sidebar: React.FC = () => {
  return (
    <SidebatContainer>
      <nav>
        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
          <a href="/perfil" title="Perfil Icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png"
              width={64}
              alt=""
            />
          </a>
          <hr />
        </div>
        <div>
          <ul>
            <li>
              <div className="home-icon">
                <div className="roof">
                  <div className="roof-edge"></div>
                </div>
                <div className="front"></div>
              </div>
            </li>
            <li>
              <div className="about-icon">
                <div className="head">
                  <div className="eyes"></div>
                  <div className="beard"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="work-icon">
                <div className="paper"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </div>
            </li>
            <li>
              <div className="mail-icon">
                <div className="mail-base">
                  <div className="mail-top"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </SidebatContainer>
  );
};

export default Sidebar;
