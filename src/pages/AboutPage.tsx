import CreativePng from "@/assets/creativity.png";
import BeCreativePng from "@/assets/be-creative.png";
import LearingPng from "@/assets/learning.png";
import Marquee from "@/components/sections/Marquee";
import { Heading1 } from "@/components/special/Typography";

const AboutPage: React.FC = () => {
  return (
    <div className="font-secondary">
      {/* hero */}
      <section className="mb-20">
        <div className="container">
          <Heading1 className="lg:text-center">Hi there , I'm Naseem</Heading1>
        </div>
      </section>

      {/* I can help you with */}
      <article className="mb-20">
        <div className="container">
          <h2 className="text-6xl uppercase font-semibold py-5">
            I can Help you with
          </h2>

          {/* content */}
          <div className="border-t-2 border-primary grid grid-cols-1 lg:grid-cols-2 gap-10 ">
            {/* left side */}
            <div className="py-10 flex flex-col">
              <p className="order-2 md:order-[0] font-primary">
                Searching through the internet , researching about new ways to
                get the job done and making performant codes more performant is
                what gets me going 💪{" "}
              </p>

              {/* creative img */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={CreativePng}
                  alt="Creativity"
                />
              </div>
            </div>

            {/* right side */}
            <div className="">
              {/* frontend */}
              <article className="flex py-10 border-b-2 border-primary">
                <div></div>
                <div>
                  <h4 className="pb-5 text-3xl font-primary uppercase font-semibold">
                    Frontend developer
                  </h4>
                  <p className="w-2/3">
                    I love to make websites look good or at least try as much as
                    I can 😐. Designing sites is a hard job and that's why I
                    love to code. Facing new challenges everyday , learning
                    about new js frameworks every other day keeps me going.
                  </p>

                  <ul className="ml-4 p-4 flex flex-col gap-2 text-xl uppercase list-disc">
                    <li>Next Js</li>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Vanilla Js</li>
                    <li>Three Js</li>
                    <li>Tailwind , scss , css3</li>
                    <li>Html5</li>
                  </ul>
                </div>
              </article>

              {/* backend */}
              <article className="py-10">
                <h4 className="pb-5 text-3xl font-primary uppercase font-semibold">
                  Backend developer
                </h4>
                <p className="w-2/3">
                  I don't have vast knowledge about backend but I am learning
                  new things everyday. I can use node js as a backend server and
                  now that there are frameworks like NextJs , backend has become
                  somewhat easier I think.
                </p>

                <ul className="ml-4 p-4 flex flex-col gap-2 text-xl uppercase list-disc">
                  <li>Node Js</li>
                  <li>Express</li>
                  <li>Fastify</li>
                  <li>Next Js</li>
                  <li>Authentication</li>
                </ul>
              </article>

              {/* database */}
              <article className="py-10">
                <h4 className="pb-5 text-3xl font-primary uppercase font-semibold">
                  Databases
                </h4>
                <p className="w-2/3">
                  Now here's the real deal. Dealing with databases is hard.But I
                  love to work with them as they present new challenges every
                  time.
                </p>

                <ul className="ml-4 p-4 flex flex-col gap-2 text-xl uppercase list-disc">
                  <li>Sql</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                  <li>Prisma</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </article>

      <Marquee text="Love to learn new things" />

      {/* other things i can do */}
      <article className="mb-20">
        <div className="container">
          <h2 className="text-6xl uppercase font-semibold py-10">Other</h2>

          <div className="border-t-2 border-primary grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            {/* left item */}
            <div className="flex flex-col">
              <h4 className="pb-5 text-3xl font-primary uppercase font-semibold">
                Ui/Ux design
              </h4>
              <p className="font-primary">
                Not a professional designer but I love trying new design tools
                and experimenting with new design trends.
              </p>

              <ul className="ml-4 p-4 flex flex-col gap-2 text-xl uppercase list-disc">
                <li>Figma</li>
                <li>Adobe Xd</li>
                <li>Adobe illustrator</li>
              </ul>

              <div className="flex-1 flex items-center justify-center">
                <img
                  src={BeCreativePng}
                  alt="Creative design"
                />
              </div>
            </div>

            {/* right item */}
            <div className="flex flex-col">
              <h4 className="pb-5 text-3xl font-primary uppercase font-semibold">
                Learning
              </h4>
              <p className="font-primary">
                I love learning new things. Be it new programming languages ,
                new design patterns or new technologies as soon as they come
                out. Learning keeps me motivated and that's why I love what I do
              </p>

              <div className="flex-1 flex items-center justify-center">
                <img
                  src={LearingPng}
                  alt="Learning"
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      <Marquee text="Keep building amazing things" />
    </div>
  );
};

export default AboutPage;
