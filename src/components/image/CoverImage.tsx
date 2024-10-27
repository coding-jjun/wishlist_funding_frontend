import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

interface Props {
  src: string;
  alt: string;
  fallbackSrc?: string;
  parentDivStyle?: CSSProperties;
}

export default function CoverImage({
  src,
  alt,
  fallbackSrc = "/dummy/fallback.webp",
  parentDivStyle,
}: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        aspectRatio: "1 / 1",
        borderRadius: 10,
        ...parentDivStyle,
      }}
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill={true}
        style={{ objectFit: "cover" }}
        onError={() => setImgSrc(fallbackSrc)}
      />
    </div>
  );
}
