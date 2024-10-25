import Image from "next/image";
import React, { useRef } from "react";
import { IconData } from "@/../data";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

export const Icon = ({ item, color }: { item: IconData; color: string }) => {
  const skillRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!skillRef.current) return;

    const skill = skillRef.current;
    const icon = skill.querySelector(".skills");
    const circle = skill.querySelector(".circle");
    const tag = skill.querySelector(".tag");

    ScrollTrigger.batch(".skills", {
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: { each: 0.15 },
          // overwrite: true,
        }),
      start: "top 80%",
    });

    let animation: gsap.core.Tween;

    Observer.create({
      target: icon,
      type: "pointer",
      onHover: () => {
        if (animation) animation.kill();
        animation = gsap.to(circle, {
          opacity: 1,
          scale: 5,
          ease: "power2.out",
          duration: 0.5,
        });

        gsap.to(tag, {
          opacity: 1,
          bottom: -40,
          ease: "power2.out",
          duration: 0.5,
        });
      },
      onHoverEnd: () => {
        if (animation) animation.kill();
        animation = gsap.to(circle, {
          opacity: 0,
          scale: 1,
          ease: "power2.in",
          duration: 0.5,
        });
        gsap.to(tag, {
          opacity: 0,
          bottom: -80,
          ease: "power2.in",
          duration: 0.5,
        });
      },
    });

    return () => {
      if (animation) animation.kill();
    };
  });
  return (
    <div className="relative" ref={skillRef}>
      <div className="skills p-3 border-2 rounded-lg translate-y-14 opacity-0 relative overflow-hidden w-20">
        <Image
          src={item.icon}
          alt={item.name}
          width={64}
          height={64}
          className="z-2 bg-transparent"
        />
        <div
          className="circle w-10 rounded-full h-10 absolute left-1/4 -z-10 opacity-0"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <span className="tag absolute -bottom-20 opacity-0 font-mono left-1/2 transform -translate-x-1/2 text-nowrap">
        {item.name}
      </span>
    </div>
  );
};
