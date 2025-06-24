import { Suspense } from "react";
import DeleteMagazine from "./DeleteMagazine";
    
export default function Page() {

        return (
            <Suspense>
                <DeleteMagazine />
            </Suspense>
           
        );
}