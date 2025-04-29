export type TDataItemEvent = {
  id: number;
  year: number;
  description: string;
};

export type TDataItem = {
  id: number;
  startYear: number;
  endYear: number;
  category: string;

  events: TDataItemEvent[];
};

export type TData = {
  label: string;
  items: TDataItem[];
};

export const historicalDates: TData = {
  label: "Исторические даты",
  items: [
    {
      id: 1,
      startYear: 1980,
      endYear: 1986,
      category: "Техника",
      events: [
        {
          id: 1,
          year: 1981,
          description: "Появление первого персонального компьютера IBM PC",
        },
        {
          id: 2,
          year: 1983,
          description: "Изобретение мобильного телефона Motorola DynaTAC 8000X",
        },
        {
          id: 3,
          year: 1985,
          description: "Выпуск первого коммерческого лазерного принтера Apple LaserWriter",
        },
        {
          id: 4,
          year: 1986,
          description: "Запуск космической станции 'Мир'",
        },
      ],
    },
    {
      id: 2,
      startYear: 1987,
      endYear: 1991,
      category: "Наука",
      events: [
        {
          id: 1,
          year: 1987,
          description: "Обнаружение сверхновой SN 1987A - ближайшей к Земле за последние 400 лет",
        },
        {
          id: 2,
          year: 1989,
          description: "Тим Бернерс-Ли предложил концепцию Всемирной паутины (WWW)",
        },
        {
          id: 3,
          year: 1990,
          description: "Запуск космического телескопа Хаббл",
        },
      ],
    },
    {
      id: 3,
      startYear: 1992,
      endYear: 1997,
      category: "Литература",
      events: [
        {
          id: 1,
          year: 1993,
          description: "Тони Моррисон получает Нобелевскую премию по литературе",
        },
        {
          id: 2,
          year: 1995,
          description: "Выход романа 'Особо опасен' Виктора Пелевина",
        },
        {
          id: 3,
          year: 1996,
          description: "Опубликована книга 'Гарри Поттер и философский камень' Дж. К. Роулинг",
        },
        {
          id: 4,
          year: 1997,
          description: "Начало публикации серии романов 'Песнь Льда и Огня' Дж. Мартина",
        },
      ],
    },
    {
      id: 4,
      startYear: 1999,
      endYear: 2004,
      category: "Искусство",
      events: [
        {
          id: 5,
          year: 1999,
          description: "Выход фильма 'Матрица', изменившего визуальный язык кинематографа",
        },
        {
          id: 1,
          year: 2000,
          description: "Открытие музея современного искусства Tate Modern в Лондоне",
        },
        {
          id: 2,
          year: 2001,
          description: "Фильм 'Властелин колец: Братство кольца' выходит на экраны",
        },
        {
          id: 3,
          year: 2003,
          description: "Открытие нового здания Мариинского театра в Санкт-Петербурге",
        },
        {
          id: 4,
          year: 2004,
          description: "Картина 'Крик' Эдварда Мунка похищена из музея в Осло",
        },
      ],
    },
    {
      id: 5,
      startYear: 2015,
      endYear: 2022,
      category: "Наука",
      events: [
        {
          id: 1,
          year: 2015,
          description: "Открытие гравитационных волн, предсказанных Эйнштейном",
        },
        {
          id: 2,
          year: 2017,
          description: "Первая успешная операция по пересадке человеческой головы на манекене",
        },
        {
          id: 3,
          year: 2019,
          description: "Получено первое изображение черной дыры с помощью телескопа Event Horizon",
        },
        {
          id: 4,
          year: 2020,
          description: "Разработка вакцины против COVID-19 в рекордно короткие сроки",
        },
        {
          id: 5,
          year: 2022,
          description: "Запуск космического телескопа Джеймса Уэбба",
        },
      ],
    },
    {
      id: 6,
      startYear: 2023,
      endYear: 2025,
      category: "Технологии",
      events: [
        {
          id: 1,
          year: 2023,
          description: "Массовое внедрение нейросетей в различные сферы деятельности",
        },
        {
          id: 2,
          year: 2024,
          description: "Первый коммерческий квантовый компьютер становится доступен для бизнеса",
        },
        {
          id: 3,
          year: 2025,
          description: "Запуск первой частной миссии с людьми на Марс компанией SpaceX",
        },
      ],
    },
  ],
};
