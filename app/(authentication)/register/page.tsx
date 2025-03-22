import AuthenticationLayout from "@/app/components/layout/AuthenticationLayout";
import Features from "@/app/components/login/Features";
import RegisterForm from "@/app/components/register/RegisterForm";
import { Image, Stepper, StepperStep } from "@mantine/core";

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
