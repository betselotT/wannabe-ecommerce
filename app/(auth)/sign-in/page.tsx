"use client";
import Base from "@/components/base";
import Hero from "@/components/hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export default function SignIn() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10 mb-10">
        <Hero />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-start gap-10 sm:gap-40 px-4 sm:px-0">
        <Image
          src="/images/side-image.png"
          width={800}
          height={300}
          alt="Picture of the home page"
          className="w-full sm:w-auto" // Ensures responsiveness for the image
        />
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="font-semibold text-3xl pb-1 tracking-wide">
              Sign in to Exclusive
            </CardTitle>
            <CardDescription className="text-sm pb-2">
              Enter your details below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" {...field} />
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Your Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-[#db4444] text-white w-full sm:w-[100px] h-[40px] rounded mb-3 sm:mb-0"
                >
                  Sign In
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground pr-2">
              Don&apos;t have an account yet?{" "}
            </p>
            <Link href="/sign-up" className="text-primary hover:underline">
              Sign Up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
