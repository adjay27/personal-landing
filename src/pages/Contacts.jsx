

function Contacts() {
  return (
    <>
      <div>
        <div className="Text self-stretch text-zinc-800 text-[20px] font-bold font-['Playfair Display'] leading-[60px]">
          Contact Me
        </div>
        <div className="grid grid-flow-col gap-8">
          <div className="h-10 w-27 pr-2 rounded-lg bg-[#0D1117] flex justify-center">
            <img
              className="invert h-auto w-auto m-1"
              src="./src/assets/iconmonstr-github-1.svg"
            />
            <button className="h-10 w-auto text-white">Github</button>
          </div>
          <div className="h-10 w-10  flex justify-center">logo</div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
