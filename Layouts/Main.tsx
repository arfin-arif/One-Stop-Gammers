import Navbar from "../components/Navbar/Navbar";
import Categories from './../pages/Categories'
import TrendingMatch from '../components/trendingMatch';
import Footer from "../components/footer"
import Trending from "../components/Trending/Trending"
import Carrousel from '../components/Carrousel'
import BigBanner from '../components/BigBanner'
import ContacForm from "../components/contacForm";
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
      <TrendingMatch />
      <ContacForm></ContacForm>
      <Footer></Footer>

    </>
  );
};

export default Main;
