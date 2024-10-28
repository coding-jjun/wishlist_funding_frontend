import Image from "next/image";
import { useState } from "react";
import { CSSProperties } from "react";

interface Props {
  src: string;
  alt: string;
  fallbackSrc?: string;
  objectPosition?: string;
  parentDivStyle?: CSSProperties;
}

export default function ContainImage({
  src,
  alt,
  fallbackSrc = "/dummy/fallback.webp",
  objectPosition,
  parentDivStyle,
}: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div
      style={{
        width: "auto",
        height: "30vh",
        ...parentDivStyle,
      }}
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill={true}
        objectFit="contain"
        objectPosition={objectPosition ?? "left top"}
        onError={() => setImgSrc(fallbackSrc)}
      />
    </div>
  );
}
