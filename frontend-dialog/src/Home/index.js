import { Layout, Card, Image } from 'antd';

import './styles.css';

const { Header, Content, Footer } = Layout;

export default function Home(){

const data = [
    {
      "_id": "5f1d7f3e5dc58af42fc39242",
      "index": 0,
      "picture": "https://i.pravatar.cc/200?u=5f1d7f3e5dc58af42fc39242",
      "age": 32,
      "eyeColor": "blue",
      "name": "Dotson Jennings",
      "company": "HOPELI",
      "email": "dotsonjennings@hopeli.com",
      "phone": "+1 (919) 551-3493",
      "friends": [
        {
          "_id": "5f1d7f3e8882c9c811b111ce",
          "index": 0,
          "picture": "https://i.pravatar.cc/200?u=5f1d7f3e8882c9c811b111ce",
          "age": 23,
          "eyeColor": "green",
          "name": "Patti Mckenzie",
          "company": "DAISU",
          "email": "pattimckenzie@daisu.com",
          "phone": "+1 (960) 566-3327"
        },
        {
          "_id": "5f1d7f3e5c07bf96b549ca23",
          "index": 1,
          "picture": "https://i.pravatar.cc/200?u=5f1d7f3e5c07bf96b549ca23",
          "age": 40,
          "eyeColor": "brown",
          "name": "Andrea Navarro",
          "company": "SKYBOLD",
          "email": "andreanavarro@skybold.com",
          "phone": "+1 (819) 472-3053"
        },
        {
          "_id": "5f1d7f3e43730aabeb27dcf3",
          "index": 2,
          "picture": "https://i.pravatar.cc/200?u=5f1d7f3e43730aabeb27dcf3",
          "age": 27,
          "eyeColor": "brown",
          "name": "Madge Boyer",
          "company": "BLUPLANET",
          "email": "madgeboyer@bluplanet.com",
          "phone": "+1 (833) 452-2131"
        },
        {
          "_id": "5f1d7f3ee38afce900177663",
          "index": 3,
          "picture": "https://i.pravatar.cc/200?u=5f1d7f3ee38afce900177663",
          "age": 27,
          "eyeColor": "blue",
          "name": "Dalton Justice",
          "company": "TURNABOUT",
          "email": "daltonjustice@turnabout.com",
          "phone": "+1 (807) 580-3128"
        },
        {
          "_id": "5f1d7f3e2179eda3e6e94256",
          "index": 4,
          "picture": "https://i.pravatar.cc/200?u=5f1d7f3e2179eda3e6e94256",
          "age": 31,
          "eyeColor": "green",
          "name": "Marie Vang",
          "company": "PARLEYNET",
          "email": "marievang@parleynet.com",
          "phone": "+1 (908) 586-2427"
        }
        ]
    }
];

    return(
    <Layout hasSider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
            My Social
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, textAlign: 'center' }}>
                <div className="site-card-border-less-wrapper">
                    {
                        data.map(i => (
                        <Card bordered={false} style={{ width: 300, borderRadius: 25 }} key={i._id}>
                            <Image bwidth={300} style={{height: 250, width: 250}}
                                src="https://i.pravatar.cc/200?u=5f1d7f3e8882c9c811b111ce"/>
                            <div style={{width:'100%'}}>
                                <p>name: {i.name}</p>
                                <p>age: {i.age}</p>
                                <p>eyeColor: {i.eyeColor}</p>
                                <p>company: {i.company} </p>
                                <p>email: {i.email}</p>
                            </div>
                        </Card>
                        ))
                    }
                </div>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
  </Layout>
)
}

