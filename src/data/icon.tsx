// RotatingIcon.tsx
import { motion } from "framer-motion";

interface RotatingIconProps {
  className: string;
  size: string;
  direction?: "clockwise" | "counterclockwise";
}

const RotatingIcon: React.FC<RotatingIconProps> = ({
  className,
  size,
  direction = "clockwise",
}) => {
  const rotateDirection = direction === "clockwise" ? 360 : -360;
  return (
    <motion.p>
      <motion.img
        src="../img/icon.png"
        alt="Icon"
        className={`absolute ${className} transform -translate-y-1/2 -translate-x-1/2 ${size}`}
        animate={{ rotate: rotateDirection }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "linear",
        }}
      />
    </motion.p>
  );
};

export default RotatingIcon;
