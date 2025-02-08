import React from "react";

export interface IMainModal{
    children:React.ReactElement;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    button:(open:any)=>void;
    header?: React.ReactElement | string;
    size?: number;
}