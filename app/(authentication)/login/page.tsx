import Features from "@/app/components/login/Features";
import AuthenticationLayout from "@/app/components/layout/AuthenticationLayout";
import LoginForm from "@/app/components/login/LoginForm";

export const metadata = {
  title: "GradeGuard",
  description: "Manage your courses efficiently with GradeGuard",
};

const LoginPage = () => {
  return (
    <AuthenticationLayout>
      {/* Login form */}
      <LoginForm />
      {/* Features */}
      <Features />
    </AuthenticationLayout>
  );
};

export default LoginPage;
