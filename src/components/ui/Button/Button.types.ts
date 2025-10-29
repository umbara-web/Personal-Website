type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type { ButtonProps };
