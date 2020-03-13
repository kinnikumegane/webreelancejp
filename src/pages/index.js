import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'

import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.jpg'
import p3 from '../assets/images/p3.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Webreelance"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="services">
                        <div className="inner">
                            <header className="major">
                                <h2>サービスと料金</h2>
                            </header>

                            <div className="grid-wrapper">
                                <div className="col-4">
                                    <span className="icon major style1 fa-desktop"></span>
                                    <h5>LP制作</h5>
                                    <hr/>
                                    <p>ご準備いただきましたデザイン案を基に、LP(Landing Page)を制作いたします。テキスト・写真などの素材はご準備ください。</p>
                                    <p>料金：10,000円〜<br/>納期目安：2週間以内</p>
                                </div>
                                <div className="col-4">
                                    <span className="icon major style1 fa-wordpress"></span>
                                    <h5>WordPressサイト制作</h5>
                                    <hr/>
                                    <p>ホームページ、ブログなどお客様の目的に合わせてWordPressサイトを制作いたします。サーバーの設定、ドメインの取得も併せてサポートいたします。</p>
                                    <p>料金：30,000円〜<br/>納期目安：2ヶ月以内</p>
                                </div>
                                <div className="col-4">
                                    <span className="icon major style1 fa-code"></span>
                                    <h5>Gatsbyサイト制作</h5>
                                    <hr/>
                                    <p>爆速で有名なGatsbyという技術を用いて、ホームページ、ブログを制作いたします。Gatsbyでブログを作る場合は、ContentfulをCMSとして使用します。サーバーの設定、ドメインの取得も併せてサポートいたします。</p>
                                    <p>料金：20,000円〜<br/>納期目安：1ヶ月以内</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="about" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Webreelanceとは</h3>
                                <p>Webreelanceとは、WebとFreelanceを組み合わせた造語です。</p><br />
                                <p>Webを使って、そしてFreelanceとして、社会に価値を還元したい、という僕自身のサブタイトルのような位置付けでこの言葉を作りました。</p><br />
                                <p>過去数年間に蓄えてきたエンジニアとしての力を使って、お客様の目的に合わせたWebを制作いたします。</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>自己紹介</h3>
                                <p><a href="https://kinnikumegane.com" target="_blank" rel="noopener noreferrer">筋肉めがね</a></p>
                                <p>九州出身、ドイツ在住の駆け出しエンジニアです。</p><br />
                                <p>1993　初めてコンピューターゲームで遊ぶ。Super Depthという潜水艦ゲーム。</p>
                                <p>2013　Codecademyでプログラミングを学ぶ。</p>
                                <p>2019　<a href="https://kinnikumegane.com" target="_blank" rel="noopener noreferrer">日本語でのブログサイト</a>を開設。</p>
                                <p>2020　本サイトを作成。</p>
                            </header>
                        </article>
                    </section>
                    <section id="portfolio">
                        <div className="inner">
                            <header className="major">
                                <h2>制作実績</h2>
                            </header>
                            <div className="grid-wrapper">
                                <div className="col-4">
                                    <a href="https://kinnikumegane.com" target="_blank" rel="noopener noreferrer">
                                        <div className="image-trim">
                                            <img src={p1} alt=""/>
                                        </div>
                                    </a>
                                    <a href="https://kinnikumegane.com" target="_blank" rel="noopener noreferrer">
                                        <div className="portfolio-description">
                                            <p>Gatsbyブログ</p>
                                            <h6>記事ソース：Markdown<br/>サーバー：Netlify</h6>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="https://yang-musikzimmer.com" target="_blank" rel="noopener noreferrer">
                                        <div className="image-trim">
                                            <img src={p2} alt=""/>
                                        </div>
                                    </a>
                                    <a href="https://yang-musikzimmer.com" target="_blank" rel="noopener noreferrer">
                                        <div className="portfolio-description">
                                                <p>Gatsbyブログ</p>
                                                <h6>CMS:Contentful<br/>サーバー：Netlify</h6>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="#banner">
                                        <div className="image-trim">
                                            <img src={p3} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#banner">
                                        <div className="portfolio-description">
                                            <p>Gatsby LP</p>
                                            <h6>サーバー：Netlify</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex