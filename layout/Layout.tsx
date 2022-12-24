import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>One Stop Gammer</title>
            </Head>
            <Header />
            <main >{children}</main>
            <Footer />
        </>
    );
};

export default Layout;