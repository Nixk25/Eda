"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Register = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values) => {
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (res.ok) {
        form.reset();
        router.push("/login");
        toast.success("Uživatel zaregistrován");
      }
    } catch (err) {
      console.log(err);
      toast.error("Nepodařilo se zaregistrovat");
    }
  };

  const formSchema = z.object({
    email: z.string().email({ message: "Neplatný email" }),
    password: z.string().min(8, { message: "Heslo musí mít alespoň 8 písmen" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <section className="flex flex-col items-center justify-center w-screen my-20 ">
      <main className="relative flex flex-col gap-3 px-10 py-8 text-center rounded-lg w-max">
        <h2 className="font-bold sm-clamp">Zaregistruj se</h2>

        <Form {...form}>
          <form
            className="flex flex-col w-full gap-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type="email"
                        placeholder="Zadejte svůj email..."
                        className="w-full px-5 py-2 text-black transition-all duration-300 rounded-lg shadow-lg outline-2 outline-transparent focus-within:outline-primary focus-within:outline-2 input"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Heslo</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Zadejte své heslo..."
                        className="w-full px-5 py-2 text-black transition-all duration-300 rounded-lg shadow-lg outline-2 focus-within:outline-primary focus-within:outline-2 input"
                        {...field}
                      />
                      {showPassword ? (
                        <FaEyeSlash
                          color="black"
                          onClick={() => setShowPassword(false)}
                          className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-2"
                        />
                      ) : (
                        <FaEye
                          color="black"
                          onClick={() => setShowPassword(true)}
                          className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-2"
                        />
                      )}
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
              Zaregistrovat se
            </Button>
            <span>Už mezi nás patříte?</span>
            <Link
              className="font-bold text-primary hover:brightness-105"
              href="/login"
            >
              Přihlašte se
            </Link>
          </form>
        </Form>
      </main>
    </section>
  );
};

export default Register;
