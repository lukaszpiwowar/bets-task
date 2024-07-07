import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import {  } from 'antd';

const { Title, Paragraph } = Typography;
const { Header, Footer, Content } = Layout;

interface LayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Layout>
            <Header>
                <Title style={{ color: "#fff" }} level={2}>Place your bets</Title>
            </Header>
            <Content>
                <Row style={{ marginTop: '20px' }}>
                    <Col span={18} offset={3}>
                        {children}
                    </Col>
                </Row>
            </Content>
            <Footer>
                <Paragraph style={{ textAlign: 'center' }}>
                    Good luck!
                </Paragraph> 
            </Footer>
        </Layout>
    );
};
