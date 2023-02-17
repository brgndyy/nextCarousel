import { CProps } from "types/type";
import Image from "next/image";
import classes from "./ChordImage.module.css";

export default function ChordImage({ id, src, CName }: CProps) {
  return (
    <li className={classes.chordImageItem}>
      <Image src={src} width={300} height={300} alt={CName} />
      <div className={classes.chordNameContainer}>
        <h1>{CName}</h1>
      </div>
    </li>
  );
}
