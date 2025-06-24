"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";

export default function DeleteMagazine() {
    const id = useSearchParams().get("_id");
    const router = useRouter();

        async function handleDelete() {
            console.log("Revista deletada");
            try {
                const responde = await fetch(`https://crudcrud.com/api/7a0e34fd3a114f80819580a68d175e51/magazines/${id}`, {
                    method: "DELETE",
                })
                router.push("/magazine");
            } catch (error) {
                console.error("Erro ao deletar a revista:", error);
            }
        }
        return (
            <div className="flex flex-col items-center justify-center min-h-[150px] gap-4 bg-card rounded-md shadow p-4 mx-auto max-w-sm">
                <h1 className="text-lg font-semibold text-destructive">Deletar Revista?</h1>
                <p className="text-sm text-muted-foreground text-center">Tem certeza que deseja deletar? Esta ação não pode ser desfeita.</p>
                <Button variant="destructive" size="sm" className="w-full" onClick={handleDelete}>
                    Deletar
                </Button>
            </div>
        );
    }