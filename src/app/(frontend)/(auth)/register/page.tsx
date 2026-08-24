import RegisterForm from '@/features/auth/register-form';
import Container from '@/shared/ui/container';

export default function RegisterPage() {
  return (
    <Container>
      <div className="max-w-[36rem]">
        <RegisterForm />
      </div>
    </Container>
  );
}
