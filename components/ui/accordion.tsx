"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  value: string | undefined;
  onToggle: (value: string) => void;
}>({ value: undefined, onToggle: () => {} });

function Accordion({
  className,
  type: _type,
  collapsible: _collapsible,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  type?: "single" | "multiple";
  collapsible?: boolean;
}) {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const onToggle = React.useCallback(
    (v: string) => setValue((prev) => (prev === v ? undefined : v)),
    []
  );
  return (
    <AccordionContext.Provider value={{ value, onToggle }}>
      <div className={cn("flex w-full flex-col", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

const AccordionItemContext = React.createContext<string>("");

function AccordionItem({
  className,
  value,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={cn("border-b", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { value, onToggle } = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  const isOpen = value === itemValue;

  return (
    <h3 className="flex">
      <button
        type="button"
        onClick={() => onToggle(itemValue)}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all",
          className
        )}
        aria-expanded={isOpen}
        {...props}
      >
        {children}
        <svg
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </h3>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { value } = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  const isOpen = value === itemValue;

  if (!isOpen) return null;

  return (
    <div className="overflow-hidden text-sm" {...props}>
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
