import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { SelectSingleEventHandler } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

type Props = {
  value?: Date;
  onChange: SelectSingleEventHandler;
  disabled?: boolean;
};

export const DatePicker = ({ onChange, disabled, value }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant="outline"
          className={cn(
            "w-full justify-center text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="size-4 mr-2" />
          {value ? format(value, "PPP") : <span>Pick a Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={disabled}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
