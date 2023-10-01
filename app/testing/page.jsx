import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="h-[85vh] flex justify-center items-center ">
      <div className=" lg:w-3/4 flex flex-col lg:flex-row items-baseline justify-evenly lg:justify-between lg:items-center">
        <div className="w-full lg:w-auto mb-10 mt-20 lg:mt-0">
          <Skeleton className={"h-10 w-[300px] pl-10 lg:pl-0 mb-2"} />
          <Skeleton className={"h-10 w-[300px] pl-10 lg:pl-0"} />
          <div className="flex flex-col lg:flex-row gap-4 items-center mt-10">
            <Skeleton className={"h-10 w-[150px] pl-10 lg:pl-0"} />
            <Skeleton className={"h-10 w-[190px] pl-10 lg:pl-0"} />
          </div>
        </div>
        <Skeleton className={"w-[290px] h-[290px] sm:w-[450px] sm:h-[450px] rounded-full"}/>
      </div>
    </div>
  );
};

export default loading;
