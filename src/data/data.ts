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
        src: 'https://res.cloudinary.com/arikxl/image/upload/v1737749162/Ella2023/i7aifdg3rnccbg3quydh.jpg',
        answers: [
            {
                text: 'Touch',
                score: -10,
            },
            {
                text: 'Drink',
                score: -15,
            },
            {
                text: 'Run',
                score: 10,
            },
        ],
        desc: 'Lava',
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
    {
        src: 'https://res.cloudinary.com/arikxl/image/upload/v1737749478/Ella2023/usdhb2xjhuqmi3uygnzb.jpg',
        answers: [
            {
                text: 'Eat',
                score: -10,
            },
            {
                text: 'Trow',
                score: 10,
            },
            {
                text: 'Smell',
                score: -3,
            },
        ],
        desc: 'Garbage Juice',
        isActive:true
    },
];
