import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return React.cloneElement(children, {
        className: `
          ${children.props.className ?? ''}
          uniq-text-3xl lg:uniq-text-5xl lg:uniq-leading-tight uniq-font-bold
        `.trim().replace(/\s+/g, ' ')
    });
};

export default SectionTitle;
