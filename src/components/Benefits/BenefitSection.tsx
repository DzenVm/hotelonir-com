"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
  benefit: IBenefit;
  imageAtRight?: boolean;
}

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }) => {
  const { title, description, imageSrc, bullets } = benefit;

  return (
    <section className="uniq-py-16 uniq-bg-gray-50">
      <motion.div
        className="
          uniq-flex uniq-flex-wrap uniq-flex-col uniq-items-center uniq-justify-center
          uniq-gap-2 lg:uniq-flex-row lg:uniq-gap-20 lg:uniq-flex-nowrap uniq-mb-24
        "
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div
          className={clsx(
            "uniq-flex uniq-flex-wrap uniq-items-center uniq-w-full uniq-max-w-lg",
            {
              "uniq-justify-start": imageAtRight,
              "lg:uniq-order-1 uniq-justify-end": !imageAtRight,
            }
          )}
        >
          <div className="uniq-w-full uniq-text-center lg:uniq-text-left">
            <motion.div
              className="uniq-flex uniq-flex-col uniq-w-full"
              variants={childVariants}
            >
              <SectionTitle>
                <h3 className="lg:uniq-max-w-2xl">{title}</h3>
              </SectionTitle>

              <p
                className="
                  uniq-mt-1.5 uniq-mx-auto lg:uniq-ml-0
                  uniq-leading-normal uniq-text-gray-700
                "
              >
                {description}
              </p>
            </motion.div>

            <div className="uniq-mx-auto lg:uniq-ml-0 uniq-w-full">
              {bullets.map((item, index) => (
                <BenefitBullet
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={clsx("uniq-mt-5 lg:uniq-mt-0", {
            "lg:uniq-order-2": imageAtRight,
          })}
        >
          <div
            className={clsx("uniq-w-fit uniq-flex", {
              "uniq-justify-start": imageAtRight,
              "uniq-justify-end": !imageAtRight,
            })}
          >
            <Image
              src={imageSrc}
              alt={title}
              width={384}
              height={762}
              quality={100}
              className="lg:uniq-ml-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitSection;
