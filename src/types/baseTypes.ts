import {type IconType} from 'react-icons'

export type SocialLink {
  name: string;
  fullName: string;
  icon: IconType;
  href: string;
  target?: string;
}