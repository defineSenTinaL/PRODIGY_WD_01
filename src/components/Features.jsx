"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import noHiddenFeesImage from "../assets/no-hidden-fees.webp";
import lowCommissionImage from "../assets/low-commission.webp";
import powerfullMarketingToolsImage from "../assets/powerfull-marketing-tools.webp";
import dedicatedSellerSupportImage from "../assets/dedicated-seller-support.webp";

const data = [
  {
    title: "No Surprises, Just Profits!",
    description:
      "Grow your business with complete transparency. With us, you’ll find clear pricing and no hidden fees, so you can focus on boosting your bottom line with peace of mind.",
    image: noHiddenFeesImage,
  },
  {
    title: "Maximize Your Earnings with Low Commissions!",
    description:
      "Keep more of your hard-earned revenue. Our low commission rates ensure you reap the rewards of your sales while staying competitive and profitable.",
    image: lowCommissionImage,
  },
  {
    title: "Amplify Your Reach with Powerful Marketing Tools!",
    description:
      "Harness the potential of advanced marketing solutions that help you stand out. From targeted ads to personalized campaigns, our tools empower your brand to capture more customers.",
    image: powerfullMarketingToolsImage,
  },
  {
    title: "Your Success, Our Mission: Dedicated Seller Support!",
    description:
      "Get unparalleled support at every step of your journey. Our expert team is here to provide guidance and assistance, ensuring your success is never out of reach.",
    image: dedicatedSellerSupportImage,
  },
];

const variants = {
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  leave: {
    opacity: 0,
    y: 16,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      >
        
      </div>
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Benefits</h1>
            <p className="text-xl text-gray-600">
              No Hidden Fees, Low Commission, Powerful Marketing Tools,
              Dedicated Seller Support
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-600">
                  At Dintly, we make selling simple and rewarding with:
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {data.map((tab, index) => (
                  <a
                    key={index}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(index);
                    }}
                  >
                    <Card
                      isBlurred
                      className={`mb-5 border-none bg-background/60 dark:bg-default-100/50 ${
                        activeTab !== index
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      shadow="sm"
                    >
                      <CardHeader>
                        <span className="font-bold leading-snug tracking-tight mb-1">
                          {tab.title}
                        </span>
                      </CardHeader>
                      <CardBody>
                        <p>{tab.description}</p>
                      </CardBody>
                      {/* <CardFooter>
                       <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                      </CardFooter> */}
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  ref={tabs}
                >
                  <AnimatePresence mode="wait">
                    {data.map(
                      (tab, index) =>
                        index === activeTab && (
                          <motion.div
                            key={index}
                            className="w-full"
                            initial="leave"
                            animate="enter"
                            exit="leave"
                            variants={variants}
                            onAnimationComplete={() => heightFix()}
                          >
                            <div className="relative inline-flex flex-col">
                              <Image
                                className="md:max-w-none mx-auto rounded"
                                src={tab.image}
                                width={500}
                                height="462"
                                alt={tab.title}
                              />
                            </div>
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
