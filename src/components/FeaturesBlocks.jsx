import { Card, CardBody, Image } from "@nextui-org/react";
import dashboardImage from "../assets/dashboard.png";
import shiprocketImage from "../assets/shiprocket.webp";
import advertisingImage from "../assets/advertising.jpg";
import reportsImage from "../assets/reports.png";

export default function FeaturesBlocks() {
  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <h1 color="blue-gray" className="mb-2 font-bold uppercase">
          Key Features
        </h1>
        <h1 color="blue-gray" className="mb-4 !text-2xl font-bold lg:!text-4xl">
          Empower Your Business with Our Feature-Rich Seller Platform
        </h1>
        <h1 className="mx-auto max-w-lg !text-gray-500">
          Take control of your online store with our comprehensive tools
          designed to streamline your operations and maximize growth
        </h1>
      </div>
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card className="col-span-1 bg-gray-100/50 overflow-hidden">
          <CardBody className="text-center">
            <h1 color="blue-gray" className="mb-2 font-medium">
              Logistics & Shipping
            </h1>
            <h1 className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Simplify fulfillment with integrated courier support, allowing you
              to ship products faster and more efficiently.
            </h1>
            <Image
              src={shiprocketImage}
              alt="iphone"
              className="w-full xl:h-[300px] lg:h-[300px] translate-y-5 mb-5 object-cover object-center"
            />
          </CardBody>
        </Card>
        <Card className="col-span-2 bg-gray-100/50 overflow-hidden">
          <CardBody className="text-center">
            <h1 color="blue-gray" className="mb-2 font-medium">
              Dashboard
            </h1>
            <h1 className="text-center mb-0 max-w-xl mx-auto text-base font-normal leading-7 !text-gray-500">
              Stay on top of your business with our intuitive dashboard for
              real-time tracking of orders, inventory, and performance
              analytics.
            </h1>
            <Image
              src={dashboardImage}
              alt="laptop"
              className="w-full lg:h-[380px] md:h-[300px] h-[220px] translate-y-5 mb-5 object-cover object-center"
            />
          </CardBody>
        </Card>
      </div>
      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card className="col-span-2 bg-gray-100/50 overflow-hidden">
          <CardBody className="text-center">
            <h1 color="blue-gray" className="mb-2 font-medium">
              Reports & Analytics
            </h1>
            <h1 className="text-center max-w-sm mx-auto text-base font-normal leading-7 !text-gray-500">
              Make informed decisions with detailed insights and metrics that
              help optimize your strategy.
            </h1>
            <Image
              src={reportsImage}
              alt="laptop"
              className="w-full xl:h-[355px] lg:h-[380px] md:h-[300px] h-[180px] translate-y-5 mb-5 object-contain object-center"
            />
          </CardBody>
        </Card>
        <Card className="col-span-1 bg-gray-100/50">
          <CardBody className="text-center">
            <h1 color="blue-gray" className="mb-2 font-medium">
              Advertising
            </h1>
            <h1 className="text-center max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Use our powerful advertising tools to increase visibility and
              reach millions of potential customers.
            </h1>
            <div className="flex justify-center items-center">
              <Image
                src={advertisingImage}
                alt="laptop"
                className="w-full xl:h-[355px] lg:h-[380px] md:h-[300px] h-[180px] translate-y-5 mb-5 object-contain object-center"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
