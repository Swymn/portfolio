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
 * @param {TypeWritterProps} props - TypeWritter component props
 * 
 * @returns {JSX.Element} - TypeWritter component
 * 
 */
export const TypeWritter = ({ text, className }: TypeWritterProps): JSX.Element => {
    
    const [currentText, setCurrentText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const [isRenderEntirely, setIsRenderEntirely] = useState(false);

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
