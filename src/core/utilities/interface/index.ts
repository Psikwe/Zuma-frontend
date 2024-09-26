export type IButton = {
  type?: "button" | "reset" | "submit";
  title?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  children?: any;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  attr?: any;
};
