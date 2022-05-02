export default function MenuHam() {
  return (
    <div className="group inline-block ">
      <button className="outline-none focus:outline-none px-3 py-1 bg-white flex items-center min-w-32">
        <span className="pr-1 font-semibold flex-1">
          <div>
            {/* Hamburguer menu */}
            <button className="relative group">
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                  <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                  <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
             {/* Hamburguer menu */}
          </div>
        </span>
      </button>
      <ul 
        className="bg-white border rounded-sm transform scale-0 focus:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
      >
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>

        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
      </ul>

      <style>{`
       /* since nested groupes are not supported we have to use 
       regular css for the nested dropdowns 
    */
    li>ul                 { transform: translatex(100%) scale(0) }
    li:hover>ul           { transform: translatex(101%) scale(1) }
    li > button svg       { transform: rotate(-90deg) }
    li:hover > button svg { transform: rotate(-270deg) }
  
    /* Below styles fake what can be achieved with the tailwind config
       you need to add the group-hover variant to scale and define your custom
       min width style.
       See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
       for implementation with config file
    */
    .group:hover .group-hover\:scale-100 { transform: scale(1) }
    .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
    .scale-0 { transform: scale(0) }
    .min-w-32 { min-width: 8rem }
    `}</style>
    </div>
  );
}
