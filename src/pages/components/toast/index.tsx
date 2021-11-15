import { GetStaticProps } from 'next';
import { Components } from '../../../raw-components';
import { Toast } from '../../../Modules/components/Toast';

export default Toast;

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            Components,
        },
    };
};
