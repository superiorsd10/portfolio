import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

type Props = {}

const footer = (props: Props) => {
    return (
        <div className=" flex flex-col justify-center md:flex-row md:justify-between px-4 w-[100vw]">
            <p className="text-md text-center md:text-left">Sachin Dapkara</p>

            <div className="flex justify-center pt-[12px] md:pt-0">
                <Link href={"https://www.linkedin.com/in/sachin-dapkara/"}><FaLinkedinIn className="mr-3" size={20} /></Link>
                <Link href={"https://x.com/superior_sd10"}><FaXTwitter className="mr-3" size={20} /></Link>
                <Link href={"https://github.com/superiorsd10"}><FaGithub className="mr-3" size={20} /></Link>
                <Link href={"https://www.instagram.com/superiorsd10/"}><FaInstagram size={20} /></Link>
            </div>
        </div>
    )
}

export default footer