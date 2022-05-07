import { Button, ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.variable.min.css';

import "./index.css";

const App = () => (
  <div className="container">
    <div>admin</div>
    <Button type="primary"> Admin Button</Button>
  </div>
);
const mount = (el) => {
  ReactDOM.render(
  <ConfigProvider>
  <App />
  </ConfigProvider>, el);
}

if(process.env.NODE_ENV === 'development') {
  mount( document.getElementById("admin"))
}

export {mount}
