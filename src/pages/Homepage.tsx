import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TbChevronRight } from "react-icons/tb";
import MyPhoto from "@/assets/PersonalPhoto.webp";
import Menu from "@/ui/Menu";

const Homepage: React.FC = () => {
  return (
    <div>
      {/* header */}
      <header className="bg-background shadow-md">
        <div className="container">
          <div className="flex items-center py-2">
            <div className="mr-auto">
              <Menu />
            </div>

            <div className=" text-center py-2">
              <p className="text-xl font-primary lowercase">
                _n
                <span className="text-[1.8em] font-bold  text-accent">@</span>
                seem
              </p>
            </div>

            <div className="ml-auto">
              <Button variant="highlight">Let's chat</Button>
            </div>
          </div>
        </div>
      </header>

      {/* main */}
      <main className="font-secondary flex flex-col md:container md:px-16">
        {/* left side */}
        <div className="flex-1 flex flex-col md:flex-row">
          <section className="pt-10 h-full flex-1">
            <div className="container md:pl-0">
              <h1 className="py-5 text-7xl font-extrabold">
                Hi! I am Ashfaq Naseem
              </h1>

              <p className="text-xl">
                Creating functional websites using NextJs, React, Vue and
                html/css for over <span className="font-bold">2 years</span>
              </p>

              {/* cta division */}
              <div className="flex items-center gap-10 py-10">
                <Button variant="highlight">Hire me</Button>
                <a
                  href="#"
                  className="group inline-flex flex-col font-bold">
                  <div className="mb-1 inline-flex items-center font-bold">
                    My projects
                    <span className="pl-2 group-hover:pl-4 text-xl flex items-center justify-center">
                      <TbChevronRight />
                    </span>
                  </div>
                  <div className="h-[2px] w-[90%] bg-primary"></div>
                </a>
              </div>

              <div className="py-10">
                <p className="font-bold text-2xl">+20</p>
                <p className="text-lg">Clients or work done</p>
              </div>

              <div className="py-10">
                <p className="font-bold text-2xl">572</p>
                <p className="text-lg">Projects Done</p>
              </div>
            </div>
          </section>

          {/* profile section */}
          <section className="pt-10 bg-accent text-accent-foreground md:flex-1 flex h-screen md:h-auto">
            <div className="container flex flex-col">
              <h2 className="py-10 w-1/2 mx-auto text-3xl text-center">
                Create your site with me in{" "}
                <span className="font-bold">React</span>{" "}
                <span className="font-bold">NextJs</span> or{" "}
                <span className="font-bold">Vue</span>
              </h2>

              <div
                className="flex h-full justify-center bg-no-repeat bg-contain bg-center"
                style={{
                  backgroundImage: `url(${MyPhoto})`,
                }}></div>
            </div>
          </section>
        </div>

        {/* faqs */}
        <section className="py-20 border-t-2 border-primary">
          <div className="container">
            <h2 className="py-10 text-center text-6xl font-extrabold">FAQs</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that you can customize to
                  your liking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
