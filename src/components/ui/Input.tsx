import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
	return (
		<input
			{...props}
			className={`px-2 py-1 rounded-lg text-center outline-none focus:scale-105 text-black placeholder:text-black/60 ${className}`}
		/>
	);
};
