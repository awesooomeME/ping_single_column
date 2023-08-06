import React from 'react'

type InputProps = {
    placeholder: string,
    fieldType: string,
    errorMessage: string
}

const Input = ({placeholder, fieldType, errorMessage}: InputProps) => {
  return (
    <div className='grid gap-2'>
        <input placeholder={placeholder}
            type={fieldType} 
            className='border-pale_blue py-3 peer invalid:border-light_red
            focus:outline-none focus:border-pale_blue
            px-5 rounded-full border-2 text-base placeholder:text-base'>
        </input>
        <p className='text-xs italic text-center text-light_red hidden peer-invalid:block'>
            {errorMessage}
        </p>
    </div>
  )
}

export default Input