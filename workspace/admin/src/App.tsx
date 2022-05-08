import { ConfigProvider } from "antd";
import 'antd/dist/antd.variable.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./pages/Routes";
import "./styles/index.css";

const App = () => {
  return <div className="app">
    <Routes />
  </div>
};

const mount = (el) => {
  ReactDOM.render(
    <ConfigProvider>
      <App />
    </ConfigProvider>, el);
}

if (process.env.NODE_ENV === 'development') {
  mount(document.getElementById("admin"))
}

export { mount };
