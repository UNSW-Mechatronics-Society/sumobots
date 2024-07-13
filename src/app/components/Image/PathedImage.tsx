import Image, { ImageProps } from "next/image";
import config from "@/../next.config.mjs";

export function PathedImage(props: ImageProps) {
  return (
    <Image {...props} src={config.basePath + props.src} alt={props.alt}></Image>
  );
}
