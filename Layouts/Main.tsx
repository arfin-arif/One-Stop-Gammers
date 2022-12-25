import Navbar from "../components/Navbar/Navbar";
import Categories from '../components/Categories/Categories';

interface Props {
  children?: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Categories/>
      <h1>Footer</h1>
    </>
  );
};

export default Main;
