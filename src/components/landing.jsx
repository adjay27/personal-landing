export function Landing() {
  return (
    <>
      <div className="mx-auto max-w-7xl bg-custom-white">
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

              <div className="Buttons justify-start items-start gap-3 inline-flex">
                <button className="ButtonPrimary px-6 py-2 bg-amber-400 rounded-lg justify-start items-start flex">
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
        <div className=" w-full top-[773px] absolute flex-col justify-center items-center gap-20 inline-flex">
          <div className="Frame3351 flex-col justify-center items-center gap-1 flex">
            <div className="Text text-center text-zinc-800 text-5xl font-bold font-['Playfair Display'] leading-[72px]">
              Projects
            </div>
            <div className="Rectangle19 w-[100px] h-1 bg-blue-400 rounded-sm" />
          </div>

          {/* project 1 */}
          <div className=" w-[992px] h-[524px] shadow-md justify-start items-start inline-flex">
            <div className="project-info rounded-l-3xl w-[496px] h-[524px] pl-[50.44px] pr-[38.88px] pt-[146.50px] pb-[145.50px] bg-custom-white flex-col justify-center items-center inline-flex ">
              <div className="Frame3350 h-[232px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="Text self-stretch text-zinc-800 text-[40px] font-bold font-['Playfair Display'] leading-[60px]">
                  Project Name 1
                </div>
                <div className="Text self-stretch text-zinc-500 text-lg font-normal font-['Nunito'] leading-[27px]">
                  I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.
                </div>
                <div className="BotOSecudRio px-6 py-2 rounded-3xl border border-zinc-800 justify-start items-start inline-flex">
                  <button className="Text text-zinc-800 text-lg font-medium font-['Roboto'] leading-[27px]">
                    View Project
                  </button>
                </div>
              </div>
            </div>
            <img
              className="PexelsEllyFairytale38232071 w-[496px] h-[526px] rounded-r-3xl"
              src="https://via.placeholder.com/496x526"
            />
          </div>
          {/* project 2 */}
          <div className=" w-[992px] h-[524px] shadow-md justify-start items-start inline-flex">
            <div className="project-info rounded-l-3xl w-[496px] h-[524px] pl-[50.44px] pr-[38.88px] pt-[146.50px] pb-[145.50px] bg-custom-white flex-col justify-center items-center inline-flex ">
              <div className="Frame3350 h-[232px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="Text self-stretch text-zinc-800 text-[40px] font-bold font-['Playfair Display'] leading-[60px]">
                  Project Name 2
                </div>
                <div className="Text self-stretch text-zinc-500 text-lg font-normal font-['Nunito'] leading-[27px]">
                  I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.
                </div>
                <div className="BotOSecudRio px-6 py-2 rounded-3xl border border-zinc-800 justify-start items-start inline-flex">
                  <button className="Text text-zinc-800 text-lg font-medium font-['Roboto'] leading-[27px]">
                    View Project
                  </button>
                </div>
              </div>
            </div>
            <img
              className="PexelsEllyFairytale38232071 w-[496px] h-[526px] rounded-r-3xl"
              src="https://via.placeholder.com/496x526"
            />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* 
         <div className="card flex flex-row w-full h-full relative bg-slate-100">
        <img
          className="PexelsArtemBeliaikin1832323RemovebgPreview w-[720px] h-[629px] left-[-0px] top-[248px] absolute"
          src="https://via.placeholder.com/720x629"
        />
        
        <div className="basis-1 w-[777px] h-[877px] right-0 absolute"></div>
      </div>

          <div className="flex basis-5 justify-start items-start">
            <div className="Subheadline flex-col justify-start items-start gap-3 flex">
              
            </div>
          </div>
          <div className="flex basis-1 w-[720px] h-[629px] left-[720px] top-0 absolute"></div>
        </div>
        
        <div >
          <div >
            
          </div>
          
          <div className="Project2 h-[524px] rounded-3xl shadow justify-start items-start inline-flex">
            <img
              className="Rectangle7 w-[496px] h-[524px]"
              src="https://via.placeholder.com/496x524"
            />
            <div className="ProjectNfo w-[496px] h-[524px] pl-[50.44px] pr-[38.88px] pt-40 pb-[159px] bg-white flex-col justify-center items-center inline-flex">
              <div className="Frame3350 h-[205px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="Text self-stretch text-zinc-800 text-[40px] font-bold font-['Playfair Display'] leading-[60px]">
                  Project Name
                </div>
                <div className="Text self-stretch text-zinc-500 text-lg font-normal font-['Nunito'] leading-[27px]">
                  What was your role, your deliverables, if the project was
                  personal, freelancing.
                </div>
                <div className="BotOSecudRio px-6 py-2 rounded-3xl border border-zinc-800 justify-start items-start inline-flex">
                  <div className="Text text-zinc-800 text-lg font-medium font-['Roboto'] leading-[27px]">
                    View Project
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Project3 h-[524px] rounded-3xl shadow justify-start items-start inline-flex">
            <div className="ProjectNfo w-[496px] h-[524px] pl-[50.44px] pr-[38.88px] pt-40 pb-[159px] bg-white flex-col justify-center items-center inline-flex">
              <div className="Frame3350 h-[205px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="Text self-stretch text-zinc-800 text-[40px] font-bold font-['Playfair Display'] leading-[60px]">
                  Project Name
                </div>
                <div className="Text self-stretch text-zinc-500 text-lg font-normal font-['Nunito'] leading-[27px]">
                  You can also add in this description the type of the project,
                  if it was for web, mobile, electron.
                </div>
                <div className="BotOSecudRio px-6 py-2 rounded-3xl border border-zinc-800 justify-start items-start inline-flex">
                  <div className="Text text-zinc-800 text-lg font-medium font-['Roboto'] leading-[27px]">
                    View Project
                  </div>
                </div>
              </div>
            </div>
            <img
              className="Rectangle7 w-[496px] h-[524px]"
              src="https://via.placeholder.com/496x524"
            />
          </div>
        </div>
        <div className="Intro h-[408px] left-[120px] top-[110px] absolute flex-col justify-start items-start gap-3 inline-flex">
          <div className="UiUxDesigner self-stretch text-amber-400 text-xl font-bold font-['Nunito'] uppercase">
            Developer
          </div>

          <div >
            
          </div>
        </div>
      </div> */
}
