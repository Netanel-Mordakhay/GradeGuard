import Features from "@/app/components/login/Features";
import AuthenticationLayout from "@/app/components/layout/AuthenticationLayout";

import LoginForm from "@/app/components/login/LoginForm";

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
