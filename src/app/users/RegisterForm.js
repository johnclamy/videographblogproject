export default function RegisterForm() {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password2">Confirm password:</label>
        <input type="password2" name="password2" id="password2" />
        <input type="submit" value="Sign Up" />
      </form>
      <p>Already registered? <a href="/">Sign in</a></p>
    </div>
  );
}
