import { clsx } from 'clsx';

interface CustomButtonProps {
  value: string;
  className?: string;
  navigateTo: (page: string, category? : any) => void;
}

export default function CustomButton({ value, className, navigateTo }: CustomButtonProps) {
  return (
    <div className="transition-transform duration-100 hover:scale-[1.1] hover:cursor-pointer">
  <div
    className={clsx(
      "relative text-white text-lg font-normal px-6 py-2 rounded-md border-2 border-black bg-orange-500 hover:bg-red-600 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
      className
    )}
    onClick={(navigateTo)}
  >
    {value}
  </div>
</div>

  );
}
