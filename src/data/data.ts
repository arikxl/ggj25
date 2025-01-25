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
        src: 'https://res.cloudinary.com/arikxl/image/upload/v1737799952/Ella2023/j5anz7okgtnckum3six4.jpg',
        answers: [
            {
                text: 'Gargle',
                score: -5,
            },
            {
                text: 'Flush',
                score: 10,
            },
            {
                text: 'Drink',
                score: -10,
            },
        ],
        desc: 'This is Piss',
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
    {
        src: 'https://res.cloudinary.com/arikxl/image/upload/v1737804295/Ella2023/emhgxa29ns6ejssifmdk.jpg',
        answers: [
            {
                text: 'Lick',
                score: -10,
            },
            {
                text: 'Touch',
                score: 1,
            },
            {
                text: 'Wipe',
                score: 10,
            },
        ],
        desc: 'Human Sweat',
        isActive: true
    },
    {
        src: 'https://res.cloudinary.com/arikxl/image/upload/v1737800433/Ella2023/bmm35ziv1cqbzuuxbd1t.jpg',
        answers: [
            {
                text: 'Swallow',
                score: 10,
            },
            {
                text: 'Spit',
                score: -5,
            },
            {
                text: 'Lick',
                score: 1,
            },
        ],
        desc: 'Milkshake',
        isActive: true
    },
];
