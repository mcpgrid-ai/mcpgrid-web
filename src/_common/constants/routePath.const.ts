export enum RoutePath {
  Admin = '/admin',
  AdminServers = '/admin/servers',
  Blog = '/blog',
  BlogPost = '/blog/:slug',
  CatalogServerDetails = '/catalog/servers/:id',
  CatalogServerDetailsTools = '/catalog/servers/:id/tools',
  CatalogServers = '/catalog/servers',
  ContactUs = '/contact-us',
  Dashboard = '/dashboard',
  Faqs = '/faqs',
  Index = '/',
  Profile = '/profile',
  ServerDetails = '/servers/:slug',
  ServerDetailsReadme = '/servers/:slug/readme',
  ServerDetailsTools = '/servers/:slug/tools',
  Servers = '/servers',
  SignIn = '/signin',
  SignUp = '/signup',
}

export const PRIVATE_PATHS = [
  RoutePath.Admin,
  RoutePath.CatalogServers,
  RoutePath.Profile,
];
