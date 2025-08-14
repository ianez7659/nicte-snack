"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const panelVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
};

export default function ProductPanel() {
  return (
    <motion.div
      key="product"
      variants={panelVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="grid md:grid-cols-2 gap-6 rounded-b-lg border border-gray-200 border-t-0 p-6 md:p-8"
    >
      {/* Left: Image */}
      <div className="relative h-72 md:h-[520px] bg-white">
        <AnimatePresence mode="wait">
          <motion.figure
            key="img-product"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 rounded-xl overflow-hidden"
          >
            <Image
              src="/images/hearts.webp"
              alt="Product shapes"
              fill
              className="object-cover bg-white"
            />
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Right: Text */}
      <div className="p-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-pink-900 drop-shadow">
          Amaranth: The Mesoamerican Treasure
        </h2>

        <div className="mt-4 space-y-4 text-[15px] md:text-lg leading-relaxed text-gray-800 max-h-[400px] overflow-y-auto pr-2">
          <p>
            Welcome to the fascinating world of amaranth! This incredible plant,
            known as <em>“huauhtli”</em> in Nahuatl (an Aboriginal language of
            Mexico), has been a vital part of the diet of ancient civilizations
            like the Mexicas and the Mayans for over 5,000 years. Its rich
            history and symbolism have captured the interest of many, especially
            given its sacred status among Mesoamerican cultures. The Mayans and
            Aztecs considered amaranth to be holy, using it in various rituals
            and traditions.
          </p>
          <p>
            In these cultures, amaranth was often mixed with honey from the
            maguey plant to create intricate representations of their rich
            cultural life. They molded figurines of animals, warriors, and
            nature, but most importantly, they created images of their gods.
            This was part of a unique ritual where people would consume these
            figures, allowing them to “participate in the divine” by eating the
            very essence of their deities.
          </p>
          <p>
            Although amaranth was not held in the same esteem as corn, it played
            a crucial role in religious ceremonies. It was used to make edible
            representations of deities, symbolizing a deep spiritual connection
            for Indigenous Mexicans.
          </p>
          <p>
            Amaranth is incredibly versatile in Mexican cuisine. It has been
            used in tamales, tortillas, atoles, alegrías (a sweet snack),
            cookies, and churros, often combined with chiles, honey, and
            quelites. This adaptability makes it a staple ingredient in many
            dishes.
          </p>
          <p>
            Today, amaranth is celebrated as a superfood. Over the last decade,
            studies around the world have highlighted its incredible nutritional
            quality. It is packed with proteins, lipids, starches,
            carbohydrates, and essential vitamins like A, C, D, and K, as well
            as vital minerals. Amaranth is one of the best sources of protein
            available, outperforming most cereals. It contains niacin, calcium,
            iron, phosphorus, and a wealth of other nutrients, including folic
            acid, omega fatty acids, and magnesium.
          </p>
          <p>
            The health benefits of amaranth are impressive! It helps control
            diarrhea, prevents colon cancer, aids in managing osteoporosis,
            diabetes, obesity, hypertension, constipation, chronic kidney
            failure, and even liver issues. With so many advantages, it&apos;s
            no wonder that amaranth is intended to be included in the diet of
            astronauts. NASA continues researching about the potential
            applications of amaranth in space travel. The agency is committed to
            developing new ways to use this superfood in space.
          </p>
          <p>
            With its remarkable nutritional profile and rich history, amaranth
            truly is a treasure. By incorporating this ancient food into your
            diet, you&apos;ll not only enjoy its delicious flavor but also honor
            the traditions of our ancestors.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
