import React from "react";

interface TagProps {
    text: string;
    color?: string;
}


/**
 * Tag component, used to display a tag
 * 
 * @name Tag
 * 
 * @param {TagProps} props - Tag component props
 * 
 * @returns {JSX.Element} - Tag component
 */
export const Tag = ({text, color}: TagProps): JSX.Element => {

    const tagColor = color ?? "#ff9677";    

    return (
        <div style={{ backgroundColor: tagColor }} className={`rounded-full text-center w-36 px-6 py-1 text-ellipsis text-sm whitespace-nowrap overflow-hidden`}>
            <span>{text}</span>
        </div>
    );
};