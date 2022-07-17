import "./App.css";
import { Header, Sidebar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/**Sidebar */}
        {/**Feed */}
        {/**Widgets */}
      </div>
      {/**App Body */}
    </div>
  );
};

export default App;
