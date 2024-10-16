import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image"

interface props {
    title: string;
    name: string;
    role: string;
    link: string;
}

export default function PeopleCard({title, name, role, link}:props) {
    return (
        <div>
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
                </CardBody>
            </Card>
        </div>
    );
}