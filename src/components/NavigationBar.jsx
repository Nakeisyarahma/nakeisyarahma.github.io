import {Layout, Menu} from "antd";
import React from "react";
import {useNavigate} from "react-router-dom";
const websiteData = require("../config/data.json");
const {Header} = Layout;

export default function NavigationBar() {
    const navigate = useNavigate();
    const items = [
        {
            key: "1",
            label: <a href='/'>Profile</a>,
        },
        {
            key: "2",
            label: <a href='/#/portfolio'>Portfolio</a>,
        },
        {
            key: "3",
            label: <a href='/CV Nakeisya Rahma Nurramadhan-01-01.png'>Resume</a>,
        },
    ];
    return (
        <Header
            style={{
                paddingInline: "clamp(.5rem, 5vw, 48px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: 'fixed',
                width: '100%',
                zIndex: 9999

            }}
        >
            <button
                onClick={() => navigate("/")}
                style={{
                    padding: 0,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                <img src={websiteData.logo} style={{height: 50}} />
            </button>
            <Menu
                theme='dark'
                mode='horizontal'
                defaultSelectedKeys={["1"]}
                items={items}
                style={{
                    flex: 1,
                    minWidth: 0,
                    marginLeft: "70%",
                }}
            />
        </Header>
    );
}
