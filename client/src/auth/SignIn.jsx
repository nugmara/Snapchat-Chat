
function SignIn() {
    
  return (
    <section className="bg-transparent">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img className="w-8 h-8 mr-2" src="../../snapchat.svg" alt="sp" />
        Phantom Pals
      </a>
      <div className="w-full drop-shadow-2xl bg-neutral-900 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div className="relative mb-4" data-te-input-wrapper-init>
              <input
                type="email"
                name="email"
                id="email"
                className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-200 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 dark:text-white"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Email
              </label>
            </div>
            <div className="relative mb-4 group" data-te-input-wrapper-init>
              <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-[blue] data-[te-input-state-active]:placeholder-[blue] motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 dark:text-white"
                id="password"
                name="password"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-blue"
              >
                Password
              </label>
            </div>
           
           
            <button
              type="submit"
              className="custom-btn-login w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Log In
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SignIn