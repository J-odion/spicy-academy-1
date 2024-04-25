import React, { useState } from "react";
import { cn } from "@/lib/utils";
import CustomButton from "@/components/CustomButton";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type TutorsModalProps = {
  className?: string;
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const AddModal = ({ title, open, setOpen, className }: TutorsModalProps) => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Form submitted with values:");
      reset();
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-16 sm:rounded-lg">
        <DialogHeader>
          <DialogTitle
            className={cn(
              `font-bolder  text-center py-3 text-xl text-black`,
              className
            )}
          >
            {title}
          </DialogTitle>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-14"
              autoComplete="off"
            >
              <div className="mb-3 grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  className="py-5 bg-[#F2E9DF] outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-[#F2E9DF] focus:ring-[#A85334]"
                  id="name"
                  {...register("name")}
                  disabled={isLoading}
                />
              </div>
              <div className="mb-3 grid w-full items-center gap-1.5">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  type="text"
                  className="py-5 bg-[#F2E9DF] outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-[#F2E9DF] focus:ring-[#A85334]"
                  id="phone"
                  {...register("phone")}
                  disabled={isLoading}
                />
              </div>
              <div className="mb-3 grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email address</Label>
                <Input
                  type="text"
                  className="py-5 bg-[#F2E9DF] outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-[#F2E9DF] focus:ring-[#A85334]"
                  id="email"
                  {...register("email")}
                  disabled={isLoading}
                />
              </div>
              <CustomButton className="bg-[#A85334] w-full" type="submit">Save</CustomButton>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddModal;
