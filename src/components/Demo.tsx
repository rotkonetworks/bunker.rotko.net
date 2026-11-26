import { Kicker, Section } from "./ui";

export function Demo() {
  return (
    <Section id="demo" tone="concrete">
      <Kicker>See it in action</Kicker>
      <h2 id="demo-h" class="max-w-[46rem]">
        A real phone, signing a real transaction.
      </h2>
      <p class="lead mt-5 max-w-[46rem]">
        An offline Android phone pairs with MetaMask over QR codes, shows the transaction in full,
        and signs it with a fingerprint — all in airplane mode.
      </p>
      <div class="mt-10">
        <video
          class="w-full rounded-lg border border-[var(--line,#262B31)]"
          controls
          preload="metadata"
          playsinline
          poster="/demo-poster.jpg"
        >
          <source src="/demo.mp4" type="video/mp4" />
          Your browser can’t play this video.{" "}
          <a href="/demo.mp4">Download the demo</a>.
        </video>
      </div>
    </Section>
  );
}
