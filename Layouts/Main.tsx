import Navbar from "../components/Navbar/Navbar";
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
      <Trending></Trending>
      <Footer></Footer>
    </>
  );
};

export default Main;
