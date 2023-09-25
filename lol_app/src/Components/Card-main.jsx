import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import '../assets/kata.jpg'
import { useContextGlobal } from './Context/context';
import { IconContext } from 'react-icons';
const Card_main = () => {
  const {user, tier} = useContextGlobal()
  const img =  "https://i.pinimg.com/originals/d1/5c/ca/d15cca51040519dc3548102d102459f2.jpg";
  return (
    <Card className="bg-[#7D83FF] py-3">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-default-100 text-tiny uppercase font-bold">{user.name}</p>
        <small className="text-default-500">KDA 5.2</small>
        <h4 className="text-default-100 font-bold text-large">{tier.tier }{     "Icon"}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
        isZoomed
          alt="Card background"
          src={img}
          width={270}
          isBlurred
        />
      </CardBody>
    </Card>
  )
}

export default Card_main;
