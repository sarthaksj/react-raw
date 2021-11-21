import React, { useState, useEffect } from "react";
import { Pre, Line, LineNo, LineContent, Wrapper } from "./styles";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import Tabs from "./Tabs";

type Props = {
    language: Language;
    componentFiles: { name: string; data: string }[];
};

const Code: React.FunctionComponent<Props> = ({
    language,
    componentFiles,
}) => {
    const [src, setSrc] = useState<string>(componentFiles[0].data);

    useEffect(() => {
        setSrc(componentFiles[0].data)
    }, [componentFiles])


    return (
        <Wrapper>
            {
                componentFiles.length > 1 &&
                <Tabs
                    componentFiles={componentFiles}
                    callback={(src: string) => setSrc(src)} />

            }

            <Highlight
                {...defaultProps}
                theme={theme}
                code={src.trim()}
                language={language}>

                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <Line key={i} {...getLineProps({ line, key: i })}>
                                <LineNo>{i + 1}</LineNo>
                                <LineContent>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token, key })} />
                                    ))}
                                </LineContent>
                            </Line>
                        ))}
                    </Pre>
                )}
            </Highlight>
        </Wrapper>
    );
};
export default Code;
