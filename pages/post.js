import Layout from '../components/Layout';
import { Component } from "react";
import { withRouter } from "next/router";

class Post extends Component {
    static async getInitialProps() {
        const res = await fetch("https://hipsum.co/api/?type=hipster-centric&paras=3");
        const error = res.status > 200 ? res.status : false;
        const data = await res.json();
        return { content: data, error };
    }
    render() {
        const { content, error, router } = this.props;

        if (error) {
            return <Error error={error}/>
        }

        return (
            <Layout title={router.query.title}>
                {content.map((value, index) => {
                    return <p key={index} className={index == 0 ? `firstParagraph`: ``}>{value}</p>
                })}
                <style jsx>{`
                    p {
                        max-width: 80vw;
                        text-align: left;
                    }
                    .firstParagraph::first-letter {
                        float: left;
                        font-size: 5rem;
                        line-height: 60px;
                        padding-top: 4px;
                        padding-right: 8px;
                    }
                `}</style>
            </Layout>
        );
    }
}

export default withRouter(Post);