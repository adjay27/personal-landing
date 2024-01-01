import Contacts from "../pages/Contacts";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";

export default function Landing() {
  return (
    <>
      <div className="mx-auto max-w-7xl bg-custom-white">
        <Profile />

        <div className=" w-full top-[773px] absolute flex-col justify-center items-center gap-20 inline-flex">
          <div>
            <Projects />
          </div>
          <Contacts />
        </div>
      </div>
    </>
  );
}
