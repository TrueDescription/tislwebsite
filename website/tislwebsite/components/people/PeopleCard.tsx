import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

interface props {
  title: string;
  name: string;
  role: string;
  link: string;
  slug: string;
}

export default function PeopleCard({ title, name, role, link, slug }: props) {
  return (
    <div>
      <Link
        href={slug.startsWith("http") ? slug : `/people/${slug}`}
        target={slug.startsWith("http") ? "_blank" : "_self"}
        rel={slug.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        <Card className="py-4 m-5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{role}</p>
            <small className="text-default-500">{title}</small>
            <h4 className="font-bold text-large">{name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={link}
              width={270}
            />
            <div className="flex mt-3">
              <Link className="mr-2">
                <i className="fas fa-envelope"></i>
              </Link>
              <Link className="mr-2">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="mr-2">
                <i className="ai ai-google-scholar"></i>
              </Link>
              <Link className="mr-2">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}
