import Navbar from "../components/Navbar/Navbar";
import Categories from '../components/Categories/Categories';

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
      <Categories/>
      <Trending></Trending>
      <Footer></Footer>
    </>
  );
};

export default Main;
