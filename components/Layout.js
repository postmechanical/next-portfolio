import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
    console.log("Router.onRouteChangeStart: " + url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = Router.onRouteChangeComplete;

const Layout = ({ children, title }) => (
    <>
        <div className="root">
            <Head>
                <title>Next.js Portfolio Project</title>
            </Head>
            <header>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/hireme"><a>Hire Me</a></Link>
                <Link href="/blog"><a>Blarg</a></Link>
            </header>
            <h1>{ title }</h1>
            <div className="content">
                { children }
            </div>
            <footer>&copy; { new Date().getFullYear() }</footer>
            <style jsx>{`
                .root {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                header {
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    padding: 1em;
                    font-size: 1.2rem;
                    background: #FFE574;
                }
                header a {
                    color: #222222;
                    text-decoration: none;
                }
                header a:hover {
                    color: #606D7A;
                }
                .content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    max-width: 90vw;
                    text-align: center;
                }
                footer {
                    padding: 1em;
                }
            `}
            </style>
            <style global jsx>{`
                body {
                    margin: 0;
                    font-size: 110%;
                    background: #f0f0f0;
                }
            `}</style>
        </div>
    </>
);

export default Layout;