function SignUp() {
  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">

            </div>
        </div>
      </div>

      <form>
        <input
          type="text"
          placeholder="Enter yout username"
          onChange={(e) => e.target.value}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => e.target.value}
        />
        <button>Sign in!</button>
      </form>
    </section>
  );
}

export default SignUp;
