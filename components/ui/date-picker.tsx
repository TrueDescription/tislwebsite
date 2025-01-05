"use client";

import { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = forwardRef<
  ReactDatePicker,
  React.ComponentProps<typeof ReactDatePicker>
>((props, ref) => {
  return (
    <ReactDatePicker
      {...props}
      ref={ref}
      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
});

DatePicker.displayName = "DatePicker";
