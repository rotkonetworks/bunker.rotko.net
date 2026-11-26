import type { JSX } from "solid-js";
import type { Source } from "../data";

export function Ext(props: { href: string; children: JSX.Element; class?: string }) {
  return (
    <a href={props.href} class={props.class} rel="noopener noreferrer" target="_blank">
      {props.children}
    </a>
  );
}

/** Visible source link, placed right after the figure it backs. */
export function Src(props: { s: Source | Source[] }) {
  const list = () => (Array.isArray(props.s) ? props.s : [props.s]);
  return (
    <>
      {" "}
      <span class="src">
      (Source:{" "}
      {list().map((s, i) => (
        <>
          {i > 0 && "; "}
          <Ext href={s.url}>{s.label}</Ext>
        </>
      ))}
      )
      </span>
    </>
  );
}

export function Kicker(props: { children: JSX.Element }) {
  return <p class="kicker">{props.children}</p>;
}

export function Section(props: {
  id: string;
  tone: "dark" | "light" | "concrete";
  children: JSX.Element;
}) {
  const cls = () =>
    props.tone === "light" ? "sec light" : props.tone === "concrete" ? "sec dark concrete" : "sec dark";
  return (
    <section id={props.id} class={cls()} aria-labelledby={`${props.id}-h`}>
      <div class="wrap">{props.children}</div>
    </section>
  );
}

export function Hazard() {
  return <div class="hazard" aria-hidden="true" />;
}
