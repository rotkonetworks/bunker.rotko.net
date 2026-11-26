import { Kicker, Section } from "./ui";

function Video(props: { src: string; poster: string; title: string; caption: string; track?: string }) {
  return (
    <figure class="m-0">
      <video
        class="w-full block border border-[var(--line,#262B31)]"
        controls
        preload="metadata"
        playsinline
        poster={props.poster}
        aria-label={props.title}
      >
        <source src={props.src} type="video/mp4" />
        {props.track ? <track kind="subtitles" srclang="en" label="English" src={props.track} /> : null}
        Your browser can’t play this video. <a href={props.src}>Download it</a>.
      </video>
      <figcaption class="mt-3 muted text-[0.95em]">
        <strong>{props.title}</strong> · {props.caption}
      </figcaption>
    </figure>
  );
}

export function Demo() {
  return (
    <Section id="demo" tone="concrete">
      <Kicker>See it in action</Kicker>
      <h2 id="demo-h" class="max-w-[46rem]">
        A real phone, signing a real transaction.
      </h2>
      <p class="lead mt-5 max-w-[46rem]">
        An offline Android phone and MetaMask, talking only through QR codes: a PancakeSwap swap on BNB
        Smart Chain Testnet, from request to confirmed on BscScan.
      </p>
      <div class="mt-10 grid gap-10 md:grid-cols-2">
        <Video src="/demo.mp4" poster="/demo-poster.jpg" title="Demo" caption="a testnet swap, step by step (1:28)" />
        <Video
          src="/pitch.mp4"
          poster="/pitch-poster.jpg"
          title="Why Bunker"
          caption="the problem and the idea (5:02)"
          track="/pitch.vtt"
        />
      </div>
    </Section>
  );
}
