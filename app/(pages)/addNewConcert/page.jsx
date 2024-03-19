"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cs } from "date-fns/locale";
const addNewConcert = () => {
  const router = useRouter();
  const [date, setDate] = useState();

  const onSubmit = async (values) => {
    try {
      const res = await fetch(`/api/concerts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          date: date,
          time: values.time,
        }),
      });

      if (res.ok) {
        form.reset();
        router.push("/concerts");
        toast.success("Koncert byl přidán");
      }
    } catch (err) {
      console.log(err);
      toast.error("Nepodařilo se přidat koncert");
    }
  };

  const formSchema = z.object({
    name: z.string().min(2, { message: "Název musí mít alespoň 2 písmena" }),
    date: z.any(),
    time: z.string().refine(
      (time) => {
        const [hours, minutes] = time.split(":");
        return hours.length === 2 && minutes.length === 2;
      },
      { message: "Čas musí být ve formátu HH:MM" }
    ),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: "",
      time: "",
    },
  });
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen ">
      <main className="relative flex flex-col gap-3 px-10 py-8 text-center rounded-lg w-max">
        <h2 className="font-bold sm-clamp">Přidejte koncert</h2>

        <Form {...form}>
          <form
            className="flex flex-col w-full gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Název koncertu</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        autoFocus
                        type="text"
                        placeholder="Zadejte název koncertu..."
                        className="w-full px-5 py-2 transition-all duration-300 rounded-lg shadow-lg outline-2 outline-transparent focus-within:outline-primary focus-within:outline-2 input"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Datum koncertu</FormLabel>
                  <FormControl>
                    <div className="relative w-full"></div>
                  </FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal text-slate-900",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon
                          className={`w-4 h-4 mr-2 ${
                            date ? "text-slate-900" : "text-slate-500"
                          } `}
                        />
                        {date ? (
                          format(date, "PPP", { locale: cs })
                        ) : (
                          <span className="text-slate-500">Vyberte datum</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                          const localDateTime = new Date(
                            selectedDate.setHours(
                              selectedDate.getHours() -
                                selectedDate.getTimezoneOffset() / 60
                            )
                          );
                          setDate(localDateTime);
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        locale={cs}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Čas koncertu</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        autoFocus
                        type="text"
                        placeholder="Zadejte čas koncertu..."
                        className="w-full px-5 py-2 transition-all duration-300 rounded-lg shadow-lg outline-2 outline-transparent focus-within:outline-primary focus-within:outline-2 input"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="p-3 mt-3 text-white transition-all duration-300 border-none rounded-lg outline-none cursor-pointer bg-primary hover:scale-105 hover:brightness-105 active:scale-95 active:brightness-95"
            >
              Přidat koncert
            </Button>
          </form>
        </Form>
      </main>
    </section>
  );
};

export default addNewConcert;
