import { PlayCircleOutlined, PoweroffOutlined } from "@ant-design/icons";
import {Breadcrumb, Button, Card, List, Space, Tabs, Image} from "antd";
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
                                    renderItem={(workitem) => (
                                        <List.Item>
                                            <Card
                                                hoverable
                                                cover={
                                                    <Image
                                                        alt='example'
                                                        src={workitem.thumbnail}
                                                    />    
                                                }
                                            >
                                                {(item.label !== "Photograpy"&&item.label !== "Graphic Design")&&<Button
                                                type="primary"
                                                icon={<PlayCircleOutlined />} 
                                                onClick={() => 
                                                    (window.location.href=
                                                         workitem.link)
                                                        }
                                                >PLAY</Button>}
                                                <Meta
                                                    title={workitem.title}
                                
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
