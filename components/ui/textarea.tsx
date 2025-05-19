import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-[#1e2142] bg-[#0a0c1d] px-3 py-2 text-sm ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:border-[#ff9800] focus-visible:ring-1 focus-visible:ring-[#ff9800]/20 disabled:cursor-not-allowed disabled:opacity-50 text-white",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }