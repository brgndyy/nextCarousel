import { CProps } from "./ChordList";
import Image from "next/image";

export default function ChordImage({ id, src, CName }: CProps) {
  return (
    <li>
      <Image src={src} width={300} height={300} alt={CName} />
      <h1>{CName}</h1>
    </li>
  );
}
