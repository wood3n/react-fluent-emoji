import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "antd/dist/antd.css";
import Doc from "./doc";

function App() {
  return (
    <ConfigProvider locale={zhCN}><Doc /></ConfigProvider>
  );
}

export default App;
