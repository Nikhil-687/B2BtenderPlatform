import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      style={{
        display: 'flex',
        height: '2.25rem',
        width: '100%',
        minWidth: '0',
        borderRadius: '0.375rem',
        border: '1px solid #D1D5DB', // Tailwind's border-input
        backgroundColor: 'transparent',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
        fontSize: '1rem',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
        transition: 'color 0.2s, box-shadow 0.2s',
        outline: 'none',
      }}      
      {...props}
    />
  )
}

export { Input }
