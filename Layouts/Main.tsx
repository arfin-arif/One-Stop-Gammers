import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer"

interface Props {
  children?: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}

      <Footer></Footer>

    </>
  );
};

export default Main;
