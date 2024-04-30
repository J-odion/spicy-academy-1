/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect } from "react";
import { TypographyH2 } from "../../typography";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
// import { useAuth } from "@/context/auth.context";

type PageInfo = {
  description?: string;
  image: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
};

type AuthPage =
  | "signUp"
  | "signIn"
  | "forgotPassword"
  | "resetPassword"
  | "emailVerification"
  | "emailPasswordReset";

type AuthInfo = Record<AuthPage, PageInfo>;

type AuthLayoutProps = React.PropsWithChildren & {
  page: AuthPage;
};

const imagePath = "";

const authInfo: AuthInfo = {
  signIn: {
    title: "Welcome to Ectype login page",
    description:
      "Account management made effortless. Streamline your trading activities with Ectype's intuitive login page. Gain instant access to all your linked accounts, Allowing you manage and execute trades effortlessly.",
    image: `${imagePath}/sign-in.svg`,
    width: 600,
    height: 600,
  },
  forgotPassword: {
    image: `${imagePath}/forgot-password.svg`,
    width: 500,
    height: 600,
  },
  emailVerification: {
    image: `${imagePath}/email-verify.svg`,
    width: 600,
    height: 600,
  },
  resetPassword: {
    image: `${imagePath}/reset-password.svg`,
    width: 600,
    height: 600,
  },
  signUp: {
    title: "Hi, create an account to get started",
    description: `"Do you have multiple accounts ? Do you want to be able to access all of your accounts from one device? then you need to ectype.`,
    image: `${imagePath}/bghe.svg`,
    className: "m-0 p-0",
    width: 700,
    height: 600,
  },
  emailPasswordReset: {
    image: `${imagePath}/password-reset.svg`,
    width: 600,
    height: 600,
  },
};

function AuthLayout({ children, page }: AuthLayoutProps) {
  const router = useRouter();
  const currentPageInfo = authInfo[page];




  return (
    <main className="mx-auto grid lg:h-screen lg:grid-cols-12 bg-[#FDF4E9]">
      {children}
      <section className="col-span-6 ">
        <div className="p-5 pt-10 lg:px-24">
          <Image src={currentPageInfo.image} width={currentPageInfo.width} height={currentPageInfo.height} alt="Guitar" />
        </div>
      </section>

    </main>
  );
}

export default AuthLayout;
