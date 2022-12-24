import Navbar from "../components/Navbar/Navbar";

interface Props {
  children?: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <h1>Footer</h1>
    </>
  );
};

export default Main;
