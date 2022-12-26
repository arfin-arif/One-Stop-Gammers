import Navbar from "../components/Navbar/Navbar";
import Categories from '../components/Categories/Categories';
import TrendingMatch from '../components/trendingMatch';
import Footer from "../components/footer"
import Trending from "../components/Trending/Trending"
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
      <TrendingMatch />
      <Footer></Footer>

    </>
  );
};

export default Main;
