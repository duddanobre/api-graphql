import { Layout, Card, Image } from 'antd';

import './styles.css';

const { Header, Content, Footer } = Layout;

export default function Home(){

    return(
    <Layout hasSider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
            My Social
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, textAlign: 'center' }}>
                <div className="site-card-border-less-wrapper">
                    <Card bordered={false} style={{ width: 300, borderRadius: 25 }}>
                    <Image bwidth={300} style={{height: 250, width: 250}}
                           src="https://i.pravatar.cc/200?u=5f1d7f3e8882c9c811b111ce"/>
                    <div style={{width:'100%'}}>
                        <p>name: Nina Simone</p>
                        <p>age: 28</p>
                        <p>eyeColor: Brown</p>
                        <p>company: Music </p>
                        <p>email: simonenina@gmail.com</p>
                    </div>
                    </Card>
                </div>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
  </Layout>
)
}

