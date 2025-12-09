// Данные для вопросов (на основе предоставленного текста)
const questionsData = [
    {
        question: "Что из перечисленного НЕ является общим свойством объектов реального и техногенного мира?",
        answers: [
            "НАЛИЧИЕ СТАТИКИ (СТРУКТУРЫ, ИНТЕГРАЦИИ)",
            "МНОГООБРАЗИЕ И МНОГОВАРИАНТНОСТЬ",
            "ПОЛНАЯ ПРЕДСКАЗУЕМОСТЬ ПОВЕДЕНИЯ",
            "НАЛИЧИЕ КОНТУРА УПРАВЛЕНИЯ"
        ],
        correct: 2,
        explanation: "Для сложных систем присуща СЛАБАЯ предсказуемость поведения, а не полная предсказуемость."
    },
    {
        question: "Что из перечисленного относится к признакам СТРУКТУРНОЙ сложности объекта?",
        answers: [
            "Множество состояний и правила перехода между ними",
            "Число элементов, число и разнообразие типов связей, количество иерархических уровней",
            "Степень неопределённости характеристик и правил функционирования",
            "Гибкость реакций на заранее неизвестные воздействия среды"
        ],
        correct: 1,
        explanation: "Структурная сложность определяется по числу элементов, числу и разнообразию типов связей, количеству иерархических уровней и общему числу подсистем."
    },
    {
        question: "Какой из перечисленных типов связей НЕ считается основным при определении структурной сложности?",
        answers: [
            "Структурные (в том числе иерархические)",
            "Функциональные",
            "Каузальные (причинно-следственные)",
            "Эмоциональные"
        ],
        correct: 3,
        explanation: "Основными типами связей считаются: структурные, функциональные, каузальные, информационные, пространственно-временные. Эмоциональные связи не упоминаются."
    },
    {
        question: "Что определяет сложность ФУНКЦИОНИРОВАНИЯ (поведения) объекта?",
        answers: [
            "Количество элементов системы",
            "Иерархическое построение системы",
            "Множество состояний, правила перехода из состояния в состояние, воздействие объекта на среду и среды на объект",
            "Наличие контура управления"
        ],
        correct: 2,
        explanation: "Сложность функционирования определяется характеристиками: множества состояний, правил перехода из состояния в состояние, воздействия объекта на среду и среды на объект."
    },
    {
        question: "Какая подсистема сложного объекта отвечает за поддержание динамического равновесия внутри системы и регулирование потоков энергии и вещества?",
        answers: [
            "Решающая подсистема",
            "Информационная подсистема",
            "Гомеостазная подсистема",
            "Адаптивная подсистема"
        ],
        correct: 2,
        explanation: "Гомеостазная подсистема поддерживает динамическое равновесие внутри систем и регулирует потоки энергии и вещества в подсистемах."
    },
    {
        question: "Какая подсистема сложного объекта накапливает опыт в процессе обучения для улучшения структуры и функций системы?",
        answers: [
            "Решающая подсистема",
            "Информационная подсистема",
            "Управляющая подсистема",
            "Адаптивная подсистема"
        ],
        correct: 3,
        explanation: "Адаптивная подсистема накапливает опыт в процессе обучения для улучшения структуры и функций системы."
    },
    {
        question: "Какой из перечисленных факторов НЕ присущ сложным системам?",
        answers: [
            "Слабая предсказуемость поведения",
            "Скрытность",
            "Разнообразные состояния",
            "Полная прозрачность и открытость"
        ],
        correct: 3,
        explanation: "Для сложных систем присущи: слабая предсказуемость, скрытность, разнообразные состояния. Полная прозрачность не упоминается как их свойство."
    },
    {
        question: "Что из перечисленного относится к ВСПОМОГАТЕЛЬНЫМ (обязательным) подсистемам сложных объектов?",
        answers: [
            "Решающая подсистема",
            "Подсистемы идентификации объектов и ресурсов",
            "Информационная подсистема",
            "Адаптивная подсистема"
        ],
        correct: 1,
        explanation: "Вспомогательные подсистемы: идентификации объектов и ресурсов; контроля и устранения ошибок; настроек для оптимизации производительности; хранения информации (реестр)."
    },
    {
        question: "Что такое сложность РАЗВИТИЯ объекта?",
        answers: [
            "Определяется числом элементов и связей",
            "Определяется гибкостью реакций на неизвестные воздействия",
            "Определяется характеристиками эволюционных или скачкообразных процессов",
            "Определяется количеством иерархических уровней"
        ],
        correct: 2,
        explanation: "Сложность развития определяемая характеристиками эволюционных или скачкообразных процессов."
    },
    {
        question: "Что характеризует сложность ВЫБОРА ПОВЕДЕНИЯ объекта?",
        answers: [
            "Количество элементов в системе",
            "Многоальтернативность ситуаций, когда выбор определяется целью объекта и гибкостью реакций",
            "Количество и разнообразие типов связей",
            "Наличие событийной структуры"
        ],
        correct: 1,
        explanation: "Сложность выбора поведения возникает в многоальтернативных ситуациях, когда выбор поведения определяется целью объекта, гибкостью реакций на заранее неизвестные воздействия среды."
    },
    {
        question: "Что является ГЛАВНЫМ элементом определения Автоматизированной информационной системы (АИС)?",
        answers: [
            "Наличие вычислительного и коммуникационного оборудования",
            "Поддержка динамической информационной модели некоторой части реального мира",
            "Обязательное наличие системного персонала",
            "Использование лингвистических средств"
        ],
        correct: 1,
        explanation: "Именно поддержка динамической информационной модели предметной области («некоторой части реального мира») является сущностным свойством любой ИС, независимо от используемых технологий."
    },
    {
        question: "Какой из перечисленных компонентов НЕ входит в состав АИС согласно её традиционному определению?",
        answers: [
            "Вычислительное и коммуникационное оборудование",
            "Программное обеспечение",
            "Информационные ресурсы",
            "Бизнес-план организации"
        ],
        correct: 3,
        explanation: "Основные компоненты АИС: вычислительное и коммуникационное оборудование, ПО, лингвистические средства, информационные ресурсы, системный персонал. Бизнес-план не является техническим компонентом АИС."
    },
    {
        question: "Какой метод классификации предполагает построение древовидной структуры с отношениями подчинения, где каждый объект попадает только в одну группировку?",
        answers: [
            "Фасетный метод",
            "Иерархический метод",
            "Регистрационный метод",
            "Параллельный метод"
        ],
        correct: 1,
        explanation: "Иерархический метод классификации строится по принципу «дерева» (класс → подкласс → группа → вид). Объект может принадлежать только к одной ветви."
    },
    {
        question: "Какая из подсистем ИС предприятия является главным источником данных для других информационных модулей?",
        answers: [
            "Executive Support Systems (ESS)",
            "Management Information Systems (MIS)",
            "Transaction Processing Systems (TPS)",
            "Decision Support Systems (DSS)"
        ],
        correct: 2,
        explanation: "Модуль TPS обслуживает основные производственные процессы и является главным источником данных для других систем (MIS, DSS, ESS)."
    },
    {
        question: "Какой подход к интеграции ИС характеризуется прямым соединением двух систем без посредников, но становится сложным при увеличении числа соединений?",
        answers: [
            "Интеграция по шине сервисов (ESB)",
            "Сервис-ориентированная архитектура (SOA)",
            "Интеграция по типу «точка-точка»",
            "Файловый обмен через общую папку"
        ],
        correct: 2,
        explanation: "Интеграция «точка-точка» — простейший метод прямого соединения. Каждая новая система требует создания связей со всеми существующими, что приводит к «паутине» соединений и проблемам с масштабированием."
    },
    {
        question: "Что из перечисленного НЕ является одним из пяти основных системных представлений («видений») предметной области?",
        answers: [
            "Макроскопическое представление",
            "Микроскопическое представление",
            "Экономическое представление",
            "Процессное представление"
        ],
        correct: 2,
        explanation: "Основные системные представления: макроскопическое, микроскопическое, функциональное, иерархическое, процессное. Экономическое представление не входит в этот базовый набор."
    },
    {
        question: "Какой элемент нотации EPC обозначает мгновенное состояние, существенное для управления, которое активизирует функции и является их результатом?",
        answers: [
            "Функция",
            "Событие",
            "Логический оператор",
            "Организационная единица"
        ],
        correct: 1,
        explanation: "В EPC Событие — это условие для начала и окончания функции (например, «Поступила заявка от клиента»). Процесс всегда начинается и заканчивается событием."
    },
    {
        question: "Как называется сущность в ER-модели, существование которой зависит от существования другой (сильной) сущности?",
        answers: [
            "Агрегированная сущность",
            "Зависимая (слабая) сущность",
            "Ассоциативная сущность",
            "Родительская сущность"
        ],
        correct: 1,
        explanation: "Зависимая (слабая) сущность не может существовать без связи с сильной сущностью. Например, ПЛАТЕЖ не может существовать без КРЕДИТА."
    },
    {
        question: "Какая диаграмма UML используется для моделирования изменения состояний одного объекта в ответ на события?",
        answers: [
            "Диаграмма последовательностей",
            "Диаграмма состояний",
            "Диаграмма компонентов",
            "Диаграмма вариантов использования"
        ],
        correct: 1,
        explanation: "Диаграмма состояний (State Machine Diagram) показывает возможные состояния объекта и переходы между ними, triggered событиями."
    },
    {
        question: "Что из перечисленного является примером МЕТАДАННЫХ (второй категории информационных ресурсов ИС)?",
        answers: [
            "Фамилия клиента в таблице 'Клиенты'",
            "Сумма заказа в документе 'Счёт'",
            "Описание структуры таблицы 'Клиенты' (имена и типы полей)",
            "Текст договора, хранящийся в системе"
        ],
        correct: 2,
        explanation: "Метаданные — это «данные о данных». Они описывают структуру, семантику, контекст и управление основными данными. Схема таблицы — классический пример метаданных."
    },
    {
        question: "В каком типе моделей данных интенсионал (схема) играет директивную, обязательную роль?",
        answers: [
            "В слабоструктурированных моделях (например, на основе HTML)",
            "В структурированных моделях (например, в реляционных БД)",
            "В неструктурированных моделях (текстовых документах)",
            "Во всех перечисленных одинаково"
        ],
        correct: 1,
        explanation: "В структурированных моделях интенсионал (схема БД) строго определяет типы сущностей и связей. Данные (экстенсионал) должны ей соответствовать. В слабо- и неструктурированных моделях схема либо рекомендательна, либо отсутствует."
    },
    {
        question: "Какой компонент внемашинного информационного обеспечения отвечает за присвоение объектам условных обозначений (кодов)?",
        answers: [
            "Унифицированные системы документации",
            "Система организации ведения документации",
            "Система классификации и кодирования",
            "Логическая структура экономической информации"
        ],
        correct: 2,
        explanation: "Система классификации и кодирования технико-экономической информации — это средство организации внемашинной ИБ, предназначенное для присвоения объектам кодов."
    }
];

