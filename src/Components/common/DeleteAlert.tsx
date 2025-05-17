// components/common/DeleteAlert.tsx
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
  } from "../ui/alert-dialog";
  import { useState } from "react";
  import { toast } from "sonner";

  interface DeleteAlertProps {
    title?: string;
    description?: string;
    confirmLabel?: string;
    content?: string;
    onConfirm: () => Promise<void>; // required async delete logic
    onSuccess?: () => void;         // optional follow-up (toast, reload, nav, etc.)
    trigger: React.ReactNode;       // button or link that opens the modal
  }
  
  export const DeleteAlert = ({
    title = "Are you sure you want to delete this?",
    description = "This action cannot be undone.",
    confirmLabel = "Delete",
    onConfirm,
    onSuccess,
    trigger,
  }: DeleteAlertProps) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const handleConfirm = async () => {
      try {
        setLoading(true);
        await onConfirm();
        onSuccess?.();      // let parent show toast / refresh
        setOpen(false);
      } catch (error) {
        toast.error("Failed to delete.");
        console.error("DeleteAlert error:", error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirm}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700"
            >
              {loading ? "Processing..." : confirmLabel}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  