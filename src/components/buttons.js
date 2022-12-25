import { useCallback, createElement } from "react"

export const ButtonBase = ({ children, onClick, as, ...props}) => {

  const defaultBtnStyles = "whitespace-nowrap cursor-pointer uppercase px-6 py-4 overflow-hidden"
  const handleClick = useCallback((e) => {
    //post button click
    // e.target.dataset.name
    onClick && onClick(e)
  }, [onClick])

  if(as){
    return (
      createElement(
        as,
        {...props, className: `${defaultBtnStyles} ${props.className}`, onClick: handleClick},
        children
      )
    )
  }
  return (
    <button {...props} 
      className={`${defaultBtnStyles} ${props.className}`}
      onClick={handleClick}>
      {children}
    </button> 
  )
}