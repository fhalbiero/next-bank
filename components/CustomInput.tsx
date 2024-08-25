import React from 'react'
import { z } from 'zod'
import { FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

type CustomInputProps = {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    type?: string,
}

export default function CustomInput({ control, name, label, placeholder, type }: CustomInputProps) {
  return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className="form-item">
                <FormLabel 
                    className="form-label"
                    htmlFor={name}
                >
                    {label}
                </FormLabel>
                <div className="flex flex-col w-full">
                    <FormControl>
                        <Input
                            className="input-css"
                            placeholder={placeholder}
                            type={name === 'password' ? 'password' : 'text'}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage className="form-message mt-2" />
                </div>
            </div>
        )}
    />
  )
}
