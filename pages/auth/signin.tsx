import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
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

  const handleOAuthSignIn = (provider: string) => signIn(provider);

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (session) {
    push("/");
    return <div>you are already signed in</div>;
  }

  return (
    <>
      {providers.map((provider) => (
        <div key={provider.id}>
          <button
            onClick={() => handleOAuthSignIn(provider.name.toLocaleLowerCase())}
            className="bg-blue-400 p-5 rounded mb-5 flex justify-center items-center mt-5"
          >
            <provider.Icon />
            <span>Sign in with {provider.name}</span>
          </button>
        </div>
      ))}
    </>
  );
};

export default Signin;
