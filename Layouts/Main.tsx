import Navbar from "../components/Navbar/Navbar";
import Categories from '../components/Categories/Categories';

import Footer from "../components/footer"
import Trending from "../components/Trending/Trending"
import Carrousel from '../components/Carrousel'
import BigBanner from '../components/BigBanner'
interface Props {
  children?: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Categories />
      <Trending></Trending>
      <Carrousel></Carrousel>
      <BigBanner></BigBanner>
      <Footer></Footer>
    </>
  );
};

export default Main;
