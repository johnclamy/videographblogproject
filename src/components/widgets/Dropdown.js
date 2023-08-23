import { useState, cloneElement } from "react";

export default function Dropdown({ trigger, menu }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="">
      {cloneElement(trigger, { onClick: () => setOpen(!open) })}
      {open ? (
        <ul className="">
          {menu.map((menuItem, index) => (
            <li key={index} className="">
              {cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick()
                  setOpen(false)
                }
              })}
            </li>
          ))}  
        </ul>
      ) : null}
    </div>
  )
}