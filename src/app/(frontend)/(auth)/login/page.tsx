import { LoginForm } from '@/features/auth';
import Container from '@/shared/ui/container';

export default function LoginPage() {
  return (
    <Container>
      <div className="max-w-[36rem]">
        <LoginForm />
      </div>
    </Container>
  );
}
