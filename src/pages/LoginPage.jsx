import { LoginForm } from "src/components";

export default function LoginPage({ userLogination }) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-[#1CB5E0] to-[#000851]">
      <LoginForm userLogination={userLogination} />
    </div>
  );
}
