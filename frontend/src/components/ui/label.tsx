"use client"
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className="group-disabled-effect peer-disabled-effect"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.875rem',
        lineHeight: '1',
        fontWeight: 500,
        userSelect: 'none'
      }}
      {...props}
    />
  )
}

export { Label }
