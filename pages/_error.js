import Layout from '../components/Layout';

const Error = ({ error }) => <Layout title="Errord!">
    {error ? `Request failed with: ${error}` : ``}
    <p>🤦‍♂️😭💩</p>
</Layout>;

export default Error;