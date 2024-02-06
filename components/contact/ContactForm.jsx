"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z
    .string({ required_error: "Jméno je povinné" })
    .min(2, "Jméno musí být delší než dvě písmena"),
  email: z
    .string({ required_error: "Email je povinný" })
    .email("Neplatný email"),
  message: z
    .string({ required_error: "Zpráva je povinná" })
    .min(2, "Zpráva musí být delší než dvě slova")
    .max(250, "Zpráva nesmí být delší než 250 písmen"),
});

export default function ContactForm() {
  const [loading, setLoading] = useState("Odeslat");
  const formEmail = useRef();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit() {
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      formEmail.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );
    form.reset();
    setLoading("Odesílání..");

    setTimeout(() => {
      toast("Zpráva byla odeslána", {
        description: "Ozveme se vám co nejdřív!",
        status: "success",
        duration: 5000,
      });
      setLoading("Odeslat");
    }, 2000);
  }

  return (
    <Form {...form}>
      <form
        ref={formEmail}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="flex justify-between items-center md:flex-row flex-col w-full gap-8 mt-5">
          <div className="w-full md:w-1/2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Jméno" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full md:w-1/2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Zpráva" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center items-center">
          <Button className="w-full lg:w-max " type="submit">
            {loading}
          </Button>
        </div>
      </form>
    </Form>
  );
}
