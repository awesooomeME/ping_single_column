'use client'

import Input from "./Input"

export const FormInput = () => {
  const fields = [
    {
        placeholder: 'Your email address...',
        fieldType: 'email',
        errorMessage: 'Please provide a valid email address'
    }
  ]

  return (
    <form className="grid text-base w-full gap-5">
        {fields.map((field: any) => <Input {...field}/>)}
        <button className="bg-blue text-white py-3 rounded-full">
            Notify Me
        </button>
    </form>
  )
}
