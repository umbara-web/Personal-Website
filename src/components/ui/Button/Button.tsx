import React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './Button.types';

const variantClasses = {
  primary:
    'rounded-full text-white font-bold inset-shadow-sm inset-shadow-white/100 dark:inset-shadow-black/80 px-6 hover:bg-primary/80 bg-gradient-to-l from-primary-500 to-primary-700',
  ghost: 'rounded-full font-bold',
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={clsx('p-2 ', variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
