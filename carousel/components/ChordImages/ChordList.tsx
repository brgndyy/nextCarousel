import ChordImage from "./ChordImage";
import classes from "./ChordList.module.css";
import { imgList } from "DUMMY_IMAGES/DUMMY_IMAGES";

export default function ChordList() {
  return (
    <>
      <ul className={classes.chordListUl}>
        {imgList.map((image) => {
          return (
            <ChordImage
              id={image.id}
              key={image.id}
              src={image.src}
              CName={image.CName}
            />
          );
        })}
      </ul>
    </>
  );
}