// Данные для карточек
const cardsData = [
    { term: "СЛОЖНОСТЬ", definition: "Многоэлементность, многосвязность и многотипность связей, поведенческая сложность объектов реального и техногенного мира." },
    { term: "СОБЫТИЙНАЯ СТРУКТУРА", definition: "Наличие средств реагирования на предполагаемый событийный спектр в сложных системах." },
    { term: "СТРУКТУРНАЯ СЛОЖНОСТЬ", definition: "Определяется по числу элементов системы, числу и разнообразию типов связей между ними, количеству иерархических уровней и общему числу подсистем." },
    { term: "ГОМЕОСТАЗНАЯ ПОДСИСТЕМА", definition: "Поддерживает динамическое равновесие внутри систем и регулирует потоки энергии и вещества в подсистемах." },
    { term: "АДАПТИВНАЯ ПОДСИСТЕМА", definition: "Накопление опыта в процессе обучения для улучшения структуры и функций системы." },
    { term: "РЕШАЮЩАЯ ПОДСИСТЕМА", definition: "Принимает глобальные решения во взаимодействии с внешней средой и распределяет локальные задания между всеми другими подсистемами." },
    { term: "ИНФОРМАЦИОННАЯ ПОДСИСТЕМА", definition: "Обеспечивает сбор, переработку и передачу информации, необходимой для принятия глобальных решений и выполнения локальных задач." },
    { term: "УПРАВЛЯЮЩАЯ ПОДСИСТЕМА", definition: "Реализует глобальные решения в сложных системах." },
    { term: "Transaction Processing Systems (TPS)", definition: "Системы диалоговой обработки запросов. Обслуживают «производственный» уровень, главный источник данных." },
    { term: "Management Information Systems (MIS)", definition: "Управляющие информационные системы. Уровень управления, обеспечивают мониторинг и контроль." },
    { term: "Decision Support Systems (DSS)", definition: "Системы поддержки принятия решений. Уровень управления, анализ данных для сложных решений." },
    { term: "Executive Support Systems (ESS)", definition: "Системы поддержки выполнения. Стратегический уровень, обобщенная информация для топ-менеджмента." },
    { term: "Корпоративная сервисная шина (ESB)", definition: "Промежуточное ПО, выступающее центральным хабом для маршрутизации, преобразования данных и обеспечения взаимодействия приложений." },
    { term: "Иерархическое представление", definition: "Системное представление ПрО, основанное на понятии подсистемы. Система представляется в виде совокупности подсистем различных уровней." },
    { term: "Процессное представление", definition: "Системное представление ПрО как динамического объекта, характеризующегося последовательностью его состояний во времени." },
    { term: "Событие (в EPC)", definition: "Мгновенное состояние, активизирующее функции и являющееся их результатом. Процесс начинается и заканчивается событием." },
    { term: "Функция (в EPC)", definition: "Элемент работы, минимальный логический этап процесса. Преобразует вход в выход под управлением и с использованием механизмов." },
    { term: "Сущность (в ER)", definition: "Реальный или абстрактный объект, который может быть однозначно идентифицирован (например, СОТРУДНИК, ЗАКАЗ)." },
    { term: "Связь (в ER)", definition: "Ассоциация между двумя или более сущностями. Имеет степень (1:1, 1:N, M:N) и кардинальность." },
    { term: "Диаграмма классов (UML)", definition: "Фундаментальная структурная диаграмма, отображает классы, их атрибуты, методы и отношения (ассоциация, наследование и др.)." },
    { term: "Диаграмма вариантов использования (UML)", definition: "Поведенческая диаграмма, описывает функциональность системы с точки зрения пользователя (актеры и use case)." },
    { term: "Фасетный метод классификации", definition: "Метод, при котором множество объектов разбивается на независимые подмножества по значениям отдельных признаков (фасетов). Объект может входить в несколько группировок." }
];

// Данные для сопоставления
const matchingData = [
    { term: "СЛОЖНОСТЬ", definition: "Многоэлементность, многосвязность и многотипность связей" },
    { term: "ГОМЕОСТАЗНАЯ ПОДСИСТЕМА", definition: "Поддерживает динамическое равновесие внутри систем" },
    { term: "СТРУКТУРНАЯ СЛОЖНОСТЬ", definition: "Определяется числом элементов и разнообразием связей" },
    { term: "АДАПТИВНАЯ ПОДСИСТЕМА", definition: "Накопление опыта для улучшения структуры и функций" },
    { term: "СОБЫТИЙНАЯ СТРУКТУРА", definition: "Средства реагирования на предполагаемый событийный спектр" },
    { term: "Transaction Processing Systems (TPS)", definition: "Системы диалоговой обработки запросов. Обслуживают «производственный» уровень, главный источник данных." },
    { term: "Management Information Systems (MIS)", definition: "Управляющие информационные системы. Уровень управления, обеспечивают мониторинг и контроль." },
    { term: "Decision Support Systems (DSS)", definition: "Системы поддержки принятия решений. Уровень управления, анализ данных для сложных решений." },
    { term: "Executive Support Systems (ESS)", definition: "Системы поддержки выполнения. Стратегический уровень, обобщенная информация для топ-менеджмента." },
    { term: "Корпоративная сервисная шина (ESB)", definition: "Промежуточное ПО, выступающее центральным хабом для маршрутизации, преобразования данных и обеспечения взаимодействия приложений." },
    { term: "Иерархическое представление", definition: "Системное представление ПрО, основанное на понятии подсистемы. Система представляется в виде совокупности подсистем различных уровней." },
    { term: "Процессное представление", definition: "Системное представление ПрО как динамического объекта, характеризующегося последовательностью его состояний во времени." },
    { term: "Событие (в EPC)", definition: "Мгновенное состояние, активизирующее функции и являющееся их результатом. Процесс начинается и заканчивается событием." },
    { term: "Функция (в EPC)", definition: "Элемент работы, минимальный логический этап процесса. Преобразует вход в выход под управлением и с использованием механизмов." },
    { term: "Сущность (в ER)", definition: "Реальный или абстрактный объект, который может быть однозначно идентифицирован (например, СОТРУДНИК, ЗАКАЗ)." },
    { term: "Связь (в ER)", definition: "Ассоциация между двумя или более сущностями. Имеет степень (1:1, 1:N, M:N) и кардинальность." },
    { term: "Диаграмма классов (UML)", definition: "Фундаментальная структурная диаграмма, отображает классы, их атрибуты, методы и отношения (ассоциация, наследование и др.)." },
    { term: "Диаграмма вариантов использования (UML)", definition: "Поведенческая диаграмма, описывает функциональность системы с точки зрения пользователя (актеры и use case)." },
    { term: "Фасетный метод классификации", definition: "Метод, при котором множество объектов разбивается на независимые подмножества по значениям отдельных признаков (фасетов). Объект может входить в несколько группировок." }
];

