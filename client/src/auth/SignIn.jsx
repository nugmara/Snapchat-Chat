
function SignIn() {
    
  return (
    <div>
        <form>
            <input type="text" placeholder="Enter yout username" onChange={(e) => e.target.value} />
            <input type="password" placeholder="Enter your password" onChange={(e) => e.target.value}/>
            <button>Sign in!</button>
        </form>
    </div>
  )
}

export default SignIn