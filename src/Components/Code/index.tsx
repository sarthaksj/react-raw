import React, { useState, useEffect } from "react";
import { Pre, Line, LineNo, LineContent, Wrapper } from "./styles";
import Tabs, { TabItem } from './Tabs/index';
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import classes from "../../Stylesheets/components/_tabs.module.scss";
import theme from "prism-react-renderer/themes/nightOwl";

type Props = {
  language?: Language;
  code: string;
  componentFiles: { name: string; data: string }[];
};

const Code: React.FunctionComponent<Props> = ({
  language = 'jsx',
  code,
  componentFiles,
}) => {
  const [src, setSrc] = useState<string>(componentFiles[0].data);

  useEffect(() => {
    if (language !== 'scss') {
      setSrc(componentFiles[0].data || code)
    }
  }, [componentFiles, language, code])

  return (
    <Wrapper>
      {
        componentFiles.length > 1 &&
        <Tabs>
          {componentFiles.map((file) => {
            return (
              <TabItem
                key={file.name}
                className={src === file.data ? classes.isActive : ''}
                title={file.name}
                callback={() => setSrc(file.data)} />
            )
          })}
        </Tabs>
      }

      <Highlight
        {...defaultProps}
        theme={theme}
        code={language === 'scss' ? code.trim() : src.trim()}
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
