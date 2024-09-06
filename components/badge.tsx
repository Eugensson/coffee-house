import Image from "next/image";

interface BadgeProps {
  containerStyles?: string;
}

export const Badge: React.FC<BadgeProps> = ({ containerStyles }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src="/assets/badge.svg"
        alt="badge"
        fill
        className="object-contain"
      />
    </div>
  );
};
