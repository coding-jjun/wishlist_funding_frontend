import Image from "next/image";
import { CSSProperties } from "react";

interface Props {
  src: string;
  alt: string;
  parentDivStyle?: CSSProperties;
}

export default function ContainImage({ src, alt, parentDivStyle }: Props) {
  return (
    <div
      style={{
        width: "auto",
        height: "30vh",
        ...parentDivStyle,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        objectFit="contain"
        objectPosition="left top"
      />
    </div>
  );
}
