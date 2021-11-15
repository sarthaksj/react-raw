import { GetStaticProps } from 'next';
import { Components } from '../../../raw-components';
import { Dropdown } from '../../../Modules/components/Dropdown';

export default Dropdown;

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            Components,
        },
    };
};
