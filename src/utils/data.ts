import { type INavigationList } from '@utils/types';

export const navigationList: INavigationList[] = [
	{ title: 'Про компанію', path: '/#about', isActive: true },
	{
		title: 'Публічна інформація',
		path: 'assets/documents/10. Publichna informatsiia ta pro' + ' diialnist.pdf',
		isActive: true,
	},
	{ title: 'Звітність', path: '/#reports', isActive: true },
	{ title: 'Контакти', path: '/#contacts', isActive: true },
	{ title: 'Кредити для фізичних осіб', path: '/loan', isActive: true },
];
