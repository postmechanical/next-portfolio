import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charset="utf-8"/>
                    <meta name="description" content="A site for my Next.js portfolio."/>
                    <meta name="robots" content="noindex,nofollow"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/> 
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
                <style global jsx>{`
                    body {
                        font-family: 'Open Sans', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}