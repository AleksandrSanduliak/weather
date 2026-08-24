'use client';

import FormInput from '@/shared/ui/form/form-input';
import { FieldGroup } from '@/shared/ui/shadcn-components/field';
// import { Button } from '@base-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import z from 'zod';
import AuthLayout from './auth-layout';
import { Button } from '@/shared/ui/shadcn-components/button';

interface RegisterProps {}
const RegisterFormSchema = z
  .object({
    email: z.email(),
    username: z.string().min(3, { error: 'Длина имени должна быть 3 и более символа' }),
    password: z.string().min(3, { error: 'Длина пароля должна быть 6 и более символов' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password !== data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });
type RegisterForm = z.infer<typeof RegisterFormSchema>;
export default function Register({}: RegisterProps) {
  const form = useForm({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: { email: '', password: '' },
  });
  console.log('form', form.formState.errors);
  const onSubmit = (data: RegisterForm) => {
    console.log('data', data);
    console.log('data', data);
  };

  return (
    <AuthLayout
      titleSlot={<h4 className="text-[var(--dark-gray)]">Регистрация</h4>}
      formSlot={
        <FormProvider {...form}>
          <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="flex flex-col gap-6">
              <FormInput title="Email" name="email" />
              <FormInput title="Имя пользователя" name="username" />
              <FormInput title="Пароль" name="password" />
              <FormInput title="Повторите пароль" name="confirmPassword" />
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
