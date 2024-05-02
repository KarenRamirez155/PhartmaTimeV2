import { TextareaHTMLAttributes } from 'react';

interface TextAreaTransparentProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextAreaTransparent = ({
	className,
	...props
}: TextAreaTransparentProps) => {
	return (
		<textarea
			{...props}
			className={`bg-transparent hover:scale-105 outline-none border-2 border-white text-center placeholder:text-white/80 ${className}`}
		/>
	);
};
