import { GetStaticProps } from 'next';
import { Components } from '../../../raw-components';
import { Layout } from '../../../Modules/components/Layout';

export default Layout;

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            Components,
        },
    };
};
