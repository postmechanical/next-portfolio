import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charset="utf-8"/>
                    <meta name="description" content="A site for my Next.js portfolio."/>
                    <meta name="robots" content="noindex,nofollow"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link
                        rel="preload"
                        href="/fonts/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
                <style global jsx>{`
                    body {
                        font-family: 'Inter', sans-serif;
                    }
                `}</style>
            </Html>
        )
    }
}