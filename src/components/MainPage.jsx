import Tages from "./Tages";
import ContentPage from "./ContentPage";

const MainPage = ({  flexSize }) => {
  return (
    <div className={`flex-grow flex flex-col items-center`}>
      <Tages />
      <ContentPage />
    </div>
  );
};

export default MainPage;
