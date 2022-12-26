// import { useLottie } from "lottie-react";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import game from '../../public/game.json';
import Lottie from "lottie-react";
type Props = {};

const providers = [
  {
    id: 1,
    name: "Google",
    Icon: FaGoogle,
  },
  {
    id: 2,
    name: "Github",
    Icon: FaGithub,
  },
];

const Signin = (props: Props) => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState("");

  const handleOAuthSignIn = (provider: string) => signIn(provider);

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (session) {
    push("/");
    return <div>you are already signed in</div>;
  }

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log("submit");
  //     const res = await signIn("credentials", {
  //       email: userInfo.email,
  //       password: userInfo.password,
  //       redirect: false,
  //     });

  //     if (res?.ok) {
  //       push("/");
  //     }
  //   };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return false;

    toast.success("Check your email for the sign in link.");

    signIn("email", { email, redirect: false });
  };

  // const lottieAnimOptions = {
  // 	animationData: game,
  // 	loop: true,
  // };

  // const { View } = useLottie(lottieAnimOptions);

  return (
    <>
      <Head>
        <title>SignIn</title>
      </Head>
      <div className="grid md:grid-cols-2 gird-cols-1  mx-24 my-12 gap-5  ">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  py-20 h-4/5">


          <form className=" text-center" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Your Email"
              className="input-lg rounded-lg"
            />
            <br />
            <br />
            {/* <input
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            value={userInfo.password}
            type="password"
            placeholder="Your Password"
          /> */}
            <button
              type="submit"
              className="bg-emerald-500 text-white p-5 rounded mb-5 ml-12 md:ml-32 flex justify-center items-center mt-5"
            >
              LogIn
            </button>
            {providers.map((provider) => (
              <div key={provider.id}>
                <button
                  onClick={() =>
                    handleOAuthSignIn(provider.name.toLocaleLowerCase())
                  }
                  className="bg-emerald-500 text-white p-5 md:ml-20 rounded mb-5 flex justify-center items-center mt-5"
                >
                  <provider.Icon />
                  <span>Sign in with {provider.name}</span>
                </button>
              </div>
            ))}
          </form>
        </div>
        <div>
          <Lottie animationData={game} />
        </div>
      </div>
    </>
  );
};

export default Signin;
