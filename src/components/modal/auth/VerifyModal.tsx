import React from 'react'
import { Dialog, DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ThumbsUp } from 'lucide-react';
import { useRouter } from 'next/router';

type ModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

const VerifyModal = ({open, setOpen}: ModalProps) => {
    const router = useRouter();

    const handleOkay = () => {
        setOpen(false);
        router.push('/auth/login');
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-14 sm:rounded-[8px]">
            <DialogHeader>
                <DialogTitle
                    className={` font-medium flex items-center justify-center text-center pb-5 text-xl`}
                >
                    <ThumbsUp size={32} className="text-[#A85334] mr-4" /> Account created successfully!
                </DialogTitle>
                <p>Click okay to login to your newly created account</p>
                <Button className="bg-[#A85334] mt-8" onClick={handleOkay}>Okay</Button>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default VerifyModal
