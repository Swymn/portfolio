import React from "react";

import { TypeWritter } from '@Components/type-writter/TypeWritter';

const sentence = [
    "Let's do amazing things together.",
    "I'm a full-stack developer.",
    "I'm a java developer.",
    "I'm a typescript developer.",
    "I'm a react developer.",
    "I'm a javascript developer.",
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

            <div className="flex flex-col lg:flex-row items-center justify-between mx-2 my-8">
                <div className="text-left h-64 md:h-32 lg:h-fit w-full lg:w-fit">
                    <h1 className="text-5xl font-bold">Hi, I'm <span className="text-orange">Ugo</span>.</h1>
                    <TypeWritter text={shuffle(sentence)} />
                </div>

                <div className="w-64 h-64 lg:mr-[10vw]">
                    <img src="/img/profile-picture.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
                </div>
            </div>
            
        </div>
    );
};