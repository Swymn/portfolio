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
    
    const [currentText, setCurrentText] = useState<string>("");
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState<number>(0);
    const [isRenderEntirely, setIsRenderEntirely] = useState<boolean>(false);

    useEffect(() => {
        if (currentCharacterIndex === 0 && isRenderEntirely) {
            setTimeout(() => {
                setCurrentTextIndex((currentTextIndex + 1) % text.length);
                setCurrentCharacterIndex(0);
                setIsRenderEntirely(false);
            }, 5000);
        } else {
            if (currentCharacterIndex === text[currentTextIndex].length) {
                setTimeout(() => {
                    setIsRenderEntirely(true);
                }, 2000);
            }

            if (isRenderEntirely) {
                setTimeout(() => {
                    setCurrentCharacterIndex(currentCharacterIndex - 1);
                }, 100);
            } else {
                setTimeout(() => {
                    setCurrentCharacterIndex(currentCharacterIndex + 1);
                }, 100);
            }
        }
    }, [currentCharacterIndex, currentTextIndex, text, isRenderEntirely]);

    useEffect(() => {
        setCurrentText(text[currentTextIndex].substring(0, currentCharacterIndex));
    }, [currentCharacterIndex, currentTextIndex, text]);

    return (
        <div className={className}>
            <h1 className="text-5xl font-bold">{currentText}<span className="text-orange blink">|</span></h1>
        </div>
    );
};
