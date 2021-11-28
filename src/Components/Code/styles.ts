import styled from "styled-components";

export const Wrapper = styled.div`
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
            rgba(0, 0, 0, 0.22) 0px 15px 12px;
      border-radius: 5px;s
`;

export const Pre = styled.pre`
      background-color: #ffffff20;
      text-align: left;
      margin: 0;
      font-size: 1rem;
      overflow-y: scroll;
      padding: 0.5em;
      min-height: 550px;
      max-height: 550px;
      border-radius: 5px;

      &::-webkit-scrollbar {
            display: none;
      }

      & .token-line {
            line-height: 1.3em;
            height: 1.3em;
      }
`;

export const Line = styled.div`
      display: table-row;
`;

export const LineNo = styled.span`
      display: table-cell;
      text-align: right;
      padding-right: 1em;
      user-select: none;
      opacity: 0.5;
`;

export const LineContent = styled.span`
      display: table-cell;
      white-space: pre-wrap;
`;