// Данные для заполнения пропусков
const fillInData = [
    {
        text: "Объекты реального и техногенного мира обладают общими свойствами: СЛОЖНОСТЬ, НАЛИЧИЕ СТАТИКИ, НАЛИЧИЕ ДИНАМИКИ, НАЛИЧИЕ [1], МНОГООБРАЗИЕ И МНОГОВАРИАНТНОСТЬ, НАЛИЧИЕ КОНТУРА УПРАВЛЕНИЯ.",
        blanks: [
            { id: 1, correct: "СОБЫТИЙНОЙ СТРУКТУРЫ", options: ["СОБЫТИЙНОЙ СТРУКТУРЫ", "ИЕРАРХИЧЕСКОГО ПОСТРОЕНИЯ", "ГОМЕОСТАЗНОЙ ПОДСИСТЕМЫ", "АДАПТИВНОЙ ПОДСИСТЕМЫ"] }
        ]
    },
    {
        text: "Структурная сложность определяется по числу элементов системы, числу и разнообразию типов связей между ними, количеству иерархических уровней и общему числу подсистем. Основными типами считаются связи: структурные, функциональные, [1], информационные, пространственно-временные.",
        blanks: [
            { id: 1, correct: "каузальные", options: ["каузальные", "эмоциональные", "технические", "организационные"] }
        ]
    },
    {
        text: "В сложных системах выделяют факторные подсистемы: решающая, информационная, управляющая, [1], адаптивная.",
        blanks: [
            { id: 1, correct: "гомеостазная", options: ["гомеостазная", "вспомогательная", "идентификационная", "контролирующая"] }
        ]
    },
    {
        text: "Сложность функционирования определяется характеристиками: множества состояний, правил перехода из состояние в состояние, воздействие объекта на среду и среды на объект, степень [1] перечисленных характеристик и правил.",
        blanks: [
            { id: 1, correct: "неопределённости", options: ["неопределённости", "предсказуемости", "сложности", "разнообразия"] }
        ]
    },
    {
        text: "К вспомогательным подсистемам сложных объектов относятся: подсистемы идентификации объектов и ресурсов; системы контроля и устранения ошибок; системы настроек для оптимизации производительности; системы хранения информации о всех настройках, объектах и ресурсах ([1]).",
        blanks: [
            { id: 1, correct: "реестр", options: ["реестр", "архив", "база данных", "каталог"] }
        ]
    },
    {
        text: "Основные компоненты Автоматизированной информационной системы (АИС): вычислительное и коммуникационное [1], программное обеспечение, лингвистические средства, информационные ресурсы и системный [2].",
        blanks: [
            { id: 1, correct: "ОБОРУДОВАНИЕ", options: ["ОБОРУДОВАНИЕ", "ОБЕСПЕЧЕНИЕ", "КОМПЛЕКС", "ХРАНИЛИЩЕ"] },
            { id: 2, correct: "ПЕРСОНАЛ", options: ["ПЕРСОНАЛ", "КОНТУР", "ПРОЦЕСС", "МОДУЛЬ"] }
        ]
    },
    {
        text: "С точки зрения бизнеса, информационная система представляет собой организационное и [1] решение, основанное на информационных технологиях. Она имеет организационную природу (часть структуры) и [2] природу (поддержка модели для анализа решений).",
        blanks: [
            { id: 1, correct: "УПРАВЛЕНЧЕСКОЕ", options: ["УПРАВЛЕНЧЕСКОЕ", "ТЕХНИЧЕСКОЕ", "ФИНАНСОВОЕ", "СТРАТЕГИЧЕСКОЕ"] },
            { id: 2, correct: "УПРАВЛЕНЧЕСКУЮ", options: ["УПРАВЛЕНЧЕСКУЮ", "ТЕХНОЛОГИЧЕСКУЮ", "КОММУНИКАЦИОННУЮ", "ЭКОНОМИЧЕСКУЮ"] }
        ]
    },
    {
        text: "Внемашинное информационное обеспечение включает систему [1] и кодирования, унифицированные системы документации и систему организации ведения [2].",
        blanks: [
            { id: 1, correct: "КЛАССИФИКАЦИИ", options: ["КЛАССИФИКАЦИИ", "ОБРАБОТКИ", "ХРАНЕНИЯ", "ЗАЩИТЫ"] },
            { id: 2, correct: "ДОКУМЕНТАЦИИ", options: ["ДОКУМЕНТАЦИИ", "БАЗЫ", "ПРОЦЕССОВ", "СОТРУДНИКОВ"] }
        ]
    },
    {
        text: "Подходы к интеграции ИС: интеграция по типу «[1]-[2]» (простая, но плохо масштабируемая) и интеграция «по шине сервисов» с использованием ESB.",
        blanks: [
            { id: 1, correct: "ТОЧКА", options: ["ТОЧКА", "СИСТЕМА", "МОДУЛЬ", "СЕРВИС"] },
            { id: 2, correct: "ТОЧКА", options: ["ТОЧКА", "ЛИНИЯ", "БАЗА", "ШИНА"] }
        ]
    },
    {
        text: "Модель предметной области строится на трех уровнях: внешний (что делать?), концептуальный ([1] делать?) и внутренний (с помощью [2]?).",
        blanks: [
            { id: 1, correct: "КАК", options: ["КАК", "ГДЕ", "КОГДА", "ЗАЧЕМ"] },
            { id: 2, correct: "ЧЕГО", options: ["ЧЕГО", "КОГО", "ЧТО", "КОМУ"] }
        ]
    },
    {
        text: "В нотации EPC процесс начинается и заканчивается [1]. Функции и события строго [2] в потоке.",
        blanks: [
            { id: 1, correct: "СОБЫТИЕМ", options: ["СОБЫТИЕМ", "ФУНКЦИЕЙ", "ОПЕРАТОРОМ", "ОБЪЕКТОМ"] },
            { id: 2, correct: "ЧЕРЕДУЮТСЯ", options: ["ЧЕРЕДУЮТСЯ", "ПОВТОРЯЮТСЯ", "ОТМЕНЯЮТ", "ПАРАЛЛЕЛЯТ"] }
        ]
    },
    {
        text: "В ER-модели связь «один ко многим» (1:N) означает, что экземпляр одной сущности может быть связан со [1] экземплярами другой сущности. Кардинальность (1,N) означает [2] участие (минимум один, максимум много).",
        blanks: [
            { id: 1, correct: "МНОГИМИ", options: ["МНОГИМИ", "ОДНИМ", "ДВУМЯ", "НИ ОДНИМ"] },
            { id: 2, correct: "ОБЯЗАТЕЛЬНОЕ", options: ["ОБЯЗАТЕЛЬНОЕ", "НЕОБЯЗАТЕЛЬНОЕ", "УНИКАЛЬНОЕ", "СЛАБОЕ"] }
        ]
    },
    {
        text: "Любая ИС поддерживает две категории информационных ресурсов: [1] (данные, документы) и [2] (данные о данных, описывающие их структуру и свойства).",
        blanks: [
            { id: 1, correct: "ДАННЫЕ", options: ["ДАННЫЕ", "ПРОЦЕССЫ", "ФУНКЦИИ", "СЕРВИСЫ"] },
            { id: 2, correct: "МЕТАДАННЫЕ", options: ["МЕТАДАННЫЕ", "МЕТАПРОЦЕССЫ", "СХЕМЫ", "КЛАССИФИКАТОРЫ"] }
        ]
    },
    {
        text: "При структурном анализе IDEF0 функция описывается с помощью правила [1], где I - Input, C - Control, O - Output, M - [2].",
        blanks: [
            { id: 1, correct: "ICOM", options: ["ICOM", "EPC", "UML", "ER"] },
            { id: 2, correct: "MECHANISM", options: ["MECHANISM", "MODEL", "METHOD", "MANAGEMENT"] }
        ]
    },
    {
        text: "Процессный подход рассматривает организацию как совокупность [1]-процессов. Владелец процесса — лицо, имеющее [2] и несущее ответственность за результат.",
        blanks: [
            { id: 1, correct: "БИЗНЕС", options: ["БИЗНЕС", "ТЕХНИЧЕСКИХ", "УПРАВЛЕНЧЕСКИХ", "ВСПОМОГАТЕЛЬНЫХ"] },
            { id: 2, correct: "РЕСУРСЫ", options: ["РЕСУРСЫ", "ПОЛНОМОЧИЯ", "ИНСТРУКЦИИ", "ОТЧЕТЫ"] }
        ]
    }
];

