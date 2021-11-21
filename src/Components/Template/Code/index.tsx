import React from "react";
import { Pre, Line, LineNo, LineContent, Wrapper } from "./styles";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

type Props = {
  code: string;
  language: Language;
};

const Code: React.FunctionComponent<Props> = ({
  code,
  language
}) => {
  return (
    <Wrapper>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code?.trim()}
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
