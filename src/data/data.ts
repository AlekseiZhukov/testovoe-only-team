export interface DevelopmentsItem {
    year: number
    description: string
}

export interface DataItem {
    id: number
    trend?: string
    years: number[]
    developments:DevelopmentsItem[]
}
export const DATA = [
    {
        id:1,
        trend:'спорт',
        years: [1980, 1986],
        developments: [
            {
                year: 1980,
                description: 'Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».'
            },
            {
                year: 1981,
                description: 'Русский Букер — Владимир Маканин, роман «Стол, покрытый сукном с графином посередине»'
            },
            {
                year: 1982,
                description: 'Всемирную премию фэнтези за лучший роман получил Льюис Шайнер за роман «Glimpses».'
            },
            {
                year: 1983,
                description: 'Пулитцеровская премия в категории художественное произведение, написанное американским писателем — Кэрол Шилдс, «Дневники Стоуна»'
            },
            {
                year: 1986,
                description: 'Нобелевская премия по литературе — Вислава Шимборская, «За поэзию, которая с предельной точностью описывает исторические и биологические явления в контексте человеческой реальности»'
            },

        ]
    },
    {
        id:2,
        trend:'кино',
        years: [1987, 1991],
        developments: [
            {
                year: 1987,
                description: 'Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».'
            },
            {
                year: 1988,
                description: 'Русский Букер — Владимир Маканин, роман «Стол, покрытый сукном с графином посередине»'
            },
            {
                year: 1989,
                description: 'Всемирную премию фэнтези за лучший роман получил Льюис Шайнер за роман «Glimpses».'
            },
            {
                year: 1990,
                description: 'Пулитцеровская премия в категории художественное произведение, написанное американским писателем — Кэрол Шилдс, «Дневники Стоуна»'
            },
            {
                year: 1991,
                description: 'Нобелевская премия по литературе — Вислава Шимборская, «За поэзию, которая с предельной точностью описывает исторические и биологические явления в контексте человеческой реальности»'
            },

        ]
    },
    {
        id:3,
        trend:'литература',
        years: [1992, 1998],
        developments: [
            {
                year: 1992,
                description: 'Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».'
            },
            {
                year: 1993,
                description: 'Русский Букер — Владимир Маканин, роман «Стол, покрытый сукном с графином посередине»'
            },
            {
                year: 1994,
                description: 'Всемирную премию фэнтези за лучший роман получил Льюис Шайнер за роман «Glimpses».'
            },
            {
                year: 1995,
                description: 'Пулитцеровская премия в категории художественное произведение, написанное американским писателем — Кэрол Шилдс, «Дневники Стоуна»'
            },
            {
                year: 1996,
                description: 'Нобелевская премия по литературе — Вислава Шимборская, «За поэзию, которая с предельной точностью описывает исторические и биологические явления в контексте человеческой реальности»'
            },
            {
                year: 1997,
                description: '2 августа скончался Уильям Берроуз, американский писатель (родился в 1914)'
            }
        ]
    },
    {
        id:4,
        trend:'',
        years: [1999, 2004],
        developments: [
            {
                year: 1999,
                description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {
                year: 2000,
                description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
            },
            {
                year: 2001,
                description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
            },
            {
                year: 2002,
                description: '3 яныаря — Были обнаружены две критические уязвимости в микропроцессорах: Meltdown и Spectre'
            },
            {
                year: 2003,
                description: '22 февраля — запуск первого частного космического объекта к Луне'
            },
            {
                year: 2004,
                description: '20 июля — с космодрома Танегасима в Японии при помощи ракеты-носителя H-IIA к Марсу запущена автоматическая межпланетная станция «Аль-Амаль» («Надежда»), принадлежащая ОАЭ['
            }
        ]
    },
    {
        id:5,
        trend:'',
        years: [2005, 2014],
        developments: [
            {
                year: 2005,
                description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {
                year: 2006,
                description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
            },
            {
                year: 2007,
                description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
            },
            {
                year: 2009,
                description: '3 яныаря — Были обнаружены две критические уязвимости в микропроцессорах: Meltdown и Spectre'
            },
            {
                year: 2010,
                description: '22 февраля — запуск первого частного космического объекта к Луне'
            },
            {
                year: 2014,
                description: '20 июля — с космодрома Танегасима в Японии при помощи ракеты-носителя H-IIA к Марсу запущена автоматическая межпланетная станция «Аль-Амаль» («Надежда»), принадлежащая ОАЭ['
            }
        ]
    },

    {
        id:6,
        trend:'наука',
        years: [2015, 2022],
        developments: [
            {
                year: 2015,
                description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
            },
            {
                year: 2016,
                description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
            },
            {
                year: 2017,
                description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
            },
            {
                year: 2018,
                description: '3 яныаря — Были обнаружены две критические уязвимости в микропроцессорах: Meltdown и Spectre'
            },
            {
                year: 2019,
                description: '22 февраля — запуск первого частного космического объекта к Луне'
            },
            {
                year: 2020,
                description: '20 июля — с космодрома Танегасима в Японии при помощи ракеты-носителя H-IIA к Марсу запущена автоматическая межпланетная станция «Аль-Амаль» («Надежда»), принадлежащая ОАЭ['
            }
        ]
    }
]