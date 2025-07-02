import React from "react"
// import "./button.css"
import "@/app/globals.css"

function Button({
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? "span" : "button"
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  return <Comp className={classes} data-slot="button" {...props} />
}

export { Button }
