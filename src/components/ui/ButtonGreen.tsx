import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonGreenProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const ButtonGreen = ({ children, className, ...props }: ButtonGreenProps) => {
	return (
		<button
			{...props}
			className={`bg-green-500 text-white py-1 px-2 rounded-lg w-full hover:bg-green-600 transition-colors cursor-pointer ${className}`}
		>
			{children}
		</button>
	);
};
export default ButtonGreen;
