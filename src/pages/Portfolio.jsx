import {Breadcrumb, Button, Card, List, Space, Tabs} from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import {useNavigate} from "react-router-dom";
const websiteData = require("../config/data.json");

export default function Portfolio() {
    const navigate = useNavigate();
    return (
        <>
            <Space direction='vertical' size={30}>
                <Breadcrumb
                    items={[
                        {
                            title: <a onClick={() => navigate("/")}>Home</a>,
                        },
                        {
                            title: "Portfolio",
                        },
                    ]}
                />
                <Tabs
                    style={{width: "90vw"}}
                    type='card'
                    items={websiteData.user.works.map((item, index) => {
                        return {
                            key: `${index + 1}`,
                            label: item.label,
                            children: (
                                <List
                                    align='center'
                                    grid={{
                                        gutter: 16,
                                        xs: 2,
                                        sm: 2,
                                        md: 4,
                                        lg: 3,
                                        xl: 6,
                                        xxl: 3,
                                    }}
                                    dataSource={item.content}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <Card
                                                hoverable
                                                cover={
                                                    <img
                                                        alt='example'
                                                        src={item.thumbnail}
                                                    />
                                                }
                                                onClick={() =>
                                                    (window.location.href =
                                                        item.link)
                                                }
                                            >
                                                <Meta
                                                    title={item.title}
                                                    description={item.link}
                                                />
                                            </Card>
                                        </List.Item>
                                    )}
                                />
                            ),
                        };
                    })}
                />
            </Space>
        </>
    );
}
