import CustomButton from "@/components/CustomButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Edit } from "lucide-react";
import { useForm } from "react-hook-form";

type ModalProps = {
    className?: string;
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void;
  };

  const EditModal = ({
    title,
    open,
    setOpen,
    className,
  }: ModalProps) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (values:any) => {

    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle
            className={cn(
              `font-bolder flex items-center pb-5 text-start text-xl`,
              className,
            )}
          >
            {title}
          </DialogTitle>
          <div>
          <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              autoComplete="off"
            >
            </form>
          </div>
        </DialogHeader>
    </Dialog>
  )
}

export default EditModal
