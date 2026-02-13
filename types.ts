
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
  PHILOSOPHY = '/filosofia',
  COMMUNITY = '/comunidad',
  CAREER = '/career',
  CONTACT = '/contacto'
}
