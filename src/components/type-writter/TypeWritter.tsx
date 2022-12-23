/**
 * @typedef {Object} TypeWritterProps
 * @property {string[]} text - Text to display
 * @property {string?} className - TypeWritter class name
 */

import React, { useEffect, useState } from "react";

import "./type-writter.scss";

interface TypeWritterProps {
    text: string[];
    className?: string;
}

/**
 * TypeWritter component, used to display a type writter effect
 * 
 * @name TypeWritter
 * 
 * @returns {JSX.Element} - TypeWritter component
 */
export const TypeWritter: React.FC<TypeWritterProps> = ({ text, className }): JSX.Element => {
    
    const [currentWord, setCurrentWord] = useState<string>('');
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timer;
        let timeout: NodeJS.Timer;

        const toggleWriting = () => {
            setIsFinished(true);
            clearTimeout(timeout);
        }

        const typeWriter = () => {
            if (wordIndex === text.length) {
                clearInterval(interval);
            } else {
                setCurrentWord((prevState) => {
                    let word;

                    if (!isFinished) {
                        word = prevState + (text[wordIndex][currentWord.length] ?? '');
                    } else {
                        word = prevState.slice(0, -1);
                    }

                    if (word.length === text[wordIndex].length) {
                        timeout = setTimeout(toggleWriting, 1000);
                    }
                    if (word.length === 0) {
                        setIsFinished(false);
                        setWordIndex((prevIndexState) => (prevIndexState + 1) % text.length);
                        setCurrentWord('');
                    }

                    return word;
                });
            }
        }

        interval = setInterval(typeWriter, 50);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    }, [currentWord, wordIndex, isFinished, text]);

    return (
        <div className={className}>
            <h1 className="text-5xl font-bold">{currentWord}<span className="text-orange blink">|</span></h1>
        </div>
    );
};
