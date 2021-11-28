import React, { Fragment, HTMLProps } from "react";
import Code from "../Code";
import { MDXProviderComponents, MDXProviderProps } from "@mdx-js/react";

export const mdxComponents: MDXProviderComponents = {
    h1: (props: MDXProviderProps) => <h1 {...props} />,

    h2: (props: MDXProviderProps) => <h2 {...props} />,

    h3: (props: MDXProviderProps) => <h3 {...props} />,

    h4: (props: MDXProviderProps) => <h4 {...props} />,

    h5: (props: MDXProviderProps) => <h5 {...props} />,

    h6: (props: MDXProviderProps) => <h5 {...props} />,

    p: (props: MDXProviderProps) => <p {...props} />,

    pre: (props) => <Fragment {...props} />,

    code: (props: HTMLProps<HTMLElement>) => {
        console.log(props);
        // Extract code language
        let lang = undefined;
        if (
            props.hasOwnProperty("className") &&
            typeof props.className !== "undefined"
        ) {
            const classes = props.className.split(" ");
            classes.forEach((element: string) => {
                if (element.includes("language")) {
                    lang = element.split("-")[1];
                }
            });
        }
        return (
            <Code
                componentFiles={[{ name: "", data: "" }]}
                code={childrenToString(props.children)}
                language={lang}
            />
        );
    },
};

const childrenToString = (
    children: HTMLProps<HTMLElement>["children"]
): string => {
    let label = "";

    React.Children.map(children, (child) => {
        if (typeof child === "string") {
            label += child;
        }
    });

    return label;
};
