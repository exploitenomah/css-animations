import { ButtonBase } from "../components/buttons";




export default function Buttons() {
  
  return (
    <main className="flex flex-wrap gap-6 items-center align-center justify-start">
      <ButtonBase className={`relative text-purple-800 linear duration-300 border-2 border-purple-800
        before:absolute before:w-full before:h-full before:-z-10 before:bg-purple-900/80
        before:top-0 before:left-0 before:rotate-[-90deg] before:origin-bottom-left
        before:linear before:duration-300 before:delay-75 hover:before:rotate-0 hover:text-white hover:rounded-md`}>
         rotate effect
      </ButtonBase>
      <ButtonBase className={`relative text-purple-800 linear duration-300 border-2 border-purple-800
        before:absolute before:w-full before:h-full before:-z-10 before:bg-purple-900/80
        before:top-0 before:left-0 before:translate-x-[-100%] before:origin-bottom-left
        before:linear before:duration-300 before:delay-75 hover:before:translate-x-0 hover:text-white hover:rounded-md`}>
         slide effect
      </ButtonBase>
      <ButtonBase className={`relative tracking-tighter text-purple-800 linear duration-300 border-2 border-purple-800
        hover:border-4 hover:tracking-[1.8px] hover:rounded-md hover:font-bold`}>
         stretch effect
      </ButtonBase>
      <ButtonBase className={`relative text-purple-800 linear duration-300 border-2 border-purple-800
        before:absolute before:w-full before:h-full before:z-10 before:bg-purple-900/80
        before:top-0 before:left-0 before:translate-y-[-100%] before:origin-bottom-left before:text-white 
        before:content-center before:flex before:justify-center before:items-center
        before:content-["Done!"] before:linear before:duration-300 before:delay-75 hover:before:translate-y-0
        hover:text-white hover:rounded-md`}>
         slide from top
      </ButtonBase>
    </main>
  )
}