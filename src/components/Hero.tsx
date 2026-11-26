import wordmark from "../assets/brand/wordmark.svg";
import mark from "../assets/brand/mark.svg";

export default function Hero() {
  return (
    <section id="top" class="hero dark concrete formties" aria-labelledby="top-h">
      <div class="wrap grid gap-12 md:grid-cols-[1.15fr_1fr] items-center">
        <div>
          <h1 id="top-h">
            <img src={wordmark} alt="Bunker" width="204" height="40" class="hero-wordmark" />
          </h1>
          <p class="hero-line mt-7">
            Old phone.
            <br />
            New vault.
          </p>
          <p class="mt-7 text-[1.2em] leading-snug max-w-[34rem]">
            Bunker turns an old Android phone into an offline hardware wallet for{" "}
            <strong>BNB Smart Chain</strong>.
          </p>
          <p class="lead mt-4">
            It pairs with MetaMask or Rabby over QR codes. The phone stays in airplane mode and the app
            has no internet permission. Free and open source.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <a href="https://foss.rotko.net/#bunker" class="btn btn-primary">
              Get it on F-Droid
            </a>
            <a href="https://github.com/rotkonetworks/bunker/releases/latest" class="btn btn-ghost">
              GitHub release
            </a>
            <a href="#how" class="btn btn-ghost">
              How it works
            </a>
          </div>
          <p class="mt-8">
            <span class="badge">Version 0.1</span>
            <span class="muted ml-3 text-[0.9em] inline-block">Android 8 or newer · <span class="whitespace-nowrap">Apache-2.0</span></span>
          </p>
        </div>
        <div aria-hidden="true">
          <div class="door">
            <img src={mark} alt="" width="48" height="52" class="door-wheel" />
          </div>
        </div>
      </div>
    </section>
  );
}
