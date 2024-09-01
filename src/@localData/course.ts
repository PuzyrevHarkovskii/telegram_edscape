export type ContentItemType = "title" | "text" | "image" | "video"

interface ICourseAboutItem {
    contentId: string,
    type: ContentItemType,
    content: string
}

export const courseAboutItems: ICourseAboutItem[] = [
    {
        contentId: "1",
        type: "title",
        content: "Lorem ipsum dolor sit amet"
    },
    {
        contentId: "2",
        type: "text",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum eos exercitationem incidunt itaque voluptas? Architecto"
    },
    {
        contentId: "3",
        type: "image",
        content: "https://api.vladey.net/storage/artwork/7256/cover_preview_image-866e7d71e96e1b44c1ab603f5016bab4.jpg"
    },
    {
        contentId: "4",
        type: "video",
        content: "https://www.youtube.com/watch?bhmrWNxt7ak"
    },
    {
        contentId: "5",
        type: "title",
        content: "Lorem ipsum dolor sit amet"
    },
    {
        contentId: "6",
        type: "text",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum eos exercitationem incidunt itaque voluptas? Architecto"
    },
    {
        contentId: "7",
        type: "image",
        content: "https://api.vladey.net/storage/artwork/7256/cover_preview_image-866e7d71e96e1b44c1ab603f5016bab4.jpg"
    }
]

export type CourseProgramIconType = "play" | "quiz" | "book"

interface ICourseProgramElements {
    headerId: string,
    title: string,
    isCompleted: boolean
    headerItems: ICourseProgramItem[]
}

export interface ICourseProgramItem {
    itemId: string,
    type: CourseProgramIconType,
    title: string,
    exp: number,
    isCompleted: boolean
}

export const courseProgramElements: ICourseProgramElements[] = [
    {
        headerId: "1",
        title: "Анализ данных [Header]",
        isCompleted: false,
        headerItems: [
            {
                itemId: "8",
                type: "book",
                title: "Анализ данных [Item]",
                exp: 4,
                isCompleted: true
            },
            {
                itemId: "9",
                type: "play",
                title: "Анализ данных [Item]",
                exp: 4,
                isCompleted: false
            },
            {
                itemId: "15",
                type: "quiz",
                title: "Анализ данных [Item]",
                exp: 8,
                isCompleted: false
            },
            {
                itemId: "16",
                type: "book",
                title: "Анализ данных [Item]",
                exp: 8,
                isCompleted: false
            }
        ]
    },
    {
        headerId: "2",
        title: "Анализ данных [Header]",
        isCompleted: false,
        headerItems: [
            {
                itemId: "12",
                type: "book",
                title: "Анализ данных [Item]",
                exp: 4,
                isCompleted: false
            },
            {
                itemId: "21",
                type: "book",
                title: "Анализ данных [Item]",
                exp: 4,
                isCompleted: false
            },
        ]
    },
    {
        headerId: "3",
        title: "Анализ данных [Header]",
        isCompleted: false,
        headerItems: [
            {
                itemId: "13",
                type: "play",
                title: "Анализ данных [Item]",
                exp: 4,
                isCompleted: false
            }
        ]
    }
]

export const courseProgramContentElements = [
    {
        id: "78ghyPU12",
        item: [
            {
                contentId: "1",
                type: "title",
                content: "Lorem ipsum dolor sit amet"
            },
            {
                contentId: "2",
                type: "text",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum eos exercitationem incidunt itaque voluptas? Architecto"
            },
            {
                contentId: "3",
                type: "image",
                content: "https://api.vladey.net/storage/artwork/7256/cover_preview_image-866e7d71e96e1b44c1ab603f5016bab4.jpg"
            }
        ]
    }
]

export const courseItemElements: ICourseAboutItem[] = [
    {
        contentId: "1",
        type: "title",
        content: "Lorem ipsum dolor sit amet"
    },
    {
        contentId: "2",
        type: "text",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum eos exercitationem incidunt itaque voluptas? Architecto"
    },
    {
        contentId: "3",
        type: "image",
        content: "https://api.vladey.net/storage/artwork/7256/cover_preview_image-866e7d71e96e1b44c1ab603f5016bab4.jpg"
    }
]