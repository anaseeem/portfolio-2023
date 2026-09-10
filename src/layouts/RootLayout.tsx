import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandLinkedin,
} from "react-icons/tb";
import HireMe from "@/components/special/HireMe";
import Menu from "@/components/special/Menu";

interface SocialLink {
  name: string;
  fullName: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const Logo = () => (
  <Link to={"/"}>
    <p className="font-cursive text-3xl font-bold mt-3">an</p>
  </Link>
);

const RootLayoutV2: React.FC = () => {
  const social_links: SocialLink[] = [
    {
      name: "fb",
      fullName: "Facebook",
      icon: TbBrandFacebook,
      href: "",
    },
    {
      name: "ln",
      fullName: "Linkedin",
      icon: TbBrandLinkedin,
      href: "",
    },
    {
      name: "git",
      fullName: "Github",
      icon: TbBrandGithub,
      href: "",
    },
  ];
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
          <ul className="flex gap-5">
            {social_links.map((social, socialIndex) => {
              return (
                <li key={socialIndex}>
                  <a
                    href={social.href ? social.href : "#"}
                    className="transition-colors w-14 h-14 rounded-full border-2 border-background flex items-center justify-center hover:bg-background hover:text-foreground hover:border-foreground"
                  >
                    {social.icon ? (
                      <social.icon className="w-6 h-6" />
                    ) : social.name ? (
                      social.name
                    ) : (
                      "brand"
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <Button size="xl" variant="wide" className="">
            send me email
          </Button>
        </div>

        {/* copyright */}
        <div className="container text-sm text-opacity-25 text-background text-center py-5">
          copyright &copy; by naseem
        </div>
      </footer>
    </div>
  );
};

export default RootLayoutV2;
