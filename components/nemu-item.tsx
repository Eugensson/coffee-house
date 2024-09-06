import Image from "next/image";

interface MenuItemProps {
  item: {
    imageSrc: string;
    name: string;
    description: string;
    price: number;
  };
}

export const MenuItem: React.FC<MenuItemProps> = ({
  item: { imageSrc, name, description, price },
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex justify-between items-baseline gap-4">
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {name}
          </p>
          <div className="flex-1 border-b border-dashed border-primary" />
          <p className="leading-none font-primary font-semibold text-[30px] text-primary">
            {price.toFixed(2)}
          </p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
