interface PersadoLogoProps {
  className?: string;
}

export default function PersadoLogo({ className = "" }: PersadoLogoProps) {
  return (
    <div className={`persado-logo font-bold relative ${className}`}>
      <span className="relative">
        <span className="text-[#FF0033] mr-0.5 absolute -left-2">&#91;</span>
        PERSADO
        <span className="text-[#FF0033] ml-0.5 absolute -right-2">&#93;</span>
      </span>
    </div>
  );
}
