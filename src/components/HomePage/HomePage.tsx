import Header from "../Header/Header";
import ListContent from "../ListContent/ListContent";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="layout-wrapper">
        <Header />
        <ListContent />
      </div>
    </div>
  );
};

export default HomePage;
