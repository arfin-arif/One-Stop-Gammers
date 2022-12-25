import Head from "next/head";

type Props = {};

const register = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <form>
        <input type="text" placeholder="username" />
        <br />
        <br />
        <input type="email" placeholder="email" />
        <br />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <br />
        <input type="password" placeholder="confirm password" />
        <br />
        <br />
        <button>Register</button>
        <button className="bg-blue-400 p-5 rounded mb-5 flex justify-center items-center mt-5">
          Google
        </button>
        <button className="bg-blue-400 p-5 rounded mb-5 flex justify-center items-center mt-5">
          GitHub
        </button>
      </form>
    </div>
  );
};

export default register;
