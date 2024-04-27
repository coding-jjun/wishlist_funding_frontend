import Image from "next/image";
import type { CSSProperties } from "react";

interface Props {
  src: string;
  alt: string;
  parentDivStyle?: CSSProperties;
}

export default function CoverImage({ src, alt, parentDivStyle }: Props) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        objectFit: "cover",
        ...parentDivStyle,
      }}
    >
      <Image src={src} alt={alt} fill={true} />
    </div>
  );
}