// Глобальные переменные
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let currentCardIndex = 0;
let knownCards = new Set();
let selectedTerm = null;
let selectedDefinition = null;
let matchedPairs = 0;
let currentFillIndex = 0;
let correctFills = 0;
let studyTime = 0;
let studyTimer = null;

// Выбираем случайные 10 элементов для каждого режима
let shuffledQuestions = getRandomSubset(questionsData, 10);
let randomCards = getRandomSubset(cardsData, 10);
let randomMatchingData = getRandomSubset(matchingData, 10);
let randomFillData = getRandomSubset(fillInData, 10);

// DOM элементы
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileModeSelect = document.getElementById('mobile-mode-select');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
const navItems = document.querySelectorAll('.nav-item');

// Элементы тестового режима
const questionText = document.getElementById('question-text');
const answerOptions = document.querySelectorAll('.answer-option');
const answerLabels = [
    document.getElementById('label1'),
    document.getElementById('label2'),
    document.getElementById('label3'),
    document.getElementById('label4')
];
const answerInputs = document.querySelectorAll('.answer-input');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const hintBtn = document.getElementById('hint-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const resetBtn = document.getElementById('reset-btn');
const resultArea = document.getElementById('result-area');
const resultIcon = document.getElementById('result-icon');
const resultTitle = document.getElementById('result-title');
const resultText = document.getElementById('result-text');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const questionNumberSpan = document.getElementById('question-number');
const correctCountSpan = document.getElementById('correct-count');
const wrongCountSpan = document.getElementById('wrong-count');
const accuracySpan = document.getElementById('accuracy');
const progressFill = document.getElementById('progress-fill');

// Элементы карточек
const flashCard = document.getElementById('flash-card');
const cardTerm = document.getElementById('card-term');
const cardDefinition = document.getElementById('card-definition');
const prevCardBtn = document.getElementById('prev-card');
const nextCardBtn = document.getElementById('next-card');
const shuffleCardsBtn = document.getElementById('shuffle-cards');
const cardCounter = document.getElementById('card-counter');
const cardCounterBack = document.getElementById('card-counter-back');
const markKnownBtn = document.getElementById('mark-known');
const markRepeatBtn = document.getElementById('mark-repeat');
const knownCountSpan = document.getElementById('known-count');
const totalCardsSpan = document.getElementById('total-cards');

// Элементы сопоставления
const termsList = document.getElementById('terms-list');
const definitionsList = document.getElementById('definitions-list');
const matchedCountSpan = document.getElementById('matched-count');
const totalMatchesSpan = document.getElementById('total-matches');
const resetMatchBtn = document.getElementById('reset-match');
const matchFeedback = document.getElementById('match-feedback');

// Элементы заполнения пропусков
const fillText = document.getElementById('fill-text');
const fillOptions = document.getElementById('fill-options');
const fillNumberSpan = document.getElementById('fill-number');
const checkFillBtn = document.getElementById('check-fill');
const nextFillBtn = document.getElementById('next-fill');
const hintFillBtn = document.getElementById('hint-fill');
const clearFillBtn = document.getElementById('clear-fill');
const selectedAnswersDiv = document.getElementById('selected-answers');
const filledCountSpan = document.getElementById('filled-count');
const totalFillSpan = document.getElementById('total-fill');
const fillFeedback = document.getElementById('fill-feedback');
const studyTimeSpan = document.getElementById('study-time');

// Вспомогательные функции
function getRandomSubset(array, count) {
    if (array.length <= count) return [...array];
    
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Установка общего количества
    totalQuestionsSpan.textContent = shuffledQuestions.length;
    questionNumberSpan.textContent = 1;
    totalCardsSpan.textContent = randomCards.length;
    totalMatchesSpan.textContent = randomMatchingData.length;
    totalFillSpan.textContent = randomFillData.length;
    
    // Запуск таймера обучения
    startStudyTimer();
    
    // Загрузка сохраненного прогресса
    loadProgress();
    
    // Инициализация режимов
    initTestMode();
    initCardsMode();
    initMatchingMode();
    initFillMode();
    
    // Навигация между режимами
    setupNavigation();
    
    // Мобильное меню
    setupMobileMenu();
    
    // Обработчики для тестового режима
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    hintBtn.addEventListener('click', showHint);
    shuffleBtn.addEventListener('click', shuffleQuestions);
    resetBtn.addEventListener('click', resetTest);
    
    // Обработчики кликов по вариантам ответов
    answerOptions.forEach(option => {
        option.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            selectAnswer(index);
        });
    });
    
    // Обработчики для карточек
    flashCard.addEventListener('click', flipCard);
    prevCardBtn.addEventListener('click', showPrevCard);
    nextCardBtn.addEventListener('click', showNextCard);
    shuffleCardsBtn.addEventListener('click', shuffleCards);
    markKnownBtn.addEventListener('click', markCardAsKnown);
    markRepeatBtn.addEventListener('click', markCardForRepeat);
    
    // Обработчик для сброса сопоставления
    resetMatchBtn.addEventListener('click', resetMatchingGame);
    
    // Обработчики для заполнения пропусков
    checkFillBtn.addEventListener('click', checkFillAnswer);
    nextFillBtn.addEventListener('click', nextFillQuestion);
    hintFillBtn.addEventListener('click', showFillHint);
    clearFillBtn.addEventListener('click', clearFillSelections);
    
    // Сохранение прогресса при закрытии
    window.addEventListener('beforeunload', saveProgress);
});

// ===== ОБЩИЕ ФУНКЦИИ =====

function setupNavigation() {
    // Десктопная навигация
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const mode = this.getAttribute('data-mode');
            switchMode(mode);
            
            // Обновить активный элемент
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Закрыть мобильное меню если открыто
            closeMobileMenu();
        });
    });
    
    // Мобильная навигация
    mobileNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const mode = this.getAttribute('data-mode');
            switchMode(mode);
            
            // Обновить активный элемент
            mobileNavItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Закрыть мобильное меню
            closeMobileMenu();
        });
    });
    
    // Выбор режима через select
    if (mobileModeSelect) {
        mobileModeSelect.addEventListener('change', function() {
            switchMode(this.value);
        });
    }
}

function switchMode(mode) {
    // Скрыть все режимы
    document.querySelectorAll('.mode-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Показать выбранный режим
    const modeElement = document.getElementById(`${mode}-mode`);
    if (modeElement) {
        modeElement.classList.add('active');
    }
    
    // Обновить активные элементы навигации
    updateActiveNav(mode);
    
    // Обновить select
    if (mobileModeSelect) {
        mobileModeSelect.value = mode;
    }
    
    // Сохранить текущий режим
    saveProgress();
}

function updateActiveNav(mode) {
    // Десктоп
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-mode') === mode) {
            item.classList.add('active');
        }
    });
    
    // Мобильное
    mobileNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-mode') === mode) {
            item.classList.add('active');
        }
    });
}

function setupMobileMenu() {
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
}

function openMobileMenu() {
    if (mobileMenu && mobileMenuOverlay) {
        mobileMenu.classList.add('show');
        mobileMenuOverlay.style.display = 'block';
        setTimeout(() => {
            mobileMenuOverlay.style.opacity = '1';
        }, 10);
    }
}

