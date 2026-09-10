import { Outlet, Link, ScrollRestoration } from "react-router";
import { Button } from "@/components/ui/button";
import { TbBrandGithub, TbBrandLinkedin, TbBrandGmail } from "react-icons/tb";
import HireMe from "@/components/special/HireMe";
import Menu from "@/components/special/Menu";
import { SocialLink } from "@/types/baseTypes";

const Logo = () => (
  <Link to={"/"}>
    <p className="font-cursive text-3xl font-bold mt-3">an</p>
  </Link>
);

const social_links: SocialLink[] = [
  {
    target: "_blank",
    name: "gm",
    fullName: "Gmail",
    icon: TbBrandGmail,
    href: "mailto:ashfaqnaseem1@gmail.com",
  },
  {
    target: "_blank",
    name: "ln",
    fullName: "LinkedIn",
    icon: TbBrandLinkedin,
    href: "https://www.linkedin.com/in/ashfaq-naseem-959856260",
  },
  {
    target: "_blank",
    name: "git",
    fullName: "Github",
    icon: TbBrandGithub,
    href: "https://github.com/CurvyLantern",
  },
];

const RootLayout: React.FC = () => {
  return (
    <div className="font-secondary">
      <header className="py-5 mb-20">
        <div className="container flex items-center justify-between">
          {/* logo */}
          <Logo />
          <div className="flex items-center">
            {/* available */}
            <p className="hidden lg:block w-36 mr-10">
              Open for any jobs and collaborations
            </p>

            <div className="flex items-center gap-5 md:border-4 border-primary px-2 rounded-full py-1">
              {/* menu */}
              <Menu />
              {/* cta */}
              <div className="hidden sm:block">
                <HireMe socialLinks={social_links} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* page goes here */}
      <Outlet />

      {/* footer */}
      <footer className="bg-foreground text-background">
        <div className="container flex flex-col gap-10 justify-between items-center py-32">
          <p className="xsm:text-lg md:text-xl lg:text-2xl text-center font-primary">
            Open for any jobs and offers
          </p>

          {/* social icons */}
          {/* <ul className="flex gap-5">
            {social_links.map((social, socialIndex) => {
              return (
                <li key={socialIndex}>
                  <Link
                    target={social.target}
                    to={social.href ? social.href : "#"}
                    className="transition-colors w-14 h-14 rounded-full border-2 border-background flex items-center justify-center hover:bg-background hover:text-foreground hover:border-foreground"
                  >
                    {social.icon ? (
                      <social.icon className="w-6 h-6" />
                    ) : social.name ? (
                      social.name
                    ) : (
                      "brand"
                    )}
                  </Link>
                </li>
              );
            })}
          </ul> */}

          <Button asChild size="xl" variant="wide" className="">
            <Link to="/contact">send me a message</Link>
          </Button>
        </div>

        {/* copyright */}
        <div className="container text-sm text-opacity-25 text-background text-center py-5">
          copyright &copy; by anaseem
        </div>
      </footer>

      <ScrollRestoration />
    </div>
  );
};

export default RootLayout;
