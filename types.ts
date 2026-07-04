
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
  ABOUT = '/nosotros',
  PROGRAMS = '/programas',
  TUITION = '/tuition',
  PHILOSOPHY = '/filosofia',
  COMMUNITY = '/comunidad',
  EVENTS = '/events',
  CURRICULUM = '/curriculum',
  FAMILY_RESOURCES = '/family-resources',
  CAREER = '/career',
  CONTACT = '/contacto'
}
