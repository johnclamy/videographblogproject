export default function Signin() {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}
