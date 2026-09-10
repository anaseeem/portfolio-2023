import { Button } from "@/components/ui/button";
import { TbMenu } from "react-icons/tb";
import { Link } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Menu: React.FC = () => {
  const onMenuBtnPress = () => {
    // Toggle menu action
  };
  return (
    <div className="relative">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuBtnPress}>
            <TbMenu />
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-accent text-accent-foreground max-w-none top-0 left-0 translate-x-0 translate-y-0">
          <ul
            className=" p-10 flex flex-col gap-10 font-primary font-medium tracking-wider uppercase 
  text-xl ">
            <li className="hover:text-accent">
              <Link to="#">My Works</Link>
            </li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Blog</li>
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menu;