function closeMobileMenu() {
    if (mobileMenu && mobileMenuOverlay) {
        mobileMenu.classList.remove('show');
        mobileMenuOverlay.style.opacity = '0';
        setTimeout(() => {
            mobileMenuOverlay.style.display = 'none';
        }, 300);
    }
}

function startStudyTimer() {
    studyTimer = setInterval(() => {
        studyTime++;
        updateStudyTimeDisplay();
    }, 1000);
}

function updateStudyTimeDisplay() {
    if (!studyTimeSpan) return;
    
    const hours = Math.floor(studyTime / 3600);
    const minutes = Math.floor((studyTime % 3600) / 60);
    const seconds = studyTime % 60;
    
    if (hours > 0) {
        studyTimeSpan.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        studyTimeSpan.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

function saveProgress() {
    const progress = {
        knownCards: Array.from(knownCards),
        correctAnswers,
        wrongAnswers,
        studyTime,
        currentQuestionIndex,
        currentCardIndex,
        currentFillIndex,
        correctFills,
        matchedPairs,
        lastMode: document.querySelector('.mode-content.active')?.id.replace('-mode', '') || 'test',
        shuffledQuestions: shuffledQuestions.map(q => questionsData.indexOf(q)),
        randomCards: randomCards.map(c => cardsData.indexOf(c)),
        randomMatchingData: randomMatchingData.map(m => matchingData.indexOf(m)),
        randomFillData: randomFillData.map(f => fillInData.indexOf(f))
    };
    
    localStorage.setItem('isProProgress', JSON.stringify(progress));
}

function loadProgress() {
    const savedProgress = localStorage.getItem('isProProgress');
    if (savedProgress) {
        try {
            const progress = JSON.parse(savedProgress);
            
            knownCards = new Set(progress.knownCards || []);
            correctAnswers = progress.correctAnswers || 0;
            wrongAnswers = progress.wrongAnswers || 0;
            studyTime = progress.studyTime || 0;
            currentQuestionIndex = progress.currentQuestionIndex || 0;
            currentCardIndex = progress.currentCardIndex || 0;
            currentFillIndex = progress.currentFillIndex || 0;
            correctFills = progress.correctFills || 0;
            matchedPairs = progress.matchedPairs || 0;
            
            // Восстанавливаем случайные подмножества
            if (progress.shuffledQuestions) {
                shuffledQuestions = progress.shuffledQuestions
                    .map(i => questionsData[i])
                    .filter(q => q !== undefined);
            }
            
            if (progress.randomCards) {
                randomCards = progress.randomCards
                    .map(i => cardsData[i])
                    .filter(c => c !== undefined);
            }
            
            if (progress.randomMatchingData) {
                randomMatchingData = progress.randomMatchingData
                    .map(i => matchingData[i])
                    .filter(m => m !== undefined);
            }
            
            if (progress.randomFillData) {
                randomFillData = progress.randomFillData
                    .map(i => fillInData[i])
                    .filter(f => f !== undefined);
            }
            
            // Обновляем отображение
            updateTestStats();
            updateStudyTimeDisplay();
            
            // Переключаемся на последний режим
            if (progress.lastMode) {
                setTimeout(() => switchMode(progress.lastMode), 100);
            }
        } catch (e) {
            console.error('Ошибка при загрузке прогресса:', e);
        }
    }
}

// ===== ТЕСТОВЫЙ РЕЖИМ =====

function initTestMode() {
    if (shuffledQuestions.length === 0) {
        shuffledQuestions = getRandomSubset(questionsData, 10);
    }
    loadQuestion(currentQuestionIndex);
    updateTestStats();
}

function loadQuestion(index) {
    if (index >= shuffledQuestions.length || shuffledQuestions.length === 0) {
        // Все вопросы пройдены
        if (questionText) {
            questionText.textContent = "🎉 Поздравляем! Вы прошли все вопросы!";
        }
        answerOptions.forEach((option, i) => {
            if (option) option.style.display = 'none';
        });
        if (checkBtn) checkBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        return;
    }
    
    const question = shuffledQuestions[index];
    if (questionText) {
        questionText.textContent = question.question;
    }
    if (questionNumberSpan) {
        questionNumberSpan.textContent = index + 1;
    }
    
    for (let i = 0; i < 4; i++) {
        if (answerLabels[i]) {
            answerLabels[i].textContent = question.answers[i];
            if (answerOptions[i]) {
                answerOptions[i].style.display = 'flex';
                answerOptions[i].classList.remove('selected', 'correct', 'incorrect');
            }
            if (answerInputs[i]) {
                answerInputs[i].checked = false;
            }
        }
    }
    
    if (currentQuestionSpan) {
        currentQuestionSpan.textContent = index + 1;
    }
    
    // Скрыть результат
    if (resultArea) {
        resultArea.classList.remove('show');
    }
    
    // Обновить прогресс-бар
    const progressPercent = ((index + 1) / shuffledQuestions.length) * 100;
    if (progressFill) {
        progressFill.style.width = `${progressPercent}%`;
    }
    
    // Включить все варианты
    answerOptions.forEach(option => {
        if (option) {
            option.style.pointerEvents = 'auto';
        }
    });
    
    if (checkBtn) checkBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = true;
    
    // Сохранить прогресс
    saveProgress();
}

function selectAnswer(index) {
    // Снять выделение со всех вариантов
    answerOptions.forEach(option => {
        if (option) {
            option.classList.remove('selected');
        }
    });
    
    // Выделить выбранный вариант
    if (answerOptions[index]) {
        answerOptions[index].classList.add('selected');
        if (answerInputs[index]) {
            answerInputs[index].checked = true;
        }
    }
    
    // Включить кнопку проверки
    if (checkBtn) checkBtn.disabled = false;
}

function checkAnswer() {
    const selectedOption = document.querySelector('.answer-option.selected');
    
    if (!selectedOption) {
        showNotification('Выберите ответ!', 'warning');
        return;
    }
    
    const answerIndex = parseInt(selectedOption.dataset.index);
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Отключить все варианты
    answerOptions.forEach(option => {
        if (option) {
            option.style.pointerEvents = 'none';
        }
    });
    
    // Подсветить правильный и неправильный ответы
    answerOptions.forEach((option, index) => {
        if (!option) return;
        
        if (index === question.correct) {
            option.classList.add('correct');
            if (index === answerIndex) {
                option.classList.add('selected');
            }
        } else if (index === answerIndex) {
            option.classList.add('incorrect');
        }
    });
    
    // Показать результат
    if (resultArea) {
        resultArea.classList.add('show');
        
        if (answerIndex === question.correct) {
            if (resultIcon) resultIcon.className = 'fas fa-check-circle success';
            if (resultTitle) resultTitle.textContent = 'Правильно!';
            if (resultText) resultText.textContent = question.explanation;
            resultArea.style.backgroundColor = 'rgba(76, 201, 240, 0.1)';
            correctAnswers++;
            
            // Анимация успеха
            selectedOption.classList.add('pulse');
        } else {
            if (resultIcon) resultIcon.className = 'fas fa-times-circle error';
            if (resultTitle) resultTitle.textContent = 'Неправильно';
            if (resultText) resultText.textContent = `Правильный ответ: "${question.answers[question.correct]}". ${question.explanation}`;
            resultArea.style.backgroundColor = 'rgba(249, 65, 68, 0.1)';
            wrongAnswers++;
            
            // Анимация ошибки
            selectedOption.classList.add('shake');
        }
    }
    
    if (checkBtn) checkBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = false;
    
    updateTestStats();
    saveProgress();
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= shuffledQuestions.length) {
        currentQuestionIndex = 0;
    }
    
    loadQuestion(currentQuestionIndex);
    if (nextBtn) nextBtn.disabled = true;
}

function shuffleQuestions() {
    // Перемешать вопросы алгоритмом Фишера-Йейтса
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    
    // Сбросить на первый вопрос
    currentQuestionIndex = 0;
    loadQuestion(currentQuestionIndex);
    
    showNotification('Вопросы перемешаны! Теперь они идут в случайном порядке.', 'success');
}

function resetTest() {
    // Сбросить статистику
    correctAnswers = 0;
    wrongAnswers = 0;
    currentQuestionIndex = 0;
    
    // Выбрать новые случайные 10 вопросов
    shuffledQuestions = getRandomSubset(questionsData, 10);
    
    initTestMode();
    showNotification('Тест начат заново. Выбраны новые случайные вопросы.', 'info');
}

function showHint() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Найдем индексы неправильных ответов
    const wrongAnswersIndices = [0, 1, 2, 3].filter(index => index !== question.correct);
    
    if (wrongAnswersIndices.length < 2) return;
    
    // Случайно выберем два неправильных ответа для скрытия
    const indicesToHide = [];
    while (indicesToHide.length < 2 && indicesToHide.length < wrongAnswersIndices.length) {
        const randomIndex = wrongAnswersIndices[Math.floor(Math.random() * wrongAnswersIndices.length)];
        if (!indicesToHide.includes(randomIndex)) {
            indicesToHide.push(randomIndex);
        }
    }
    
    // Временно скроем эти варианты
    indicesToHide.forEach(index => {
        const option = answerOptions[index];
        const label = answerLabels[index];
        if (option && label) {
            const originalText = label.textContent;
            
            label.textContent = '[Скрыто]';
            label.style.opacity = '0.5';
            option.style.pointerEvents = 'none';
            
            // Восстановим через 5 секунд
            setTimeout(() => {
                label.textContent = originalText;
                label.style.opacity = '1';
                if (option) {
                    option.style.pointerEvents = 'auto';
                }
            }, 5000);
        }
    });
    
    showNotification('Подсказка: скрыты 2 неправильных варианта', 'info');
}

