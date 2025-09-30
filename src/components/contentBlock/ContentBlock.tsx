import type { FC } from 'react';

interface ContentBlockProps {
    header: string;
    subheader?: string;
    content: string[];
}

const ContentBlock: FC<ContentBlockProps> = ({header, subheader, content}) => {
    return (
        <div>
            <h2>{header}</h2>
            {subheader && <h3>{subheader}</h3>}
            
            <ul>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default ContentBlock;