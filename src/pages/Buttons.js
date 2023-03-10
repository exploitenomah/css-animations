import { ButtonBase } from "../components/buttons";




export default function Buttons() {
  
  return (
    <main className="flex flex-wrap gap-6 items-center align-center justify-start">
      <ButtonBase className={`relative text-purple-800 linear duration-300 border-2 border-purple-800
        before:absolute before:w-full before:h-full before:-z-10 before:bg-purple-900/80
        before:top-0 before:left-0 before:rotate-[-90deg] before:origin-bottom-left
        before:linear before:duration-300 before:delay-75 hover:before:rotate-0 hover:text-white hover:rounded-md`}>
         rotate
      </ButtonBase>
      <ButtonBase className={`relative text-purple-800 linear duration-300 border-2 border-purple-800
        before:absolute before:w-full before:h-full before:-z-10 before:bg-purple-900/80
        before:top-0 before:left-0 before:translate-x-[-100%] before:origin-bottom-left
        before:linear before:duration-300 before:delay-75 hover:before:translate-x-0 hover:text-white hover:rounded-md`}>
         slide
      </ButtonBase>
      <ButtonBase className={`relative tracking-tighter text-purple-800 linear duration-300 border-2 border-purple-800
        hover:border-4 hover:tracking-[1.8px] hover:rounded-md hover:font-bold`}>
         stretch
      </ButtonBase>
      <ButtonBase className={`relative text-purple-800 linear duration-300 border-2 border-purple-800
        before:absolute before:w-full before:h-full before:z-10 before:bg-purple-900/80
        before:top-0 before:left-0 before:translate-y-[-100%] before:origin-bottom-left before:text-white 
        before:content-center before:flex before:justify-center before:items-center
        before:content-["Done!"] before:linear before:duration-300 before:delay-75 hover:before:translate-y-0
        hover:text-white hover:rounded-md`}>
         slide from top
      </ButtonBase>
      <ButtonBase className={`relative text-purple-800 linear duration-300 border-2 border-purple-800
        before:absolute before:h-[500px] before:w-1/5 before:z-10 before:bg-white
        before:top-0 before:left-0 before:translate-y-0 before:rotate-[-45deg]
        before:linear before:duration-500 hover:before:translate-y-[-100%] hover:before:rotate-[-45deg]
        hover:text-white hover:bg-purple-900/80`}>
         glow
      </ButtonBase>
      <ButtonBase className={`relative text-transparent linear duration-300 border-2 border-black 
        before:top-0 before:left-0 before:translate-y-0 before:linear before:duration-500 after:linear after:duration-500  
        before:absolute before:h-full before:w-full before:z-10 before:bg-purple-800/80 before:flex
        before:content-center before:justify-center before:items-center before:text-white before:content-[attr(pseudo)]
        after:flex after:content-center after:justify-center after:items-center after:text-white
        after:content-[attr(pseudo)] after:translate-y-[100%] after:top-0 after:left-0 
        after:translate-x-[-100%] after:absolute after:w-full after:h-full after:z-10 
        after:bg-purple-800/80 hover:before:translate-x-[100%] hover:before:translate-y-[-100%]
         hover:after:translate-x-0 hover:after:translate-y-0`}
        pseudo={"Swapping!"}>
          Swapping!
      </ButtonBase>
      <ButtonBase 
        pseudo={"text scaling"}
        className={`relative text-purple-800 linear duration-300 border-2 border-purple-800
        before:absolute before:h-full before:w-full before:z-10 before:bg-transparent 
        before:flex before:justify-center before:items-center before:text-transparent
        before:top-0 before:left-0 before:scale-[3] before:content-[attr(pseudo)] 
        before:linear before:duration-500 hover:before:scale-100 hover:before:bg-purple-800
        hover:text-transparent hover:before:text-white`}>
         text scaling
      </ButtonBase>
      <ButtonBase className={`relative text-purple-800 bg-transparent linear duration-300 border-2 border-purple-800
        before:absolute before:h-[0%] before:w-full before:z-[-1] before:bg-purple-900/80 before:rounded-b-[50%]
        before:top-0 before:left-0 before:linear before:duration-500
        hover:text-white hover:before:h-[200%]`}>
         circular bg
      </ButtonBase>
      <ButtonBase className={`relative text-purple-800 bg-transparent linear duration-[400ms] border-purple-800
       border-2 before:absolute before:top-0 before:left-0 before:origin-top before:content-center before:rotate-x-270 
       before:content-[attr(pseudo)] before:flex
       before:items-center before:justify-center before:ease-linear before:duration-[400ms]
       before:w-full before:h-full before:bg-purple-800 before:text-white
       after:absolute after:top-0 after:left-0 after:origin-top after:content-center after:rotate-x-270 
       after:content-[attr(pseudo)] after:flex
       after:items-center after:justify-center after:ease-linear after:duration-[400ms]
       after:w-full after:h-full after:bg-fuchsia-600/80 after:text-white after:delay-[200ms]
       hover:before:rotate-x-0 hover:after:rotate-x-0`} pseudo={"Layers!"}>
         Layers!
      </ButtonBase>
      <ButtonBase className={`relative text-transparent bg-black/20 linear duration-300 border-2 border-purple-800
        before:absolute before:h-full before:w-full before:z-[1] before:bg-purple-900/80 before:text-white
        before:content-[attr(pseudo)] before:flex before:items-center before:justify-center 
        before:top-0 before:left-0 before:linear before:duration-500
        after:absolute after:h-full after:w-full after:z-[4] after:bg-purple-900/80 after:text-white
        after:content-[attr(pseudo)] after:flex after:items-center after:justify-center 
        after:top-0 after:left-0 after:linear after:duration-500
        after:scale-0 after:opacity-0 after:translate-x-[-100%]
        hover:after:rotate-y-360 hover:after:scale-[1] hover:after:translate-x-[0%]  hover:after:opacity-100
        hover:before:rotate-y-360 hover:before:scale-0 hover:before:translate-x-[100%]  hover:before:opacity-0`}
        pseudo={"layer swapping"}>
         layer swapping
      </ButtonBase>
      <ButtonBase className={`relative text-purple-800 bg-transparent linear duration-300 overflow-visible
        before:w-4 before:h-4 before:rounded-full before:absolute before:top-[50%] before:left-0 before:translate-y-[-50%]
        before:linear before:duration-300 before:opacity-0 before:-z-10 
        before:bg-purple-800 before:text-purple-800 before:shadow-[-30px_0px_0px_0px_currentColor]
        after:w-4 after:h-4 after:rounded-full after:absolute after:right-0 after:top-[50%] after:translate-y-[-50%]
        after:linear after:duration-300 after:opacity-0 after:-z-10
        after:bg-purple-800 after:shadow-[30px_0px_0px_0px_currentColor]
        [&>span]:scale-0 hover:text-white hover:before:text-purple-800/80 hover:after:text-purple-800/80 
        hover:before:left-[50%] hover:before:translate-x-[-50%]
        hover:after:left-[50%] hover:after:translate-x-[-50%] hover:after:bg-purple-transparent
        hover:after:opacity-100 hover:before:opacity-100 [&>span]:hover:scale-100 [&>span]:hover:opacity-100
        `}>
         circles to bg
         <span className="block bg-purple-900/80 absolute w-full h-full -z-10 top-0 left-0 linear duration-300 opacity-0 delay-[400ms] "></span>
      </ButtonBase>
    </main>
  )
}