function updateTestStats() {
    if (correctCountSpan) correctCountSpan.textContent = correctAnswers;
    if (wrongCountSpan) wrongCountSpan.textContent = wrongAnswers;
    
    const total = correctAnswers + wrongAnswers;
    const accuracy = total > 0 ? Math.round((correctAnswers / total) * 100) : 0;
    if (accuracySpan) accuracySpan.textContent = `${accuracy}%`;
}

// ===== РЕЖИМ КАРТОЧЕК =====

function initCardsMode() {
    loadCard(currentCardIndex);
}

function loadCard(index) {
    if (index >= randomCards.length) {
        if (cardTerm) cardTerm.textContent = "Карточки закончились!";
        if (cardDefinition) cardDefinition.textContent = "Начните заново или перемешайте карточки.";
        return;
    }
    
    const card = randomCards[index];
    if (cardTerm) cardTerm.textContent = card.term;
    if (cardDefinition) cardDefinition.textContent = card.definition;
    
    if (cardCounter) cardCounter.textContent = `${index + 1}/${randomCards.length}`;
    if (cardCounterBack) cardCounterBack.textContent = `${index + 1}/${randomCards.length}`;
    
    // Сброс поворота карточки
    if (flashCard) flashCard.classList.remove('flipped');
    
    // Проверка, изучена ли карточка
    if (markKnownBtn) {
        if (knownCards.has(index)) {
            markKnownBtn.disabled = true;
            markKnownBtn.innerHTML = '<i class="fas fa-check-double"></i> Изучено';
            markKnownBtn.classList.add('btn-secondary');
            markKnownBtn.classList.remove('btn-success');
            if (flashCard) {
                flashCard.style.boxShadow = '0 10px 20px rgba(76, 201, 240, 0.3)';
            }
        } else {
            markKnownBtn.disabled = false;
            markKnownBtn.innerHTML = '<i class="fas fa-check"></i> Отметить как изученное';
            markKnownBtn.classList.add('btn-success');
            markKnownBtn.classList.remove('btn-secondary');
            if (flashCard) {
                flashCard.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        }
    }
    
    if (knownCountSpan) knownCountSpan.textContent = knownCards.size;
    
    // Анимация
    if (flashCard) {
        flashCard.classList.add('animate__animated', 'animate__flipInY');
        setTimeout(() => {
            flashCard.classList.remove('animate__animated', 'animate__flipInY');
        }, 500);
    }
}

function flipCard() {
    this.classList.toggle('flipped');
    
    // Анимация
    this.classList.add('animate__animated', 'animate__flipInY');
    setTimeout(() => {
        this.classList.remove('animate__animated', 'animate__flipInY');
    }, 500);
}

function showPrevCard() {
    currentCardIndex--;
    if (currentCardIndex < 0) {
        currentCardIndex = randomCards.length - 1;
    }
    loadCard(currentCardIndex);
    saveProgress();
}

function showNextCard() {
    currentCardIndex++;
    if (currentCardIndex >= randomCards.length) {
        currentCardIndex = 0;
    }
    loadCard(currentCardIndex);
    saveProgress();
}

function shuffleCards() {
    // Перемешиваем массив карточек алгоритмом Фишера-Йейтса
    for (let i = randomCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomCards[i], randomCards[j]] = [randomCards[j], randomCards[i]];
    }
    
    // Находим индекс текущего термина в перемешанном массиве
    const currentTerm = cardTerm ? cardTerm.textContent : '';
    const newIndex = randomCards.findIndex(card => card.term === currentTerm);
    currentCardIndex = newIndex !== -1 ? newIndex : 0;
    
    loadCard(currentCardIndex);
    showNotification('Карточки перемешаны!', 'success');
    saveProgress();
}

function markCardAsKnown() {
    knownCards.add(currentCardIndex);
    loadCard(currentCardIndex);
    showNotification('Карточка отмечена как изученная', 'success');
    saveProgress();
}

function markCardForRepeat() {
    knownCards.delete(currentCardIndex);
    loadCard(currentCardIndex);
    showNotification('Карточка добавлена в список повторения', 'info');
    saveProgress();
}

// ===== РЕЖИМ СОПОСТАВЛЕНИЯ =====

function initMatchingMode() {
    resetMatchingGame();
}

function resetMatchingGame() {
    // Очищаем списки
    if (termsList) termsList.innerHTML = '';
    if (definitionsList) definitionsList.innerHTML = '';
    
    // Перемешиваем данные для игры
    const shuffledTerms = [...randomMatchingData].sort(() => Math.random() - 0.5);
    const shuffledDefinitions = [...randomMatchingData].sort(() => Math.random() - 0.5);
    
    // Сбрасываем состояние
    selectedTerm = null;
    selectedDefinition = null;
    matchedPairs = 0;
    
    // Заполняем колонку терминов
    shuffledTerms.forEach((item, index) => {
        if (termsList) {
            const termElement = document.createElement('div');
            termElement.className = 'match-item';
            termElement.textContent = item.term;
            termElement.dataset.id = index;
            termElement.dataset.term = item.term;
            termElement.dataset.definition = item.definition;
            termElement.addEventListener('click', () => selectTerm(termElement));
            termsList.appendChild(termElement);
        }
    });
    
    // Заполняем колонку определений
    shuffledDefinitions.forEach((item, index) => {
        if (definitionsList) {
            const definitionElement = document.createElement('div');
            definitionElement.className = 'match-item';
            definitionElement.textContent = item.definition;
            definitionElement.dataset.id = index;
            definitionElement.dataset.term = item.term;
            definitionElement.dataset.definition = item.definition;
            definitionElement.addEventListener('click', () => selectDefinition(definitionElement));
            definitionsList.appendChild(definitionElement);
        }
    });
    
    // Обновляем статистику
    if (matchedCountSpan) matchedCountSpan.textContent = matchedPairs;
    if (totalMatchesSpan) totalMatchesSpan.textContent = randomMatchingData.length;
    
    // Очищаем обратную связь
    if (matchFeedback) {
        matchFeedback.innerHTML = '<p>Выберите термин в левой колонке и соответствующее определение в правой.</p>';
        matchFeedback.style.backgroundColor = '#f8f9fa';
    }
}

function selectTerm(element) {
    // Если элемент уже сопоставлен, игнорируем
    if (element.classList.contains('matched')) return;
    
    // Снимаем выделение с предыдущего выбора
    document.querySelectorAll('.match-item.selected').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Выделяем выбранный элемент
    element.classList.add('selected');
    selectedTerm = element;
    
    // Проверяем, есть ли уже выбранное определение
    if (selectedDefinition) {
        checkMatch();
    }
}

function selectDefinition(element) {
    // Если элемент уже сопоставлен, игнорируем
    if (element.classList.contains('matched')) return;
    
    // Снимаем выделение с предыдущего выбора
    document.querySelectorAll('.match-item.selected').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Выделяем выбранный элемент
    element.classList.add('selected');
    selectedDefinition = element;
    
    // Проверяем, есть ли уже выбранный термин
    if (selectedTerm) {
        checkMatch();
    }
}

