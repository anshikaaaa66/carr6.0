"use client";
import React from "react";
import { format } from "date-fns";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

const DateTimeForm = ({ control, id, label }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg shadow-lg">
      <Label htmlFor={id} className="font-semibold text-white text-md mb-2">
        {label}
      </Label>
      <FormField
        control={control}
        name={id}
        render={({ field }) => (
          <FormItem className="flex flex-col py-3">
            <FormLabel className="text-white">Date of birth</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal bg-gray-700 text-white border-gray-600",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-gray-800 rounded-lg">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormItem>
        )}
      />
    </div>
  );
};

export default DateTimeForm;
