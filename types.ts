
export interface NavItem {
  label: string;
  path: string;
}

export interface Program {
  title: string;
  age: string;
  description: string;
  objective: string;
  image: string;
  path: string;
}

export enum RoutePath {
  HOME = '/',
  ABOUT = '/about',
  PROGRAMS = '/programs',
  TUITION = '/tuition',
  PHILOSOPHY = '/philosophy',
  COMMUNITY = '/community',
  EVENTS = '/events',
  CURRICULUM = '/curriculum',
  FAMILY_RESOURCES = '/family-resources',
  CAREER = '/career',
  CONTACT = '/contact'
}