function checkMatch() {
    if (!selectedTerm || !selectedDefinition) return;
    
    // Проверяем, соответствует ли выбранная пара
    const term = selectedTerm.dataset.term;
    const definition = selectedDefinition.dataset.definition;
    
    if (term === selectedDefinition.dataset.term && definition === selectedTerm.dataset.definition) {
        // Правильное сопоставление
        selectedTerm.classList.add('matched');
        selectedTerm.classList.remove('selected');
        selectedDefinition.classList.add('matched');
        selectedDefinition.classList.remove('selected');
        
        matchedPairs++;
        if (matchedCountSpan) matchedCountSpan.textContent = matchedPairs;
        
        // Показываем позитивную обратную связь
        if (matchFeedback) {
            matchFeedback.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-check-circle" style="font-size: 2rem; color: #4cc9f0; margin-bottom: 10px;"></i>
                    <p style="font-weight: bold; color: #4cc9f0;">Правильно! "${term}" соответствует выбранному определению</p>
                </div>
            `;
            matchFeedback.style.backgroundColor = 'rgba(76, 201, 240, 0.1)';
        }
        
        // Проверяем, завершена ли игра
        if (matchedPairs === randomMatchingData.length && matchFeedback) {
            setTimeout(() => {
                matchFeedback.innerHTML = `
                    <div style="text-align: center;">
                        <i class="fas fa-trophy" style="font-size: 2rem; color: #f8961e; margin-bottom: 10px;"></i>
                        <p style="font-weight: bold;">Поздравляем! Вы успешно сопоставили все термины и определения!</p>
                        <button class="btn btn-primary" onclick="resetMatchingGame()" style="margin-top: 15px;">
                            <i class="fas fa-redo"></i> Играть снова
                        </button>
                    </div>
                `;
                matchFeedback.style.backgroundColor = 'rgba(248, 150, 30, 0.1)';
            }, 1000);
        }
    } else {
        // Неправильное сопоставление
        if (matchFeedback) {
            matchFeedback.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-times-circle" style="font-size: 2rem; color: #f94144; margin-bottom: 10px;"></i>
                    <p style="font-weight: bold; color: #f94144;">Неправильно! Попробуйте еще раз.</p>
                </div>
            `;
            matchFeedback.style.backgroundColor = 'rgba(249, 65, 68, 0.1)';
        }
        
        // Снимаем выделение через секунду
        setTimeout(() => {
            if (selectedTerm) selectedTerm.classList.remove('selected');
            if (selectedDefinition) selectedDefinition.classList.remove('selected');
            selectedTerm = null;
            selectedDefinition = null;
        }, 1000);
    }
    
    // Сбрасываем выбранные элементы
    setTimeout(() => {
        if (selectedTerm && selectedTerm.classList.contains('selected')) {
            selectedTerm.classList.remove('selected');
        }
        if (selectedDefinition && selectedDefinition.classList.contains('selected')) {
            selectedDefinition.classList.remove('selected');
        }
        selectedTerm = null;
        selectedDefinition = null;
    }, 1500);
}

// ===== РЕЖИМ ЗАПОЛНЕНИЯ ПРОПУСКОВ =====

function initFillMode() {
    loadFillQuestion(currentFillIndex);
}

function loadFillQuestion(index) {
    if (index >= randomFillData.length) {
        if (fillText) {
            fillText.textContent = "Вы заполнили все пропуски! Начните заново или перейдите в другой режим.";
        }
        if (fillOptions) fillOptions.innerHTML = '';
        if (checkFillBtn) checkFillBtn.disabled = true;
        if (nextFillBtn) nextFillBtn.disabled = true;
        return;
    }
    
    const fillItem = randomFillData[index];
    
    // Формируем текст с пропусками
    if (fillText) {
        let displayText = fillItem.text;
        fillItem.blanks.forEach(blank => {
            displayText = displayText.replace(`[${blank.id}]`, `<span class="blank" data-id="${blank.id}">_____</span>`);
        });
        
        fillText.innerHTML = displayText;
    }
    
    if (fillNumberSpan) {
        fillNumberSpan.textContent = index + 1;
    }
    
    // Заполняем варианты ответов
    if (fillOptions) {
        fillOptions.innerHTML = '';
        
        // Собираем все варианты из всех пропусков
        const allOptions = [];
        fillItem.blanks.forEach(blank => {
            blank.options.forEach(option => {
                if (!allOptions.includes(option)) {
                    allOptions.push(option);
                }
            });
        });
        
        // Перемешиваем варианты
        const shuffledOptions = [...allOptions].sort(() => Math.random() - 0.5);
        
        // Создаем элементы вариантов
        shuffledOptions.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'fill-option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectFillOption(optionElement, option));
            fillOptions.appendChild(optionElement);
        });
    }
    
    // Сбрасываем состояние
    if (selectedAnswersDiv) selectedAnswersDiv.innerHTML = '';
    selectedBlanks = {};
    
    if (fillFeedback) {
        fillFeedback.innerHTML = '<p>Выберите правильный вариант для каждого пропуска в тексте.</p>';
        fillFeedback.style.backgroundColor = '#f8f9fa';
    }
    
    if (checkFillBtn) checkFillBtn.disabled = false;
    if (nextFillBtn) nextFillBtn.disabled = true;
    
    // Обновляем статистику
    if (filledCountSpan) filledCountSpan.textContent = correctFills;
    if (totalFillSpan) totalFillSpan.textContent = randomFillData.length;
}

let selectedBlanks = {};

function selectFillOption(element, option) {
    // Если вариант уже использован, игнорируем
    if (element.classList.contains('used')) return;
    
    // Снимаем выделение с предыдущих выбранных вариантов
    document.querySelectorAll('.fill-option.selected').forEach(item => {
        if (!item.classList.contains('used')) {
            item.classList.remove('selected');
        }
    });
    
    // Выделяем выбранный вариант
    element.classList.add('selected');
    
    // Находим первый незаполненный пропуск
    const blanks = document.querySelectorAll('.blank');
    let blankToFill = null;
    
    for (const blank of blanks) {
        if (blank.textContent === '_____') {
            blankToFill = blank;
            break;
        }
    }
    
    if (blankToFill) {
        // Сохраняем выбранный вариант для этого пропуска
        const blankId = blankToFill.dataset.id;
        selectedBlanks[blankId] = option;
        
        // Заполняем пропуск
        blankToFill.textContent = option;
        blankToFill.style.color = '#4361ee';
        blankToFill.style.fontWeight = 'bold';
        
        // Добавляем в список выбранных ответов
        if (selectedAnswersDiv) {
            const selectedAnswer = document.createElement('div');
            selectedAnswer.className = 'selected-answer';
            selectedAnswer.innerHTML = `
                <span>Пропуск ${blankId}: ${option}</span>
                <i class="fas fa-times" onclick="removeFillSelection(${blankId}, '${option.replace(/'/g, "\\'")}')"></i>
            `;
            selectedAnswersDiv.appendChild(selectedAnswer);
        }
        
        // Помечаем вариант как использованный
        element.classList.remove('selected');
        element.classList.add('used');
        element.style.cursor = 'default';
        
        // Проверяем, все ли пропуски заполнены
        const allFilled = Array.from(blanks).every(blank => blank.textContent !== '_____');
        
        if (allFilled && checkFillBtn) {
            checkFillBtn.disabled = false;
        }
    }
}

function removeFillSelection(blankId, option) {
    // Удаляем из выбранных
    delete selectedBlanks[blankId];
    
    // Восстанавливаем пропуск
    const blankElement = document.querySelector(`.blank[data-id="${blankId}"]`);
    if (blankElement) {
        blankElement.textContent = '_____';
        blankElement.style.color = '';
        blankElement.style.fontWeight = '';
        blankElement.innerHTML = '_____';
    }
    
    // Восстанавливаем вариант ответа
    const fillOptionsElements = document.querySelectorAll('.fill-option');
    fillOptionsElements.forEach(element => {
        if (element.textContent === option && element.classList.contains('used')) {
            element.classList.remove('used');
            element.style.cursor = 'pointer';
        }
    });
    
    // Удаляем из списка выбранных
    if (selectedAnswersDiv) {
        const answers = selectedAnswersDiv.querySelectorAll('.selected-answer');
        answers.forEach(answer => {
            if (answer.textContent.includes(`Пропуск ${blankId}: ${option}`)) {
                answer.remove();
            }
        });
    }
    
    // Обновляем кнопку проверки
    const blanks = document.querySelectorAll('.blank');
    const allFilled = Array.from(blanks).every(blank => blank.textContent !== '_____');
    if (checkFillBtn) {
        checkFillBtn.disabled = !allFilled;
    }
}

