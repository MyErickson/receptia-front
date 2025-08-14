import { motion } from "framer-motion";

export function OrbBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="h-[800px] w-[800px] rounded-full bg-gradient-to-r from-indigo-200/30 via-purple-200/30 to-pink-200/30 blur-3xl"
        />
      </div>
      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-emerald-200/30 via-cyan-200/30 to-blue-200/30 blur-3xl"
        />
      </div>
    </div>
  );
}

export function RippleGrid() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <div className="absolute h-full w-full bg-white [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
    </div>
  );
}

interface ScrollFloatProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function ScrollFloat({ children, offset = 50, className = "" }: ScrollFloatProps) {
  return (
    <motion.div
      initial={{ y: offset, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
