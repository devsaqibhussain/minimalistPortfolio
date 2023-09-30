import { Skeleton } from "@/components/ui/skeleton"
import React from 'react'

const loading = () => {
  return (
    <div>
      <div className=" text-lg font-bold text-center mt-20 underline underline-offset-8 ">
        <Skeleton className={"h-10 w-32 m-auto"}/>
      </div>
      <div className=" mt-5 text-start flex flex-col justify-center items-center gap-5">
        <Skeleton className="h-40 w-[1000px]"/>
        <Skeleton className="h-40 w-[1000px]"/>
      </div>
      <div className=" text-lg font-bold text-center mt-10 underline underline-offset-8 ">
        <Skeleton className={"h-10 w-32 m-auto"}/>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[600px] place-items-center justify-items-center m-auto mt-5 shadow-md  rounded-xl p-10">
        <Skeleton className={"h-12 w-12"}/>
        <Skeleton className={"h-12 w-12"}/>
        <Skeleton className={"h-12 w-12"}/>
        <Skeleton className={"h-12 w-12"}/>
        <Skeleton className={"h-12 w-12"}/>
        <Skeleton className={"h-12 w-12"}/>
        <Skeleton className={"h-12 w-12"}/>
        <Skeleton className={"h-12 w-12"}/>
      </div>
    </div>
  )
}

export default loading