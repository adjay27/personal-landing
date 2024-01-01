
function Profile() {
  return (
    <>
      <div className="grid relative grid-cols-2 content-between">
        <div className="w-[640px] h-[640px]">
          <div id="left-top" className=" px-2 mt-40">
            <h1 className="text-wrap text-[56px] font-bold font-['Playfair Display'] leading-[76.80px]  text-zinc-800 ">
              Hello, my name is Aditya F Wijaya
            </h1>
            <br />
            <div className="Text w-[486px] text-zinc-500 text-2xl font-normal font-['Nunito'] leading-9">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </div>
            <br />

            <div className="Buttons justify-start items-start gap-3 inline-flex">
              <button className="ButtonPrimary px-6 py-2 bg-blue-400 rounded-lg justify-start items-start flex">
                <div className="Text text-zinc-800 text-lg font-medium font-['Roboto'] leading-[27px]">
                  Projects
                </div>
              </button>
              <button className="ButtonSecondary px-6 py-2 bg-slate-50 rounded-lg border-2 border-zinc-800 justify-start items-start flex">
                <div className="Text text-zinc-800 text-lg font-medium font-['Roboto'] leading-[27px]">
                  LinkedIn
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          id="profile-img"
          className="w-[640px] h-[640px] card flex flex-row relative bg-custom-white  "
        >
          <div className="right-0 flex content-center ml-40 mt-20">
            <img
              className="w-[320px] h-[480px]"
              src="./src/assets/profile.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
