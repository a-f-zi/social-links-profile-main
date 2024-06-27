import Img from "./components/Img";
import Info from "./components/Info";
import Links from "./components/Links";

export default function Home() {
  return (
    <main className="bg-[var(--dark-grey)] w-[378px] h-[603px] rounded-xl flex flex-col items-center p-8 sm:mx-4 sm:h-auto">
      <Img src={"/avatar.jpeg"} />
      <Info name="Jessica Randall" location="London, United Kingdom" />
      <Links title="GitHub" href="#"></Links>
      <Links title="Frontend Mentor" href="#"></Links>
      <Links title="Linkedin" href="#"></Links>
      <Links title="Twitter" href="#"></Links>
      <Links title="Instagram" href="#"></Links>
    </main>
  );
}
