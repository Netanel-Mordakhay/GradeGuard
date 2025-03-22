import AuthenticationLayout from "@/app/components/layout/AuthenticationLayout";
import Features from "@/app/components/login/Features";
import RegisterForm from "@/app/components/register/RegisterForm";

export const metadata = {
  title: "GradeGuard - Registration",
  description: "Manage your courses efficiently with GradeGuard",
};

const RegisterPage = () => {
  return (
    <AuthenticationLayout>
      {/* Register form */}
      <RegisterForm />
      {/* Features */}
      <Features />
    </AuthenticationLayout>
  );
};

export default RegisterPage;
