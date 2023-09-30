import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div className="mt-10">
      <Skeleton className="h-10 w-[150px] m-auto mt-20 mb-10" />
      <Skeleton className={"h-10 mb-2"} />
      <Skeleton className={"h-[300px]"} />
    </div>
  );
};

export default loading;
