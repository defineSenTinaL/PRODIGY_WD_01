import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

const data = [
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    review:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    profile_image: "https://nextui.org/avatars/avatar-1.png",
  },
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    review:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    profile_image: "https://nextui.org/avatars/avatar-1.png",
  },
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    review:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    profile_image: "https://nextui.org/avatars/avatar-1.png",
  },
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    review:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    profile_image: "https://nextui.org/avatars/avatar-1.png",
  },
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    review:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    profile_image: "https://nextui.org/avatars/avatar-1.png",
  },
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    review:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    profile_image: "https://nextui.org/avatars/avatar-1.png",
  },
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    review:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    profile_image: "https://nextui.org/avatars/avatar-1.png",
  },
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    review:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    profile_image: "https://nextui.org/avatars/avatar-1.png",
  },
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    review:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    profile_image: "https://nextui.org/avatars/avatar-1.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center flex flex-col justify-center items-center">
            <Card className="w-48">
              <CardHeader>
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
                  Words from Others
                </p>
              </CardHeader>
              {/* <CardBody>
                <p>Its not just us.</p>
              </CardBody>
              <CardFooter>
                <p>Heres what others have to say about us.</p>
              </CardFooter> */}
            </Card>
            <h1 className="mb-5 text-3xl font-semibold md:text-center md:text-5xl">
              It&rsquo;s not just us.
            </h1>
            <p className="text-xl md:text-center md:text-2xl">
              Here&rsquo;s what others have to say about us.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {data.map((doc, index) => (
            <Card key={index} className="max-w-[340px]">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src={doc.profile_image}
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      {doc.name}
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400">
                      {doc.username}
                    </h5>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 text-small text-default-400">
                <p>{doc.review}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
