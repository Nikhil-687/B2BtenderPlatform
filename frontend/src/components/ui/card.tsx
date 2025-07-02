import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      style={{ 
        backgroundColor: 'var(--card)', 
        color: 'var(--card-foreground)', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.5rem', 
        borderRadius: '0.75rem', 
        border: '1px solid #E5E7EB', 
        paddingTop: '1.5rem', 
        paddingBottom: '1.5rem', 
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
      }}      
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      style={{
        display: 'grid',
        gridAutoRows: 'min-content',
        gridTemplateRows: 'auto auto',
        alignItems: 'start',
        gap: '0.375rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingBottom: '1.5rem' // assuming `.border-b` is applied
      }}      
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      style={{ lineHeight: '1', fontWeight: '600' }}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      style={{ color: '#6B7280', fontSize: '0.875rem' }}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      style={{ gridColumnStart: 2, gridRowStart: 1, gridRowEnd: 'span 2', alignSelf: 'flex-start', justifySelf: 'flex-end' }}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      style={{ display: 'flex', alignItems: 'center', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
