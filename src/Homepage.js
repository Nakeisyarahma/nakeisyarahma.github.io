import React from "react";
import {
    Avatar,
    Breadcrumb,
    Button,
    Card,
    Flex,
    Image,
    Layout,
    List,
    Menu,
    Steps,
    Tabs,
    theme,
    Typography,
} from "antd";
import {
    HomeOutlined,
    MailOutlined,
    PhoneOutlined,
    UserOutlined,
} from "@ant-design/icons";
import {Route, Routes} from "react-router-dom";
import Portfolio from "./Portfolio";
const {Header, Content, Footer} = Layout;
const {Title, Text, Paragraph} = Typography;

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
                            xs: 48,
                            sm: 64,
                            md: 80,
                            lg: 128,
                            xl: 160,
                            xxl: 200,
                        }}
                        icon={
                            <Image style={{width: 200}} src='/profile.JPEG' />
                        }
                    />
                    <Title level={1}>Nakeisya Rahma Nurramadhan</Title>
                    <Text align='center'>
                        Saya merupakan lulusan baru dari SMK Jurusan Multimedia.
                        Dengan Pengalaman dokumentasi berbagai Event. Berkat
                        hasil kerja keras saya, saya juga berhasil Lulus dengan
                        Nilai rapot 83,04, Saya juga sudah mengikuti beberapa
                        lomba membuat video iklan.
                    </Text>
                </Flex>

                <Title level={2}>Education</Title>
                <Steps
                    progressDot
                    current={4}
                    direction='vertical'
                    items={[
                        {
                            title: "SDN 3 KRASAK",
                            description: "2012-2018",
                        },
                        {
                            title: "MTsN 1 JEPARA",
                            description: "2019-2021",
                        },
                        {
                            title: "SMKN 3 JEPARA",
                            description: "2022-2024",
                        },
                    ]}
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
                dataSource={[
                    {title: "Adobe Illustrator"},
                    {title: "Adobe Photoshop"},
                    {title: "Adobe Premiere Pro"},
                    {title: "Adobe After Effect"},
                    {title: "Adobe Lightroom"},
                ]}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}></Card>
                    </List.Item>
                )}
            />
            <Title level={2}>Experience</Title>
            <Steps
                progressDot
                current={4}
                direction='vertical'
                items={[
                    {
                        title: "SHINE VISUALS STUDIO",
                        description: (
                            <>
                                Saya mempunyai pengalaman praktik kerja lapangan
                                di Shine Visuals Studio selama 6 bulan sebagai
                                Fotografer dan Editor Video, disana saya
                                berhasil memperoleh nilai akhir 89,54
                                <br />
                                2022-2023
                            </>
                        ),
                    },
                ]}
            />
            <Title level={2}>Contact</Title>
            <List
                itemLayout='horizontal'
                dataSource={[
                    {
                        icon: <HomeOutlined />,
                        title: "Address",
                        description: "Jambu Timur RT 18 RW 04, Mlonggo, Jepara",
                    },
                    {
                        icon: <PhoneOutlined />,
                        title: "Phone",
                        description: "+6282126959118",
                    },
                    {
                        icon: <MailOutlined />,
                        title: "Email",
                        description: "nakeisyarahma99@gmail.com",
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
