

export default function Login() {
  return (
    <div className="h-screen centered">
      <form className="w-[400px] text-white rounded-xl shadow-xl
      flex flex-col gap-6 p-4">
        <div className="">
          <label htmlFor="name"></label>
          <input className="input" id="name" type="text"
            placeholder="Your Name" />
        </div>
        <div className="">
          <label htmlFor="email"></label>
          <input className="input" id="email" type="email"
            placeholder="Your E-mail" />
        </div>
        <button type="submit" className="bg-blue-600 py-4 px-8 transition-all hover:bg-blue-400 uppercase rounded-xl">Login</button>
      </form>
    </div>
  )
} 
