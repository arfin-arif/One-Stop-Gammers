import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

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
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleOAuthSignIn = (provider: string) => signIn(provider);

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (session) {
    push("/");
    return <div>you are already signed in</div>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (res?.ok) {
      push("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          value={userInfo.email}
          type="email"
          placeholder="Your Email"
        />
        <br />
        <br />
        <input
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          value={userInfo.password}
          type="password"
          placeholder="Your Password"
        />
        <button
          type="submit"
          className="bg-blue-400 p-5 rounded mb-5 flex justify-center items-center mt-5"
        >
          Register
        </button>
        {providers.map((provider) => (
          <div key={provider.id}>
            <button
              onClick={() =>
                handleOAuthSignIn(provider.name.toLocaleLowerCase())
              }
              className="bg-blue-400 p-5 rounded mb-5 flex justify-center items-center mt-5"
            >
              <provider.Icon />
              <span>Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
      </form>
    </>
  );
};

export default Signin;
