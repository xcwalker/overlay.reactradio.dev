import { ReactNode } from "react";
import css from "../styles/components/text.module.css"

export function H1H1(props: {children: ReactNode}) {
  return <h1 className={css.h1}>{props.children}</h1>
}

export function H2H1(props: { children: ReactNode }) {
  return <h2 className={css.h1}>{props.children}</h2>;
}