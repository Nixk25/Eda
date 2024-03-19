import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoTrashBinSharp } from "react-icons/io5";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const [confirmed, setConfirmed] = useState(false);
  const router = useRouter();

  const handleDeleteBtn = async (event) => {
    event.preventDefault();
    if (confirmed) {
      const res = await fetch(`/api/concerts?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Koncert byl smazán");
        router.refresh();
      } else {
        toast.error("Nepovedlo se smazat váš koncert");
      }
    }
    return;
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="p-5 transition-all duration-150 ease-in border-2 border-transparent rounded-full hover:border-red-500"
        >
          <IoTrashBinSharp size={20} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form className="flex flex-col gap-5" onSubmit={handleDeleteBtn}>
          <DialogHeader>
            <DialogTitle>Opravdu jste si jist?</DialogTitle>
            <DialogDescription>
              Tato akce nejde vrátit zpět. Opravdu si přejete vymazat váš
              recept?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button
                variant="destructive"
                onClick={() => setConfirmed(true)}
                type="submit"
              >
                Vymazat
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveBtn;
