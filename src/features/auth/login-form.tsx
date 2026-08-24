'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import AuthLayout from './auth-layout';
import { FieldGroup } from '@/shared/ui/shadcn-components/field';
import FormInput from '@/shared/ui/form/form-input';
import { Button } from '@/shared/ui/shadcn-components/button';

const LoginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(3, { error: 'Длина пароля должна быть 6 и более символов' }),
});

type LoginForm = z.infer<typeof LoginFormSchema>;
interface LoginFormProps {}

export default function LoginForm({}: LoginFormProps) {
  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: { email: '', password: '' },
  });
  console.log('form', form.formState.errors);
  const onSubmit = (data: LoginForm) => {
    console.log('data', data);
    console.log('data', data);
  };
  return (
    <AuthLayout
      titleSlot={<h4 className="text-[var(--dark-gray)]">Войти</h4>}
      formSlot={
        <FormProvider {...form}>
          <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="flex flex-col gap-6">
              <FormInput title="Email" name="email" />
              <FormInput title="Пароль" name="password" />
            </FieldGroup>
          </form>
        </FormProvider>
      }
      footerSlot={
        <Button type="submit" variant="default" form="login-form">
          Отправить
        </Button>
      }
    />
  );
}
