import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="mt-10">
      <Skeleton className=" mt-20 mb-10 mx-auto h-10 w-40"/>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <div className="flex flex-col justify-start items-center gap-4 w-full lg:w-[320px]">
          <Skeleton className={"h-60 w-full"}/>
          <Skeleton className={"h-52 w-full"}/>
        </div>
        <div className="flex-1">
          <Skeleton className={"h-[600px] w-full rounded-xl"} />
        </div>
        
      </div>
    </div>
  );
};

export default loading;
