export interface Answer {
    text: string;
    score: number;
}

export interface Question {
    src: string;
    answers: Answer[];
    desc: string;
    isActive: boolean
}

export const questions: Question[] = [
    {
        src: 'https://res.cloudinary.com/arikxl/image/upload/v1737737388/Ella2023/geg1dm04aomhzpft6gpv.png',
        answers: [
            {
                text: 'Jug',
                score: 10,
            },
            {
                text: 'Sniff',
                score: -5,
            },
            {
                text: 'Lick',
                score: 2,
            },
        ],
        desc: 'Peach Energy Drink',
        isActive: true
    },
    {
        src: 'https://res.cloudinary.com/arikxl/image/upload/v1737728316/Ella2023/s3cwkhid7fm76sjyprao.png',
        answers: [
            {
                text: 'Drink',
                score: 10,
            },
            {
                text: 'Smell',
                score: 2,
            },
            {
                text: 'Bath',
                score: -10,
            },
        ],
        desc: 'Hot Coffee',
        isActive:true
    },
];
