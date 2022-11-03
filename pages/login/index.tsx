import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const LogIn = ({}) => (
  <button
    type="button"
    className="rounded-xl bg-blue-600 py-4 px-8 uppercase transition-all hover:bg-blue-400"
    onClick={() => signIn("credentials")}
  >
    Sign in with Email
  </button>
);

export default function Login() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="centered h-screen">
      <form
        className="flex w-[400px] flex-col gap-6
      rounded-xl p-4 text-white shadow-xl"
      >
        <div className="">
          <label htmlFor="name"></label>
          <input
            className="input"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="">
          <label htmlFor="email"></label>
          <input
            className="input"
            id="email"
            type="email"
            placeholder="Your E-mail"
          />
        </div>
        <LogIn />
        <button className="text-slate-600">
          <Link href="register">Register</Link>
        </button>
      </form>
    </div>
  );
}
