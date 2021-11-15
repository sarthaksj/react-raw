import { Modal } from '../../../Modules/components/Modal'
import { GetStaticProps } from 'next';
import { Components } from '../../../raw-components';

export default Modal;

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            Components,
        },
    };
};
