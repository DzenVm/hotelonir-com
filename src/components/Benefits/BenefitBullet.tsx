// src/components/Benefits/BenefitBullet.tsx
"use client";

import { motion } from "framer-motion";
import { IBenefitBullet } from "@/types";
import { childVariants } from "./BenefitSection";

const BenefitBullet: React.FC<IBenefitBullet> = ({
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      className="
        uniq-flex uniq-flex-col uniq-items-center uniq-mt-8 uniq-gap-3 
        lg:uniq-gap-5 lg:uniq-flex-row lg:uniq-items-start
      "
      variants={childVariants}
    >
      <div className="uniq-flex uniq-justify-center uniq-mx-auto lg:uniq-mx-0 uniq-flex-shrink-0 uniq-mt-3 uniq-w-fit">
        {icon}
      </div>
      <div>
        <h4 className="uniq-text-lg uniq-font-semibold">{title}</h4>
        <p className="uniq-text-base uniq-text-foreground-accent">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitBullet;
