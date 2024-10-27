import { CSSProperties, useState } from "react";
import CoverImage from "@/components/image/CoverImage";
import ContainImage from "@/components/image/ContainImage";
import { FullSizeIcon } from "@/components/icon";

interface Props {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width: number;
  parentDivStyle?: CSSProperties;
}

export default function SizeToggleImage({
  src,
  alt,
  fallbackSrc = "/dummy/fallback.webp",
  width,
  parentDivStyle,
}: Props) {
  const [fullSize, setFullSize] = useState<boolean>(false);

  const toggleSize = () => {
    setFullSize((prev) => !prev);
  };

  return (
    <div onClick={toggleSize} style={{ position: "relative" }}>
      {fullSize ? (
        <ContainImage src={src} alt={alt} fallbackSrc={fallbackSrc} />
      ) : (
        <CoverImage
          src={src}
          alt={alt}
          fallbackSrc={fallbackSrc}
          parentDivStyle={{ ...parentDivStyle, width: width }}
        />
      )}
      <FullSizeIcon fullSize={fullSize} />
    </div>
  );
}
