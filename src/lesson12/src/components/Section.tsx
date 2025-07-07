
import React, { ReactNode } from "react";

type SectionProps = {
    title?: string, 
    children: ReactNode
}
//Default title is "My Subheading" but this is overidden if the parent passes 'children' props.
export const Section = ({ children, title = "My Subheading"}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}