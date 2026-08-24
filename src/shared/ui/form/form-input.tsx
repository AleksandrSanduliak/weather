'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '@/shared/ui/shadcn-components/field';
import { Input } from '../shadcn-components/input';

interface FormInputProps {
  name: string;
  title: string;
  inputProps?: React.ComponentProps<'input'>;
}

export default function FormInput({ name, title, inputProps }: FormInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{title}</FieldLabel>
          <Input {...field} {...inputProps} id={field.name} aria-invalid={fieldState.invalid} />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
