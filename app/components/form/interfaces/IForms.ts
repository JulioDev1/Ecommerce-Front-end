import { ReactNode } from "react";

export type IForms = Readonly<{
    children: ReactNode;
    onSubmit:(e: React.FormEvent<HTMLFormElement>) => void;
}>