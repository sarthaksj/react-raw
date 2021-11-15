import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Main from '../Components/Main';

const Home: NextPage = () => {
  return (
    <Main />
  )
}
export default Home;


export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {

    }
  }
}