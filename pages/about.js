import Layout from '../components/Layout';
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

export default class About extends Component {
    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/postmechanical");
        const error = res.status > 200 ? res.status : false;
        const data = await res.json();
        return { user: data, error };
    }

    render() {
        const { user, error } = this.props;

        if (error) {
            return <Error error={error}/>
        }

        return (
            <Layout title="About">
                <p>{user.name} - Not a JavaScript programmer.</p>
                <img src={user.avatar_url} alt={user.name + " avatar" } height="200px" />
                <style jsx>{`
                    img {
                        border-radius: 50%;
                    }
                `}</style>
            </Layout>
        );
    }
}