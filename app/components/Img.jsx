import Image from "next/image";

export default function Img(props) {
  return (
    <>
      <Image
        src={props.src}
        alt="My Image"
        width="100"
        height="100"
        optimize={true}
        placeholder="empty"
        className="rounded-full"
      />
    </>
  );
}
