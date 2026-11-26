import { SRC } from "../data";
import { Kicker, Section, Src } from "./ui";

export function Problem() {
  return (
    <Section id="problem" tone="dark">
      <Kicker>01 · The problem</Kicker>
      <h2 id="problem-h" class="max-w-[46rem]">
        The internet is getting scarier.
      </h2>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <div class="plate">
          <p class="stat">$6.3B</p>
          <p class="mt-3">
            drained from Binance's hot wallets on 29 October 2026, the largest crypto theft on record.
            Attributed to North Korea's TraderTraitor group. TRM Labs puts it at USD 6.36 billion.
            <Src s={[SRC.binanceWiki, SRC.binanceTrm]} />
          </p>
        </div>
        <div class="plate">
          <p class="stat">$8.78B</p>
          <p class="mt-3">
            stolen in 328 hacks in 2026, counted to early November.
            <Src s={SRC.hacks2026} />
          </p>
        </div>
        <div class="plate">
          <p class="stat">$387.5M</p>
          <p class="mt-3">
            lost by Bitget in September 2026.
            <Src s={SRC.bitget} />
          </p>
        </div>
      </div>
      <p class="lead mt-10">
        A browser wallet keeps your key on the same machine that runs every website, extension and
        download you open. One bad click is enough.
      </p>
    </Section>
  );
}

export function SupplyChain() {
  return (
    <Section id="supply" tone="concrete">
      <Kicker>02 · Even hardware wallets</Kicker>
      <h2 id="supply-h" class="max-w-[46rem]">
        A wallet in the mail can be opened before it reaches you.
      </h2>
      <div class="mt-8 grid gap-8 md:grid-cols-[1.3fr_1fr] items-start">
        <div class="prose">
          <p>
            In October 2026, Ledger devices sold by the Southeast Asian reseller CryptoBilis were found to
            carry a hidden cellular implant. It read the 24-word recovery phrase off the screen during
            setup and sent it out over the mobile network.
            <Src s={SRC.ledgerCoindesk} />
          </p>
          <p>
            Ledger's Genuine Check verifies the secure chip, so it cannot detect an added implant that
            leaves that chip untouched.
            <Src s={SRC.ledgerGenuine} />
          </p>
        </div>
        <div class="plate">
          <p class="stat">$86–93M</p>
          <p class="mt-3">
            estimated losses from more than 300 wallets, according to on-chain researchers. Ledger has
            not confirmed a total.
            <Src s={[SRC.ledgerCoindeskRange, SRC.ledgerCoindesk, SRC.ledgerHalborn]} />
          </p>
        </div>
      </div>
      <div class="mt-10 border-l-6 border-bnb pl-5 max-w-[46rem]">
        <p class="text-[1.15em] font-700">
          With Bunker there is no crypto device in the mail to intercept.
        </p>
        <p class="mt-2 muted">
          You install open-source software, with a published checksum and signature, on a phone you
          already own.
        </p>
      </div>
    </Section>
  );
}
