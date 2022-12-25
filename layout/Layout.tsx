import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import Trending from '../components/Trending/Trending';

const Layout = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>One Stop Gammer</title>
            </Head>
            <Header />
            <main >{children}</main>
            <Trending></Trending>
    
        </>
    );
};

export default Layout;