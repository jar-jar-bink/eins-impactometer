import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";

type UserRegister = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const session = useSession();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    } as UserRegister,
  });

  const onRegister = async (values: UserRegister) => {
    const response = await axios.post("http://localhost:3000/api/users", {
      data: values,
    });
  };

  return (
    <div className="centered h-screen">
      <h2>Register</h2>
      <form
        onSubmit={form.handleSubmit(onRegister)}
        autoComplete="off"
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
            {...form.register("name")}
          />
        </div>
        <div className="">
          <label htmlFor="email"></label>
          <input
            autoComplete="off"
            className="input"
            id="email"
            type="email"
            placeholder="Your E-mail"
            {...form.register("email")}
          />
        </div>

        <div className="">
          <label htmlFor="password"></label>
          <input
            className="input"
            autoComplete="password"
            id="password"
            type="password"
            placeholder="Your Name"
            {...form.register("password")}
          />
        </div>

        <button className="rounded-xl bg-blue-600 py-4 px-8 uppercase transition-all hover:bg-blue-400">
          Submit
        </button>
      </form>
    </div>
  );
}
