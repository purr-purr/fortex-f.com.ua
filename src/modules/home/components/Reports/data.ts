import { importDoc } from '@utils/formatters';
import { IDocumentsListGroup, type IDocumentsList } from '@utils/types';

export const financeReports: IDocumentsListGroup[] = [
	{
		groupTitle: '2023',
		list: [
			{
				title:
					'Звіт з надання впевненості за результатами перевірки дотримання вимог Правил складання та подання звітності учасниками ринку небанківських фінансових послуг до Національного банку України за 2023 р',
				link: importDoc('Звіт з надання впевності.pdf'),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2023 рік',
				link: importDoc('Звіт незалежного аудитора.pdf'),
			},
		],
	},
	{
		groupTitle: '2022',
		list: [
			{
				title:
					'Звіт з надання впевненості за результатами перевірки дотримання вимог Правил складання та подання звітності учасниками ринку небанківських фінансових послуг до Національного банку України за 2022 р.',
				link: importDoc('Zvit z nadannya vpevnenosti Fortex-finance.pdf'),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2022 рік',
				link: importDoc('Zvit auditora Fortex-finance.pdf'),
			},
		],
	},
	{
		groupTitle: '2021',
		list: [
			{
				title:
					'Звіт з надання впевненості за результатами перевірки дотримання вимог Правил складання та подання звітності учасниками ринку небанківських фінансових послуг до Національного банку України за 2021 р.',
				link: importDoc('Звіт з надання впевненості за 2021.pdf'),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2021 рік',
				link: importDoc('Звіт_незалежного_аудитора_за_2021_р.pdf'),
			},
		],
	},
	{
		groupTitle: '2020',
		list: [
			{
				title:
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних за 2020 рік',
				link: importDoc(
					'Звіт з надання впевненності незалежного аудитора щодо річних звітних даних за 2020 рік.pdf',
				),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2020 рік',
				link: importDoc('Аудиторський звіт за 2020 рік.PDF'),
			},
		],
	},
	{
		groupTitle: '2019',
		list: [
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2019 рік',
				link: importDoc('Аудит висновок за 2019+примітки+.pdf'),
			},
			{
				title:
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних за 2019 рік::',
				link: importDoc(
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних - 2019.pdf',
				),
			},
		],
	},
	{
		groupTitle: '2018',
		list: [
			{
				title:
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних за 2018 рік:',
				link: importDoc(
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних - 2018.pdf',
				),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2018 рік:',
				link: importDoc('Аудит висновок за 2018+примітки+.pdf'),
			},
		],
	},
	{
		groupTitle: '2017',
		list: [
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2017 рік:',
				link: importDoc('Аудит висновок за 2017.pdf'),
			},
		],
	},
	{
		groupTitle: '2016',
		list: [
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2016 рік:',
				link: importDoc(
					'Аудиторський висновок що до фінансової звітності за 2016 рік.pdf',
				),
			},
		],
	},
	{
		groupTitle: '2015',
		list: [
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2015 рік:',
				link: importDoc('Аудит висновок 31 12 2015.pdf'),
			},
		],
	},
];

export const archivedInformation: IDocumentsList[] = [
	{
		title: 'Правила надання коштів в позику (редакція до 17.03.2025)',
		link: importDoc('3_Pravila kredit 06 2024.pdf'),
	},
	{
		title: 'Інформація про Товариство (редакція до 17.03.2025)',
		link: importDoc('4_Інформація про Товариство_318054212043.pdf'),
	},
	{
		title: 'Інформація про структуру власності станом на 01.01.2025',
		link: importDoc('5_структура власності на 01.01.2025.pdf'),
	},
	{
		title: 'Інформація про структуру власності станом на 04.07.2024',
		link: importDoc('6_Структура власності 04.07.2024.pdf'),
	},
];

export const documents: IDocumentsList[] = [
	{
		title: 'Свідоцтво про реєстрацію фінансової установи',
		link: importDoc('Свідоцтво 13 04 2021.pdf'),
	},
	{
		title: 'Правила надання коштів в кредит',
		link: importDoc('PRAVYLA  kredyt.pdf'),
	},
	{
		title: 'Виписка з ЄДР ТОВ "Фортекс-Фінанс"',
		link: importDoc('Виписка з ЄДР ТОВ _Фортекс-Фінанс_.pdf'),
	},
	{
		title: 'Ліцензія на діяльність фінансової компанії ',
		link: importDoc(
			'Ліцензія надання коштів у позику, в тому числі і на умовах фінансового кредиту.pdf',
		),
	},
	{
		title: 'Порядок обробки і захисту персональних даних ',
		link: importDoc('1_Poriadok obrobky i zakhystu personalnykh danykh.pdf'),
	},
	{
		title: 'Порядок розгляду звернень споживачів ',
		link: importDoc('2_Poriadok rozghliadu zvernen spozhyvachiv.pdf'),
	},
];
