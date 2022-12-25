import { useCallback, createElement } from "react"

export const ButtonBase = ({ children, onClick, as, ...props}) => {

  const handleClick = useCallback((e) => {
    //post button click
    // e.target.dataset.name
    onClick && onClick(e)
  }, [onClick])

  if(as){
    return (
      createElement(
        as,
        {...props, className: `whitespace-nowrap cursor-pointer ${props.className}`, onClick: handleClick},
        children
      )
    )
  }
  return (
    <button {...props} 
      className={`whitespace-nowrap cursor-pointer ${props.className}`}
      onClick={handleClick}>
      {children}
    </button> 
  )
}