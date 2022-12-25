import Navbar from "../components/Navbar/Navbar";
<<<<<<< HEAD
import Categories from '../components/Categories/Categories';

=======
import Footer from "../components/footer"
import Trending from "../components/Trending/Trending"
>>>>>>> 349d47276f1bb1df02a61b5a529bb7a5a2a1edd3
interface Props {
  children?: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
<<<<<<< HEAD
      <Categories/>
      <h1>Footer</h1>
=======
      <Trending></Trending>
      <Footer></Footer>
>>>>>>> 349d47276f1bb1df02a61b5a529bb7a5a2a1edd3
    </>
  );
};

export default Main;
