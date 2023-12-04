import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BackendProjectDetails,
  FrontendProjectDetails,
} from "@/utils/constants";
const page = () => {
  return (
    <div className="mt-10">
      <div className=" text-lg font-bold text-center mt-20 mb-10 underline underline-offset-8 ">
        PROJECTS
      </div>
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Full Stack</TabsTrigger>
          <TabsTrigger value="native">Native</TabsTrigger>
        </TabsList>
        <ScrollArea className=" bg-stone-100 dark:bg-stone-800 dark:text-stone-400 rounded-md p-2 sm:p-4 pt-1 sm:pt-2 mt-2 h-[70vh] sm:h-[76vh] lg:h-[68vh]">
          <TabsContent
            value="frontend"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center "
          >
            {FrontendProjectDetails.map((project, index) => (
              <ProjectCard
                key={index}
                img={project.img}
                live={project.live}
                code={project.code}
                title={project.title}
                labels={project.labels}
                desc={project.desc}
              />
            ))}
          </TabsContent>
          <TabsContent
            value="backend"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center "
          >
            {BackendProjectDetails.map((project, index) => (
              <ProjectCard
                key={index}
                img={project.img}
                live={project.live}
                code={project.code}
                title={project.title}
                labels={project.labels}
                desc={project.desc}
              />
            ))}
          </TabsContent>
          <TabsContent value="native">Coming Soon...</TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default page;
