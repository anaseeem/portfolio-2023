import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";


interface SocialLink {
  name: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
}

interface HireMeProps {
  socialLinks: SocialLink[]
}

const HireMe: React.FC<HireMeProps> = ({ socialLinks }) => {
  const email = "ashfaqnaseem1@gmail.com";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="highlight"
          size="lg">
          Hire Me
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader className="p-10">
          <DialogTitle
            asChild
            className="text-4xl text-center font-cursive uppercase">
            <h3>Hi, Thanks for thinking of hiring me 😀</h3>
          </DialogTitle>
          <DialogDescription className="text-xl text-center">
            Please contact me through my email , or social media
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-around items-center">
          <Button
            variant="link"
            asChild
            className="text-lg">
            <a
              href={`mailto:${email}`}
              className="p-5 block">
              {email}
            </a>
          </Button>
          <ul className="gap-5 flex">
            {socialLinks.map((social, socialIdx) => {
              return (
                <li key={socialIdx}>
                  <a
                    href={social.href ? social.href : "#"}
                    className="transition-all border-2 border-primary w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-background hover:text-foreground hover:border-foreground"
                    aria-label={social.name}>
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HireMe;
