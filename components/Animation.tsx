'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

type child = {
  children: React.ReactNode;
};

const Animation = ({ children }: child) => {
  const ref = useRef(null);
  const inView = useInView(ref,{once: true});
  const animate = useAnimation();

  useEffect(() => {
    if (inView) {
      animate.start('show');
    } else {
      animate.start('hidden');
    }
  }, [inView, animate]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          show: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.3, delay: 0.8, ease: 'easeIn' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;
