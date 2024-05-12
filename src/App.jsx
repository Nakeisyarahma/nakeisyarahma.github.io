import React from "react";
import {Layout, theme} from "antd";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import NavigationBar from "./components/NavigationBar";
const websiteData = require("./config/data.json");
const {Content, Footer} = Layout;

// function LayoutWrapper({children}) {
//     return {children};
// }

const App = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Layout>
            <NavigationBar />
            <Content
                style={{
                    paddingBlock: "24px",
                    paddingInline: "clamp(.5rem, 5vw, 48px)",
                }}
            >
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                </Routes>
            </Content>
            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                {websiteData.copyright.holder} ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};
export default App;
