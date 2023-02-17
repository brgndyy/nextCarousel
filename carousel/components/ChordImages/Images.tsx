import Image from "next/image";
export default function Images() {
  const imgSrc = [
    { id: "CM7ver1.png", src: "/chordImages/CM7ver1.png" },
    {
      id: "CM7ver2.png",
      src: "/chordImages/CM7ver2.png",
    },
    {
      id: "CM9ver1.png",
      src: "/chordImages/CM9ver1.png",
    },
    {
      id: "CM9ver2.png",
      src: "/chordImages/CM9ver2.png",
    },
  ];

  return (
    <>
      {imgSrc.map((image) => {
        return (
          <Image
            key={image.id}
            src={image.src}
            width={300}
            height={400}
            alt="CM7"
          />
        );
      })}
    </>
  );
}
