import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Link2Icon, CodeIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
const ProjectCard = ({ ...props }) => {
  return (
    <div>
      <Card className="h-full">
        <div className="p-1">
            <Image
            src={props.img}
            width={500}
            height={300}
            className=" rounded-lg"
            alt="project image"
            />
        </div>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription className=" line-clamp-2 hover:line-clamp-none sm:line-clamp-none">
            {props.desc}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row w-fit gap-2">
          <Link href={props.live} target="_blank">
            <Button variant="customOutline" className="flex gap-2">
              <Link2Icon />
              Live Site
            </Button>
          </Link>
          <Link href={props.code} target="_blank">
            <Button variant="customOutline" className="flex gap-2">
              <CodeIcon />
              GitHub
            </Button>
          </Link>
        </CardContent>
        <CardFooter className="flex gap-1 flex-wrap">
          {props.labels.map((label, index) => (
            <Badge key={index}>{label}</Badge>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
