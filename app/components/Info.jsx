export default function Info(props) {
  return (
    <>
      <h2 className="mt-4 text-2xl text-center">{props.name}</h2>
      <p className="text-[var(--primary-green)] text-center">
        {props.location}
      </p>
      <p className="mt-6 text-gray-300 mb-6 text-center">
        &quot;Front-end developer and avid reader.&quot;
      </p>
    </>
  );
}
