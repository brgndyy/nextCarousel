import ChordImage from "./ChordImage";

export interface CProps {
  id: string;
  src: string;
  CName: string;
  key: string;
}

export default function ChordList() {
  const imgSrc = [
    {
      id: "CM7ver1.png",
      src: "/chordImages/CM7ver1.png",
      key: "Ckey",
      CName: "CM7",
    },
    {
      id: "CM7ver2.png",
      src: "/chordImages/CM7ver2.png",
      key: "Ckey",
      CName: "CM7",
    },
    {
      id: "CM9ver1.png",
      src: "/chordImages/CM9ver1.png",
      key: "Ckey",
      CName: "CM9",
    },
    {
      id: "CM9ver2.png",
      src: "/chordImages/CM9ver2.png",
      key: "Ckey",
      CName: "CM9",
    },
  ];

  return (
    <>
      <ul>
        {imgSrc.map((image) => {
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
