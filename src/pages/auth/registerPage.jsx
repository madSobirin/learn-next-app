import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="container">
      <form className="card">
        <input type="name" placeholder="username" className="input" />
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />

        <button className="button">Register</button>
        <p className="label">
          Sudah Punya Akun?{" "}
          <Link href="/login" className="link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
