import React from "react";
import {Avatar, Card, Flex, Image, List, Steps, theme, Typography} from "antd";
import {HomeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
const {Title, Text} = Typography;
const websiteData = require("../config/data.json");

export default function Homepage() {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <>
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Flex vertical align='center'>
                    <Avatar
                        size={{
                            xs: 150,
                            sm: 150,
                            md: 150,
                            lg: 150,
                            xl: 160,
                            xxl: 200,
                        }}
                        icon={
                            <Image
                                style={{width: 200}}
                                src={websiteData.user.avatar}
                            />
                        }
                    />
                    <Title level={1}>{websiteData.user.name}</Title>
                    <Text align='center'>{websiteData.user.description}</Text>
                </Flex>

                <Title level={2}>Education</Title>
                <Steps
                    progressDot
                    current={4}
                    direction='vertical'
                    items={websiteData.user.educations.map((item) => {
                        return {
                            title: item.name,
                            description: item.year,
                        };
                    })}
                />
            </div>
            <Title level={2} align='center'>
                Skills
            </Title>
            <List
                align='center'
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 3,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={websiteData.user.skills}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>{item.description}</Card>
                    </List.Item>
                )}
            />
            <Title level={2}>Experience</Title>
            <Steps
                progressDot
                current={4}
                direction='vertical'
                items={websiteData.user.experiences.map((item) => {
                    return {
                        title: item.company,
                        description: (
                            <>
                                {item.description}
                                <br />
                                {item.year}
                            </>
                        ),
                    };
                })}
            />
            <Title level={2}>Contact</Title>
            <List
                itemLayout='horizontal'
                dataSource={[
                    {
                        icon: <HomeOutlined />,
                        title: "Address",
                        description: websiteData.user.address,
                    },
                    {
                        icon: <PhoneOutlined />,
                        title: "Phone",
                        description: websiteData.user.phone,
                    },
                    {
                        icon: <MailOutlined />,
                        title: "Email",
                        description: websiteData.user.email,
                    },
                ]}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={item.icon}
                            title={
                                <a href='https://ant.design'>{item.title}</a>
                            }
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </>
    );
}
