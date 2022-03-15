import React from 'react';
import { Layout, Card, Image, Input, Space } from 'antd';
import 'antd/dist/antd.min.css';
import './styles.css';

import { Link, useParams } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

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
    },
    {
        "_id": "5f1d7f3e2c560fb8589e0bdc",
        "index": 1,
        "picture": "https://i.pravatar.cc/200?u=5f1d7f3e2c560fb8589e0bdc",
        "age": 30,
        "eyeColor": "blue",
        "name": "Cecilia Phillips",
        "company": "DAIDO",
        "email": "ceciliaphillips@daido.com",
        "phone": "+1 (899) 464-3042",
        "friends": [
          {
            "_id": "5f1d7f3e9f192ca590c3c9a6",
            "index": 0,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e9f192ca590c3c9a6",
            "age": 31,
            "eyeColor": "blue",
            "name": "Abigail Bradford",
            "company": "ESCENTA",
            "email": "abigailbradford@escenta.com",
            "phone": "+1 (990) 576-2658"
          },
          {
            "_id": "5f1d7f3e6fe7aa6298ccf0e0",
            "index": 1,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e6fe7aa6298ccf0e0",
            "age": 22,
            "eyeColor": "brown",
            "name": "Richards Morin",
            "company": "APEX",
            "email": "richardsmorin@apex.com",
            "phone": "+1 (943) 571-2406"
          },
          {
            "_id": "5f1d7f3edd38c5509b837fb8",
            "index": 2,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3edd38c5509b837fb8",
            "age": 38,
            "eyeColor": "blue",
            "name": "Angelique Daugherty",
            "company": "UTARIAN",
            "email": "angeliquedaugherty@utarian.com",
            "phone": "+1 (884) 516-2234"
          },
          {
            "_id": "5f1d7f3eb8a8da1f29193d21",
            "index": 3,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3eb8a8da1f29193d21",
            "age": 39,
            "eyeColor": "brown",
            "name": "Wendy Gilliam",
            "company": "ZILLACON",
            "email": "wendygilliam@zillacon.com",
            "phone": "+1 (967) 428-2060"
          },
          {
            "_id": "5f1d7f3ecca5d1ce2a5e3817",
            "index": 4,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ecca5d1ce2a5e3817",
            "age": 39,
            "eyeColor": "blue",
            "name": "Rosemary Murphy",
            "company": "PETICULAR",
            "email": "rosemarymurphy@peticular.com",
            "phone": "+1 (886) 561-3515"
          },
          {
            "_id": "5f1d7f3e902d8af24efdc78a",
            "index": 5,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e902d8af24efdc78a",
            "age": 23,
            "eyeColor": "blue",
            "name": "Elisa Espinoza",
            "company": "DIGIRANG",
            "email": "elisaespinoza@digirang.com",
            "phone": "+1 (876) 450-2200"
          },
          {
            "_id": "5f1d7f3e9ea520d8fdc46f62",
            "index": 6,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e9ea520d8fdc46f62",
            "age": 25,
            "eyeColor": "green",
            "name": "Lillie Yang",
            "company": "DRAGBOT",
            "email": "lillieyang@dragbot.com",
            "phone": "+1 (911) 433-3057"
          },
          {
            "_id": "5f1d7f3eea1ab53539653431",
            "index": 7,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3eea1ab53539653431",
            "age": 23,
            "eyeColor": "blue",
            "name": "Castro Martinez",
            "company": "TRANSLINK",
            "email": "castromartinez@translink.com",
            "phone": "+1 (863) 532-2522"
          }
        ],
        "greeting": "Hello, Cecilia Phillips! You have 2 unread messages."
      },
      {
        "_id": "5f1d7f3e39b91206ddcaad75",
        "index": 2,
        "picture": "https://i.pravatar.cc/200?u=5f1d7f3e39b91206ddcaad75",
        "age": 27,
        "eyeColor": "green",
        "name": "Leigh Frank",
        "company": "COMBOGEN",
        "email": "leighfrank@combogen.com",
        "phone": "+1 (964) 516-3246",
        "friends": [
          {
            "_id": "5f1d7f3e7818c86b6079ff91",
            "index": 0,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e7818c86b6079ff91",
            "age": 33,
            "eyeColor": "green",
            "name": "Raymond Watts",
            "company": "FANFARE",
            "email": "raymondwatts@fanfare.com",
            "phone": "+1 (894) 536-2134"
          },
          {
            "_id": "5f1d7f3ecf27d574e9c7e272",
            "index": 1,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ecf27d574e9c7e272",
            "age": 28,
            "eyeColor": "blue",
            "name": "Kaye William",
            "company": "NAMEGEN",
            "email": "kayewilliam@namegen.com",
            "phone": "+1 (957) 491-3011"
          },
          {
            "_id": "5f1d7f3e8732459b85151e92",
            "index": 2,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e8732459b85151e92",
            "age": 32,
            "eyeColor": "green",
            "name": "Lina Bridges",
            "company": "SLAX",
            "email": "linabridges@slax.com",
            "phone": "+1 (916) 485-3282"
          },
          {
            "_id": "5f1d7f3ee51b391f76fa1d87",
            "index": 3,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ee51b391f76fa1d87",
            "age": 36,
            "eyeColor": "green",
            "name": "Sybil Gould",
            "company": "QOT",
            "email": "sybilgould@qot.com",
            "phone": "+1 (915) 486-3260"
          },
          {
            "_id": "5f1d7f3e177ebb42bdfe519f",
            "index": 4,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e177ebb42bdfe519f",
            "age": 36,
            "eyeColor": "brown",
            "name": "Henry Chang",
            "company": "QUOTEZART",
            "email": "henrychang@quotezart.com",
            "phone": "+1 (926) 408-3697"
          },
          {
            "_id": "5f1d7f3ecc63b6097d16df6a",
            "index": 5,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ecc63b6097d16df6a",
            "age": 26,
            "eyeColor": "green",
            "name": "Kirkland Bradley",
            "company": "BOVIS",
            "email": "kirklandbradley@bovis.com",
            "phone": "+1 (978) 569-3011"
          },
          {
            "_id": "5f1d7f3ed3db8341c5cf09c0",
            "index": 6,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ed3db8341c5cf09c0",
            "age": 37,
            "eyeColor": "green",
            "name": "Sykes Nguyen",
            "company": "QUORDATE",
            "email": "sykesnguyen@quordate.com",
            "phone": "+1 (931) 582-3644"
          },
          {
            "_id": "5f1d7f3e93b74ad12b292ca8",
            "index": 7,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e93b74ad12b292ca8",
            "age": 23,
            "eyeColor": "green",
            "name": "Marianne Pope",
            "company": "LYRICHORD",
            "email": "mariannepope@lyrichord.com",
            "phone": "+1 (994) 584-2559"
          }
        ],
        "greeting": "Hello, Leigh Frank! You have 1 unread messages."
      }, 
      {
        "_id": "5f1d7f3e33e08244ca9a7cea",
        "index": 3,
        "picture": "https://i.pravatar.cc/200?u=5f1d7f3e33e08244ca9a7cea",
        "age": 20,
        "eyeColor": "green",
        "name": "Fletcher Blair",
        "company": "GENEKOM",
        "email": "fletcherblair@genekom.com",
        "phone": "+1 (848) 555-2960",
        "friends": [
          {
            "_id": "5f1d7f3e466344b36ed43f14",
            "index": 0,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e466344b36ed43f14",
            "age": 40,
            "eyeColor": "green",
            "name": "Marilyn Michael",
            "company": "POLARIA",
            "email": "marilynmichael@polaria.com",
            "phone": "+1 (906) 446-3014"
          },
          {
            "_id": "5f1d7f3e0e99f6c428b9551a",
            "index": 1,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e0e99f6c428b9551a",
            "age": 20,
            "eyeColor": "brown",
            "name": "Cash Finley",
            "company": "COMTEST",
            "email": "cashfinley@comtest.com",
            "phone": "+1 (808) 448-2761"
          },
          {
            "_id": "5f1d7f3e3f009c3d3b84e961",
            "index": 2,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e3f009c3d3b84e961",
            "age": 23,
            "eyeColor": "green",
            "name": "Kathryn Powell",
            "company": "ANIVET",
            "email": "kathrynpowell@anivet.com",
            "phone": "+1 (911) 459-2835"
          },
          {
            "_id": "5f1d7f3e8d5076204f11101e",
            "index": 3,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e8d5076204f11101e",
            "age": 31,
            "eyeColor": "green",
            "name": "Karen Acosta",
            "company": "RODEOMAD",
            "email": "karenacosta@rodeomad.com",
            "phone": "+1 (911) 513-2476"
          },
          {
            "_id": "5f1d7f3e0af3b44703285648",
            "index": 4,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e0af3b44703285648",
            "age": 28,
            "eyeColor": "green",
            "name": "Mclaughlin Willis",
            "company": "PHARMEX",
            "email": "mclaughlinwillis@pharmex.com",
            "phone": "+1 (980) 431-3577"
          },
          {
            "_id": "5f1d7f3e1ec3a86d763fe600",
            "index": 5,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e1ec3a86d763fe600",
            "age": 36,
            "eyeColor": "brown",
            "name": "Mabel Fry",
            "company": "SUPPORTAL",
            "email": "mabelfry@supportal.com",
            "phone": "+1 (906) 428-2617"
          },
          {
            "_id": "5f1d7f3e0473fa76909efed1",
            "index": 6,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e0473fa76909efed1",
            "age": 39,
            "eyeColor": "green",
            "name": "Randolph Bowen",
            "company": "TELEPARK",
            "email": "randolphbowen@telepark.com",
            "phone": "+1 (966) 484-2944"
          },
          {
            "_id": "5f1d7f3ea6030f2e5f14e6de",
            "index": 7,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ea6030f2e5f14e6de",
            "age": 23,
            "eyeColor": "blue",
            "name": "Mai Conway",
            "company": "COMTOURS",
            "email": "maiconway@comtours.com",
            "phone": "+1 (970) 407-3175"
          }
        ],
        "greeting": "Hello, Fletcher Blair! You have 2 unread messages."
      },
      {
        "_id": "5f1d7f3e04beaccb5d14a6a4",
        "index": 4,
        "picture": "https://i.pravatar.cc/200?u=5f1d7f3e04beaccb5d14a6a4",
        "age": 38,
        "eyeColor": "green",
        "name": "Stout Fuller",
        "company": "WRAPTURE",
        "email": "stoutfuller@wrapture.com",
        "phone": "+1 (885) 529-2967",
        "friends": [
          {
            "_id": "5f1d7f3e73351d0f80084b6e",
            "index": 0,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e73351d0f80084b6e",
            "age": 27,
            "eyeColor": "green",
            "name": "Leblanc Bryant",
            "company": "TURNLING",
            "email": "leblancbryant@turnling.com",
            "phone": "+1 (956) 419-3810"
          },
          {
            "_id": "5f1d7f3e999552af14edb8c5",
            "index": 1,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e999552af14edb8c5",
            "age": 26,
            "eyeColor": "brown",
            "name": "Juliet Burgess",
            "company": "PYRAMI",
            "email": "julietburgess@pyrami.com",
            "phone": "+1 (829) 446-3289"
          },
          {
            "_id": "5f1d7f3efeb41cee0d854654",
            "index": 2,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3efeb41cee0d854654",
            "age": 25,
            "eyeColor": "blue",
            "name": "Hughes Pacheco",
            "company": "ZOGAK",
            "email": "hughespacheco@zogak.com",
            "phone": "+1 (804) 411-2369"
          },
          {
            "_id": "5f1d7f3ef5924180d3d693f7",
            "index": 3,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ef5924180d3d693f7",
            "age": 25,
            "eyeColor": "green",
            "name": "Nona Brennan",
            "company": "TOYLETRY",
            "email": "nonabrennan@toyletry.com",
            "phone": "+1 (872) 596-3880"
          },
          {
            "_id": "5f1d7f3ebb5ec62de85b4ee1",
            "index": 4,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ebb5ec62de85b4ee1",
            "age": 36,
            "eyeColor": "brown",
            "name": "Beverly Stokes",
            "company": "BITTOR",
            "email": "beverlystokes@bittor.com",
            "phone": "+1 (912) 501-2844"
          },
          {
            "_id": "5f1d7f3ec998baf61faad6b6",
            "index": 5,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ec998baf61faad6b6",
            "age": 38,
            "eyeColor": "brown",
            "name": "Earlene Horn",
            "company": "APPLICA",
            "email": "earlenehorn@applica.com",
            "phone": "+1 (942) 409-3548"
          },
          {
            "_id": "5f1d7f3ee2cbeaf5845dc8aa",
            "index": 6,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ee2cbeaf5845dc8aa",
            "age": 35,
            "eyeColor": "brown",
            "name": "Bonner Giles",
            "company": "GEEKOL",
            "email": "bonnergiles@geekol.com",
            "phone": "+1 (889) 405-3434"
          },
          {
            "_id": "5f1d7f3edddde3edfb939531",
            "index": 7,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3edddde3edfb939531",
            "age": 20,
            "eyeColor": "green",
            "name": "Mcintosh Henson",
            "company": "NURALI",
            "email": "mcintoshhenson@nurali.com",
            "phone": "+1 (872) 521-3477"
          }
        ],
        "greeting": "Hello, Stout Fuller! You have 1 unread messages."
      },
      {
        "_id": "5f1d7f3ecdeaa6705b730547",
        "index": 5,
        "picture": "https://i.pravatar.cc/200?u=5f1d7f3ecdeaa6705b730547",
        "age": 33,
        "eyeColor": "green",
        "name": "Shelley Arnold",
        "company": "ACCIDENCY",
        "email": "shelleyarnold@accidency.com",
        "phone": "+1 (931) 467-2762",
        "friends": [
          {
            "_id": "5f1d7f3e16770f218c5bd34c",
            "index": 0,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e16770f218c5bd34c",
            "age": 22,
            "eyeColor": "blue",
            "name": "Veronica Elliott",
            "company": "VITRICOMP",
            "email": "veronicaelliott@vitricomp.com",
            "phone": "+1 (826) 519-3318"
          },
          {
            "_id": "5f1d7f3eabd3fa6f0da2c750",
            "index": 1,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3eabd3fa6f0da2c750",
            "age": 32,
            "eyeColor": "brown",
            "name": "Bessie Green",
            "company": "QABOOS",
            "email": "bessiegreen@qaboos.com",
            "phone": "+1 (876) 440-3038"
          },
          {
            "_id": "5f1d7f3e0e1cf34ef29314a8",
            "index": 2,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e0e1cf34ef29314a8",
            "age": 25,
            "eyeColor": "green",
            "name": "Weiss Lloyd",
            "company": "RONELON",
            "email": "weisslloyd@ronelon.com",
            "phone": "+1 (867) 472-2680"
          },
          {
            "_id": "5f1d7f3e30d0b56b32746186",
            "index": 3,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e30d0b56b32746186",
            "age": 22,
            "eyeColor": "brown",
            "name": "Gentry Baird",
            "company": "SARASONIC",
            "email": "gentrybaird@sarasonic.com",
            "phone": "+1 (856) 400-2292"
          },
          {
            "_id": "5f1d7f3e167de9172e7df4bf",
            "index": 4,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e167de9172e7df4bf",
            "age": 40,
            "eyeColor": "brown",
            "name": "Melody Kirk",
            "company": "DOGNOST",
            "email": "melodykirk@dognost.com",
            "phone": "+1 (941) 581-2975"
          },
          {
            "_id": "5f1d7f3edef0181e2580d3f2",
            "index": 5,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3edef0181e2580d3f2",
            "age": 36,
            "eyeColor": "blue",
            "name": "Graciela Baldwin",
            "company": "AVENETRO",
            "email": "gracielabaldwin@avenetro.com",
            "phone": "+1 (822) 426-2473"
          },
          {
            "_id": "5f1d7f3ee9246ad2bd843b2c",
            "index": 6,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3ee9246ad2bd843b2c",
            "age": 38,
            "eyeColor": "green",
            "name": "Talley Wagner",
            "company": "EWEVILLE",
            "email": "talleywagner@eweville.com",
            "phone": "+1 (948) 496-3959"
          },
          {
            "_id": "5f1d7f3e892d70eb6a2b4f8f",
            "index": 7,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e892d70eb6a2b4f8f",
            "age": 38,
            "eyeColor": "brown",
            "name": "Warren Lynch",
            "company": "SCENTRIC",
            "email": "warrenlynch@scentric.com",
            "phone": "+1 (995) 479-3767"
          }
        ],
        "greeting": "Hello, Shelley Arnold! You have 3 unread messages."
      },
];

let params = useParams();
console.log(params.name)
    return(
    <Layout hasSider>
        <Layout className="site-layout">
        <Header className="site-layout-background" style={{width: '100%' }}>
          <Link to={'/'}>
            <span style={{fontSize: 25, fontWeight: 'bolder'}}>My Social</span>
          </Link>
            <Space direction="vertical">
                <Search placeholder="search" style={{ width: 400, marginLeft: 30, marginTop: 10}} />
            </Space>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, textAlign: 'center' }}>
              <span>{params.name}</span>
              <span style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'center'}}>Friends</span>
                <div className="site-card-border-less-wrapper">
                    {
                        data.map(i => (i.friends.map(f => (
                                <div>
                                  <Card bordered={false} style={{ width: 300, borderRadius: 25, marginRight: 10, marginLeft: 10 }} key={f._id}>
                                      <Image width={300} style={{ height: 250, width: 250 }}
                                          src={f.picture} />
                                      <div>
                                          <p>name: {f.name}</p>
                                          <p>age: {f.age}</p>
                                          <p>eyeColor: {f.eyeColor}</p>
                                          <p>company: {f.company} </p>
                                          <p>email: {f.email}</p>
                                      </div>
                                  </Card>
                              </div>
                          ))
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

