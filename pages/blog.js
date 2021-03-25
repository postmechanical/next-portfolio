import Layout from '../components/Layout';
import Link from "next/link";
import styled from 'styled-components';

import fetch from "isomorphic-unfetch";
import Error from "./_error";

const PostList = ({ children }) => (
    <ul>
        {children}
    </ul>
);

const PostListItem = ({ slug, title }) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${encodeURIComponent(title)}`}>
            <PostLink>{title}</PostLink>
        </Link>
        <style jsx>{`
            li {
                text-align: left;
            }
        `}</style>
    </li>
);

const PostLink = styled.a`
    color: #222222;
    text-decoration: none;

    :hover {
        color: #606D7A;
    }
`

const Blog = () => (
    <Layout title="Blarg">
        <PostList>
            <PostListItem slug="my-reaction" title="My Reaction..."/>
            <PostListItem slug="another-day-another-js-framework" title="Another day, another JS framework."/>
            <PostListItem slug="strings-all-the-way-down" title="Strings all the way down."/>
            <PostListItem slug="another-helping-of-boiler-plate" title="Thank you, may I please have another helping of boiler plate?"/>
        </PostList>
    </Layout>
);

export default Blog;