import { IconNotebook, IconClock, IconPencil, IconRobot, IconDeviceGamepad, IconFrame, IconActivity, IconApple, IconCheckbox } from "@tabler/icons-react"
import  cn  from "../utils/cn";
import React from "react";

export const projectItems = [
    {
        title: "EduHub-AI",
        description: "Revolutionizing education with AI, enhancing learning seamlessly.",
        header: <img src="/images/eduhub-ai.png" className="rounded-sm"></img>,
        className: "md:col-span-1",
        icon: <IconNotebook className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/superiorsd10/EduHub-AI",
    },
    {
        title: "Ultimate Alarm Clock",
        description: "Revolutionary alarm clock with smart features for ultimate waking.",
        header: <img src="/images/ultimate-alarm-clock.png" className="rounded-sm"></img>,
        className: "md:col-span-1",
        icon: <IconClock className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/CCExtractor/ultimate_alarm_clock/pulls?q=is:pr+is:closed+author:superiorsd10",
    },
    {
        title: "Confess",
        description: "Confide freely and anonymously, unburden your heart and mind.",
        header: <img src="/images/confess.png" className="rounded-sm"></img>,
        className: "md:col-span-1",
        icon: <IconPencil className="h-4 w-4 text-neutral-500" />,
        link: "https://play.google.com/store/apps/details?id=com.sachindapkara.confess&hl=en_IN&gl=US",
    },
    {
        title: "Dash AI",
        description: "Open-source Flutter coding assistant for seamless development.",
        header: <img src="/images/dash-ai.png" className="rounded-sm"></img>,
        className: "md:col-span-1",
        icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/Welltested-AI/dash-ai/pulls?q=is:pr+is:closed+author:superiorsd10",
    },
    {
        title: "Snake Bit",
        description: "Choose from three modes, slither to high scores in Snake Bit.",
        header: <img src="/images/snake-bit.png" className="rounded-sm"></img>,
        className: "md:col-span-1",
        icon: <IconDeviceGamepad className="h-4 w-4 text-neutral-500" />,
        link: "https://play.google.com/store/apps/details?id=com.sachindapkara.snakebit&hl=en_IN&gl=US",
    },
    {
        title: "Mirai",
        description: "Build stunning cross-platform apps with real-time JSON using Mirai.",
        header: <img src="/images/mirai.jpeg" className="rounded-sm"></img>,
        className: "md:col-span-1",
        icon: <IconFrame className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/Securrency-OSS/mirai/pulls?q=is:pr+is:closed+author:superiorsd10",
    },
    {
        title: "College GateKeeper",
        description: "Automate student intime/outtime marking using machine learning.",
        header: <img src="/images/college-gatekeeper.png" className="rounded-sm"></img>,
        className: "md:col-span-1",
        icon: <IconActivity className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/superiorsd10/college-gatekeeper",
    },
    {
        title: "Block ToDo",
        description: "Complex backend, simple frontend: Todo App powered by Polygon blockchain.",
        header: <img src="/images/block-todo.jpeg" className="rounded-sm"></img>,
        className: "md:col-span-1",
        icon: <IconCheckbox className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/superiorsd10/block-todo",
    },
    {
        title: "Agrico",
        description: "Empowering organic farmers to increase production yield with data insights.",
        header: <img src="/images/agrico.jpeg" className="rounded-sm"></img>,
        className: "md:col-span-1",
        icon: <IconApple className="h-4 w-4 text-neutral-500" />,
        link: "https://github.com/superiorsd10/agrico",
    },
]