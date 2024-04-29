import { InputHTMLAttributes } from 'react';

interface InputTransparentProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputTransparent = ({
	className,
	...props
}: InputTransparentProps) => {
	return (
		<input
			{...props}
			className={`bg-transparent hover:scale-105 outline-none border-2 border-white text-center placeholder:text-white/80 ${className}`}
		/>
	);
};
