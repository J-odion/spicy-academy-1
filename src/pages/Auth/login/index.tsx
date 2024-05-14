import AuthLayout from "@/components/layout/auth/AuthLayout";
import AuthSection from "@/components/layout/auth/AuthSection";
import { TypographyH1 } from "@/components/typography";
import { signInFormSchema } from "@/lib/formSchema";
import { NextPageWithLayout } from "@/pages/_app";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import FormRender from "@/components/FormRender";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import CustomButton from "@/components/CustomButton";
import { Input } from "@/components/ui/input";

const SignIn: NextPageWithLayout = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const onSubmit = (values: z.infer<typeof signInFormSchema>) => {
    setIsLoading(true);
    toast({
      title: "Logged in successfully!",
      description: "Redirecting to dashboard",
      className: "text-[#141619] bg-[#d3d3d4] border-[#bcbebf]",
    })
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard/student/account");
    }, 2000);
  };

  return (
    <AuthSection>
      <TypographyH1 className="mb-4">Welcome back</TypographyH1>
      <p className="">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="text-[#A85334]">
              Sign up
            </Link>
          </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormRender

                placeholder="Enter email address / username"
                field={field}
              />
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormRender

                placeholder="Enter password"
                field={field}
                type="password"
              />
            )}
          />


          <CustomButton
            type="submit"
            className=" bg-[#A85334] w-full"
            disabled={isLoading}
            isLoading={isLoading}
          >
            Log in
          </CustomButton>


        </form>
      </Form>
    </AuthSection>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout page={"signIn"}>{page}</AuthLayout>;
};