function checkFillAnswer() {
    const fillItem = randomFillData[currentFillIndex];
    let allCorrect = true;
    
    // Проверяем каждый пропуск
    fillItem.blanks.forEach(blank => {
        const blankElement = document.querySelector(`.blank[data-id="${blank.id}"]`);
        const userAnswer = selectedBlanks[blank.id];
        
        if (userAnswer === blank.correct) {
            // Правильный ответ
            blankElement.style.color = '#4cc9f0';
            blankElement.style.backgroundColor = 'rgba(76, 201, 240, 0.1)';
            blankElement.style.padding = '2px 5px';
            blankElement.style.borderRadius = '4px';
        } else {
            // Неправильный ответ
            blankElement.style.color = '#f94144';
            blankElement.style.backgroundColor = 'rgba(249, 65, 68, 0.1)';
            blankElement.style.padding = '2px 5px';
            blankElement.style.borderRadius = '4px';
            blankElement.innerHTML = `${userAnswer} <span style="color: #4cc9f0; font-weight: normal;">(правильно: ${blank.correct})</span>`;
            allCorrect = false;
        }
    });
    
    // Показываем обратную связь
    if (fillFeedback) {
        if (allCorrect) {
            fillFeedback.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-check-circle" style="font-size: 2rem; color: #4cc9f0; margin-bottom: 10px;"></i>
                    <p style="font-weight: bold; color: #4cc9f0;">Правильно! Все пропуски заполнены верно.</p>
                </div>
            `;
            fillFeedback.style.backgroundColor = 'rgba(76, 201, 240, 0.1)';
            correctFills++;
        } else {
            fillFeedback.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-times-circle" style="font-size: 2rem; color: #f94144; margin-bottom: 10px;"></i>
                    <p style="font-weight: bold; color: #f94144;">Есть ошибки! Проверьте правильные ответы выше.</p>
                </div>
            `;
            fillFeedback.style.backgroundColor = 'rgba(249, 65, 68, 0.1)';
        }
    }
    
    if (checkFillBtn) checkFillBtn.disabled = true;
    if (nextFillBtn) nextFillBtn.disabled = false;
    
    // Обновляем статистику
    if (filledCountSpan) filledCountSpan.textContent = correctFills;
    
    saveProgress();
}

function nextFillQuestion() {
    currentFillIndex++;
    
    if (currentFillIndex >= randomFillData.length) {
        currentFillIndex = 0;
    }
    
    selectedBlanks = {};
    loadFillQuestion(currentFillIndex);
    saveProgress();
}

function showFillHint() {
    const fillItem = randomFillData[currentFillIndex];
    
    // Находим первый незаполненный пропуск
    const blanks = document.querySelectorAll('.blank');
    let blankToHint = null;
    
    for (const blank of blanks) {
        if (blank.textContent === '_____') {
            blankToHint = blank;
            break;
        }
    }
    
    if (blankToHint) {
        const blankId = blankToHint.dataset.id;
        const correctBlank = fillItem.blanks.find(b => b.id == blankId);
        
        if (correctBlank) {
            // Находим элемент с правильным ответом среди вариантов
            const fillOptionsElements = document.querySelectorAll('.fill-option');
            const correctOptionElement = Array.from(fillOptionsElements).find(
                element => element.textContent === correctBlank.correct && !element.classList.contains('used')
            );
            
            if (correctOptionElement) {
                // Подсвечиваем правильный вариант на 3 секунды
                const originalBg = correctOptionElement.style.backgroundColor;
                const originalBorder = correctOptionElement.style.border;
                correctOptionElement.style.backgroundColor = 'rgba(76, 201, 240, 0.3)';
                correctOptionElement.style.border = '2px solid #4cc9f0';
                
                setTimeout(() => {
                    correctOptionElement.style.backgroundColor = originalBg;
                    correctOptionElement.style.border = originalBorder;
                }, 3000);
                
                showNotification(`Подсказка: подсвечен правильный вариант для пропуска ${blankId}`, 'info');
            }
        }
    } else {
        showNotification('Все пропуски уже заполнены!', 'info');
    }
}

function clearFillSelections() {
    // Очищаем все выборы
    selectedBlanks = {};
    
    // Восстанавливаем все пропуски
    const blanks = document.querySelectorAll('.blank');
    blanks.forEach(blank => {
        blank.textContent = '_____';
        blank.style.color = '';
        blank.style.backgroundColor = '';
        blank.style.padding = '';
        blank.style.borderRadius = '';
        blank.innerHTML = '_____';
    });
    
    // Восстанавливаем все варианты
    const fillOptionsElements = document.querySelectorAll('.fill-option');
    fillOptionsElements.forEach(element => {
        element.classList.remove('used', 'selected');
        element.style.cursor = 'pointer';
        element.style.backgroundColor = '';
        element.style.border = '';
    });
    
    // Очищаем список выбранных
    if (selectedAnswersDiv) selectedAnswersDiv.innerHTML = '';
    
    // Обновляем кнопки
    if (checkFillBtn) checkFillBtn.disabled = false;
    if (nextFillBtn) nextFillBtn.disabled = true;
    
    // Очищаем обратную связь
    if (fillFeedback) {
        fillFeedback.innerHTML = '<p>Выберите правильный вариант для каждого пропуска в тексте.</p>';
        fillFeedback.style.backgroundColor = '#f8f9fa';
    }
    
    showNotification('Все выборы очищены', 'info');
}

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====

function showNotification(message, type = 'info') {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = 'fa-info-circle';
    switch (type) {
        case 'success': icon = 'fa-check-circle'; break;
        case 'warning': icon = 'fa-exclamation-circle'; break;
        case 'error': icon = 'fa-times-circle'; break;
    }
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icon}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Добавляем стили
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4cc9f0' : type === 'warning' ? '#f8961e' : type === 'error' ? '#f94144' : '#4361ee'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        max-width: 300px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Удаляем через 3 секунды
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Добавляем CSS для анимаций уведомлений
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Экспортируем функции для глобального использования
window.resetMatchingGame = resetMatchingGame;
window.removeFillSelection = removeFillSelection;
// Дополнительные функции для мобильной версии

function setupMobileOptimizations() {
    // Обработка касаний для улучшенного UX
    if ('ontouchstart' in window) {
        // Улучшаем обратную связь при касании
        document.querySelectorAll('.answer-option, .match-item, .fill-option').forEach(el => {
            el.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            el.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
        });
    }
    
    // Предотвращение масштабирования при двойном тапе
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Улучшение работы выпадающих списков на мобильных
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
        select.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        });
    });
    
    // Адаптация высоты текстовых элементов
    function adjustMobileLayout() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Устанавливаем минимальную высоту для лучшего UX
            document.querySelectorAll('.answer-option').forEach(el => {
                el.style.minHeight = '44px';
            });
            
            document.querySelectorAll('.btn').forEach(el => {
                el.style.minHeight = '48px';
                el.style.display = 'flex';
                el.style.alignItems = 'center';
                el.style.justifyContent = 'center';
            });
            
            // Улучшаем отображение карточек
            const flashCard = document.getElementById('flash-card');
            if (flashCard) {
                flashCard.style.minHeight = '250px';
            }
        }
    }
    
    // Выполняем при загрузке и при изменении размера
    adjustMobileLayout();
    window.addEventListener('resize', adjustMobileLayout);
}

// Добавьте вызов функции в конец DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... существующий код ...
    
    // Инициализация мобильных оптимизаций
    setupMobileOptimizations();
    
    // Открытие/закрытие бокового меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    
    if (mobileMenuBtn && mobileMenu && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('show');
            mobileMenuOverlay.style.display = 'block';
            setTimeout(() => {
                mobileMenuOverlay.style.opacity = '1';
            }, 10);
        });
        
        mobileMenuOverlay.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            mobileMenuOverlay.style.opacity = '0';
            setTimeout(() => {
                mobileMenuOverlay.style.display = 'none';
            }, 300);
        });
        
        // Закрытие по кнопке в меню
        const mobileMenuClose = document.querySelector('.mobile-menu-close');
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                mobileMenuOverlay.style.opacity = '0';
                setTimeout(() => {
                    mobileMenuOverlay.style.display = 'none';
                }, 300);
            });
        }
    }
});