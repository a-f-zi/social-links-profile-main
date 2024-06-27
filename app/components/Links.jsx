export default function Links(props) {
  return (
    <>
      <a
        href={props.href}
        className="bg-[var(--grey)] w-full rounded-md text-center py-3 mb-4 font-semibold hover:bg-[var(--primary-green)] hover:text-[var(--off-black)]"
      >
        {props.title}
      </a>
    </>
  );
}
