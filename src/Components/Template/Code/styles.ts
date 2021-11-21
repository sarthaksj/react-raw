import styled from "styled-components";

export const Wrapper = styled.div`
      box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
            0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
      background-color: #ffffff20;
`;

export const Pre = styled.pre`
      text-align: left;
      margin: 0;
      font-size: 1rem;
      overflow-y: scroll;
      padding: 0.5em;
      min-height: 550px;
      max-height: 550px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

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
`;
