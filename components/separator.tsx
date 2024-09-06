import Image from "next/image";

interface SeparatorProps {
  bg?: string;
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  bg = "white",
  className,
}) => {
  const imgSrc =
    bg === "accent"
      ? "/assets/separator-accent.svg"
      : "/assets/separator-white.svg";

  return (
    <div className={`relative w-[160px] h-[26px] mx-auto ${className}`}>
      <Image src={imgSrc} alt="separator" fill className="object-contain" />
    </div>
  );
};
