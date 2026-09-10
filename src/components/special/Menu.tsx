import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import styles from "./Menu.module.css";
import { cn } from "@/lib/utils";
import MenuLightImg from "@/assets/menu-light.png";

interface MenuLink {
  name: string;
  href: string;
}

const menu_links: MenuLink[] = [
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "About",
    href: "about-me",
  },
  {
    name: "Contact",
    href: "contact",
  },
];
const Menu: React.FC = () => {
  const [animationState, setAnimationState] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center md:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <button
              onPointerOver={() => {
                setIsHovered((p) => !p);
              }}
              onPointerOut={() => {
                setIsHovered((p) => !p);
              }}
              className={cn("flex flex-col gap-2 group w-10", styles.parent)}
            >
              <div className="h-[5px] bg-foreground rounded-full w-full"></div>
              <div
                className={cn(
                  "h-[5px] bg-foreground rounded-full w-full origin-left scale-x-50 transition-transform",
                  isHovered ? styles.two : styles.two__reverse,
                )}
              ></div>
              <div className="h-[5px] bg-foreground rounded-full w-full"></div>
            </button>
          </DialogTrigger>
          <DialogContent
            onAnimationEnd={() => {
              console.log("ended");
              setAnimationState(true);
            }}
            onAnimationStart={() => {
              console.log("started");
              setAnimationState(false);
            }}
            className="left-full w-64 h-64 md:h-80 md:w-80 rounded-full xl:rounded-full flex bg-red-500"
          >
            <ul className="w-full h-full absolute top-0 left-0 ">
              {menu_links.map((link, idx) => {
                const degs = [30, 0, -30];
                return (
                  <li
                    style={
                      {
                        "--rotate-factor": `${animationState ? degs[idx] : 0}deg`,
                      } as React.CSSProperties
                    }
                    key={idx}
                    className={cn(
                      "transition-all w-44 bg-white absolute border-2 border-primary flex items-center justify-center rounded-full overflow-hidden group hover:w-48",
                      styles.link__item,
                    )}
                  >
                    <Link
                      to={link.href}
                      className="hover:bg-accent hover:text-background w-full p-3 pl-5"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}

              <li
                style={{
                  clipPath: `circle(50% at 50% 50%)`,
                }}
                className="absolute w-full h-full top-0 left-0 bg-background rounded-full circle"
              >
                <img
                  src={MenuLightImg}
                  className="object-cover w-full h-full"
                  alt="Menu background"
                />
              </li>
            </ul>
          </DialogContent>
        </Dialog>
      </div>

      <ul className="hidden md:flex">
        {menu_links.map((menu, menuIdx) => (
          <li
            key={menuIdx}
            className="flex-1 rounded-full hover:shadow-md hover:text-accent transition-colors"
          >
            <Link to={menu.href ? menu.href : "#"} className="block px-8 py-3 ">
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

interface MenuIconProps {}

const MenuIcon = forwardRef<HTMLButtonElement, MenuIconProps>((_, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button ref={ref}>
      <div
        onPointerOver={() => {
          setIsHovered((p) => !p);
        }}
        onPointerOut={() => {
          setIsHovered((p) => !p);
        }}
        className={cn("flex flex-col gap-2 group w-10", styles.parent)}
      >
        <div className="h-[5px] bg-foreground rounded-full w-full"></div>
        <div
          className={cn(
            "h-[5px] bg-foreground rounded-full w-full origin-left scale-x-50 transition-transform",
            isHovered ? styles.two : styles.two__reverse,
          )}
        ></div>
        <div className="h-[5px] bg-foreground rounded-full w-full"></div>
      </div>
    </button>
  );
});

MenuIcon.displayName = "MenuIcon";

export default Menu;
