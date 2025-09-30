import type { FC } from 'react';

interface ContentBlockProps {
    header: string;
    subheader?: string;
    content: string[];
}

const ContentBlock: FC<ContentBlockProps> = ({header, subheader, content}) => {
    return (
        <div>
            <h1>{header}</h1>
            {subheader && <h2>{subheader}</h2>}
            
            <ul>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default ContentBlock;