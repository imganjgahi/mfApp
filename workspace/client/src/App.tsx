import { Button, ConfigProvider } from "antd";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.variable.min.css';
import "./styles/index.css";
import Routes from "./pages/Routes";

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
  mount(document.getElementById("client"))
}

export { mount }