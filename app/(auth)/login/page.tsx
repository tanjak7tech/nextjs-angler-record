

import AuthCard from "../../components/auth/AuthCard";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthCard title="Login">
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md bg-neutral-700 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md bg-neutral-700 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
          Login
        </button>
      </form>

      <div className="mt-4 flex justify-between text-sm text-neutral-400">
        <Link href="/forgot-password" className="hover:text-white">
          Forgot password?
        </Link>
        <Link href="/register" className="hover:text-white">
          Create account
        </Link>
      </div>
    </AuthCard>
  );
}
