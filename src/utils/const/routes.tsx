import { BookContent, Clock, Gear, Home, PurchaseTag } from '@/commons/icons';

const LOGIN = '/auth/login';
const DASHBOARD = '/';
const ADMINISTRATION = '/administracion';
const INVENTORY = '/inventario';
const SALES = '/ventas';
const HISTORY = '/historial';
const PROFILE = '/perfil';

const SIDEBAR = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <Home />,
    private: true,
  },
  {
    name: 'Administración',
    href: ADMINISTRATION,
    icon: <Gear />,
    private: true,
  },
  {
    name: 'Inventario',
    href: INVENTORY,
    icon: <BookContent />,
    private: true,
  },
  {
    name: 'Venta de productos',
    href: SALES,
    icon: <PurchaseTag />,
    private: false,
  },
  {
    name: 'Historial de ventas',
    href: HISTORY,
    icon: <Clock />,
    private: false,
  },
];

export { LOGIN, DASHBOARD, ADMINISTRATION, INVENTORY, SALES, HISTORY, PROFILE, SIDEBAR };
