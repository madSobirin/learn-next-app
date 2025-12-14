import AuthForm from "@/components/AuthForm/AuthForm";
import InputGroup from "@/components/ui/input/index";

const loginPage = () => {
  return (
    <>
      <AuthForm
        title="Login Akun"
        buttonText="Masuk"
        footerText="Belum punya akun?"
        footerUrl="/register"
        footerLinkText="Daftar Sekarang"
      >
        <InputGroup
          label="Email"
          type="email"
          placeholder="Masukkan email..."
        />
        <InputGroup
          label="Password"
          type="password"
          placeholder="Masukkan password..."
        />
      </AuthForm>
    </>
  );
};

export default loginPage;
