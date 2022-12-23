import React from "react";

import { TypeWritter } from '@Components/type-writter/TypeWritter';

const sentence = [
    "Let's do amazing things together.",
    "I'm a full-stack developer.",
    "I'm a software engineer.",
    "I'm a web developer.",
    "I'm a programmer.",
    "I'm a computer scientist.",
    "I'm a software developer.",
    "I'm a software architect.",
]

/**
 * Home page component
 * 
 * @name HomePage
 * 
 * @returns {JSX.Element} - Home page component
 */
export const HomePage: React.FC = (): JSX.Element => {

    // This method is used to shuffle the sentence array
    const shuffle = (array: string[]) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }

    return (
        <div className="flex flex-col gap-y-10">

            <div>
                <h1 className="text-5xl font-bold">Hi, I'm <span className="text-orange">Ugo</span>.</h1>
            </div>
            
            <TypeWritter text={shuffle(sentence)}/>
        </div>
    );
};