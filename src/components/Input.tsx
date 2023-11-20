import React, { ChangeEvent, useRef } from 'react';
type InputHOCProps = {
  type: string;
  name: string;
  handleChange: (e: ChangeEvent) => void;
  value: string;
  label: string;
  min?: number;
  max?: number;
  className?: string;
  required?: boolean;
};
const Input = ({
  type,
  name,
  handleChange,
  value,
  label,
  min = 1,
  max = 50,
  className,
  required = true,
}: InputHOCProps) => {
  const inputLabel = useRef(null);
  return (
    <div className={'relative flex flex-col' + ' ' + className}>
      <input
        name={name}
        type={type}
        onChange={handleChange}
        value={value}
        min={min}
        max={max}
        className={'peer border border-black p-3 text-3xl'}
        ref={inputLabel}
      />
      <label
        htmlFor="email"
        onClick={() => {
          if (inputLabel != null) {
            //@ts-ignore
            inputLabel?.current?.focus();
          }
        }}
        className={`absolute cursor-text ${
          value == '' ? 'top-1/2 text-2xl text-gray-500' : 'top-0 text-xl text-gray-700'
        } ${
          required ? "after:text-red-500 after:content-['*']" : ''
        } ml-5 -translate-y-1/2 bg-white px-1  transition-all  peer-focus-visible:top-0 peer-focus-visible:text-xl peer-focus-visible:text-gray-700`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
