import exposed from "../assets/brand/ic_exposed.svg";
import sealed from "../assets/brand/ic_sealed.svg";
import { SRC } from "../data";
import { Ext, Kicker, Section, Src } from "./ui";

export function Idea() {
  return (
    <Section id="idea" tone="light">
      <Kicker>03 · The idea</Kicker>
      <h2 id="idea-h" class="max-w-[46rem]">
        Your old phone becomes the bunker.
      </h2>
      <p class="lead mt-5">
        That phone in the drawer already has a camera, a screen, a fingerprint reader and a hardware-backed
        keystore. Take it off the network for good and it can hold your keys.
      </p>
      <ol class="steps mt-10">
        <li class="step plate">
          <h3>Install Bunker</h3>
          <p class="mt-2">Install the APK. Factory-reset the phone first if it was ever used for anything else.</p>
        </li>
        <li class="step plate">
          <h3>Seal the phone</h3>
          <p class="mt-2">Switch on airplane mode and turn off Wi-Fi and Bluetooth. The banner changes:</p>
          <div class="mt-3 grid gap-2">
            <div class="banner banner-exposed">
              <img src={exposed} alt="" width="24" height="24" />
              Exposed
            </div>
            <div class="banner banner-sealed">
              <img src={sealed} alt="" width="24" height="24" />
              Bunkered
            </div>
          </div>
        </li>
        <li class="step plate">
          <h3>Create or import 24 words</h3>
          <p class="mt-2">Write the recovery phrase on paper. It is the only backup, and it never leaves the phone otherwise.</p>
        </li>
        <li class="step plate">
          <h3>Pair with MetaMask</h3>
          <p class="mt-2">
            In MetaMask: <strong>Add hardware wallet → QR-based</strong>, then scan the code Bunker shows.
            Rabby works the same way.
          </p>
        </li>
      </ol>
    </Section>
  );
}

function Qr(props: { x: number; y: number; s: number }) {
  // A decorative QR-like block: three finder squares and a fixed pattern.
  const cells = [
    [3, 0], [4, 1], [3, 2], [5, 3], [0, 4], [2, 4], [4, 4], [6, 4], [1, 5], [3, 5], [5, 6], [4, 6], [6, 6],
    [3, 4], [5, 5],
  ];
  const c = props.s / 7;
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <rect width={props.s} height={props.s} fill="#F3EFE4" />
      {[[0, 0], [4, 0], [0, 4]].map(([fx, fy]) => (
        <g>
          <rect x={fx * c + c * 0.15} y={fy * c + c * 0.15} width={c * 2.7} height={c * 2.7} fill="none" stroke="#0B0E11" stroke-width={c * 0.5} />
          <rect x={fx * c + c * 0.9} y={fy * c + c * 0.9} width={c * 1.2} height={c * 1.2} fill="#0B0E11" />
        </g>
      ))}
      {cells.filter(([x, y]) => !(x < 3 && y < 3) && !(x > 3 && y < 3) && !(x < 3 && y > 3)).map(([x, y]) => (
        <rect x={x * c} y={y * c} width={c} height={c} fill="#0B0E11" />
      ))}
    </g>
  );
}

const F = "Atkinson Hyperlegible, sans-serif";

function FlowDiagramNarrow() {
  return (
    <svg viewBox="0 0 360 520" class="w-full h-auto md:hidden" aria-hidden="true">
      <rect x="50" y="10" width="260" height="160" rx="8" fill="#1E242B" stroke="#4A525C" stroke-width="4" />
      <rect x="66" y="26" width="228" height="128" fill="#0B0E11" />
      <path d="M30 180 H330 L314 198 H46 Z" fill="#4A525C" />
      <text x="180" y="52" fill="#C8C2B4" font-family={F} font-size="19" text-anchor="middle">MetaMask / Rabby</text>
      <Qr x={146} y={66} s={70} />
      <g stroke="#F0B90B" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M80 214 V306" stroke-dasharray="2 12" />
        <path d="M280 306 V214" stroke-dasharray="2 12" />
      </g>
      <path d="M80 318 l-11 -18 h22 Z" fill="#F0B90B" />
      <path d="M280 204 l-11 18 h22 Z" fill="#F0B90B" />
      <text x="96" y="252" fill="#F3EFE4" font-family={F} font-size="20" font-weight="700">1 · transaction</text>
      <text x="264" y="286" fill="#F3EFE4" font-family={F} font-size="20" font-weight="700" text-anchor="end">2 · signature</text>
      <rect x="110" y="328" width="140" height="186" rx="20" fill="#05070A" stroke="#39414B" stroke-width="4" />
      <rect x="122" y="342" width="116" height="158" rx="10" fill="#14181D" />
      <rect x="130" y="352" width="100" height="26" fill="#F0B90B" />
      <text x="180" y="371" fill="#0B0E11" font-family={F} font-size="15" font-weight="700" text-anchor="middle">BUNKERED</text>
      <Qr x={145} y={398} s={70} />
    </svg>
  );
}

function FlowDiagram() {
  return (
    <svg viewBox="0 0 800 300" class="w-full h-auto hidden md:block" aria-hidden="true">
      {/* laptop */}
      <rect x="20" y="50" width="260" height="170" rx="8" fill="#1E242B" stroke="#4A525C" stroke-width="4" />
      <rect x="40" y="70" width="220" height="130" fill="#0B0E11" />
      <path d="M0 232 H300 L282 252 H18 Z" fill="#4A525C" />
      <text x="150" y="98" fill="#C8C2B4" font-family="Atkinson Hyperlegible, sans-serif" font-size="18" text-anchor="middle">MetaMask / Rabby</text>
      <Qr x={112} y={112} s={76} />
      {/* phone */}
      <rect x="590" y="20" width="160" height="270" rx="22" fill="#05070A" stroke="#39414B" stroke-width="4" />
      <rect x="604" y="40" width="132" height="230" rx="12" fill="#14181D" />
      <rect x="614" y="52" width="112" height="26" fill="#F0B90B" />
      <text x="670" y="71" fill="#0B0E11" font-family="Atkinson Hyperlegible, sans-serif" font-size="15" font-weight="700" text-anchor="middle">BUNKERED</text>
      <Qr x={632} y={150} s={76} />
      <text x="670" y="112" fill="#F3EFE4" font-family="Atkinson Hyperlegible, sans-serif" font-size="16" text-anchor="middle">Bunker</text>
      {/* arrows */}
      <g stroke="#F0B90B" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M310 110 H555" stroke-dasharray="2 14" />
        <path d="M555 210 H310" stroke-dasharray="2 14" />
      </g>
      <path d="M560 110 l-18 -11 v22 Z" fill="#F0B90B" />
      <path d="M305 210 l18 -11 v22 Z" fill="#F0B90B" />
      <text x="432" y="92" fill="#F3EFE4" font-family="Atkinson Hyperlegible, sans-serif" font-size="20" font-weight="700" text-anchor="middle">1 · unsigned transaction</text>
      <text x="432" y="245" fill="#F3EFE4" font-family="Atkinson Hyperlegible, sans-serif" font-size="20" font-weight="700" text-anchor="middle">2 · signature</text>
    </svg>
  );
}

export function How() {
  return (
    <Section id="how" tone="concrete">
      <Kicker>04 · How it works</Kicker>
      <h2 id="how-h" class="max-w-[46rem]">
        Two QR codes. No cable, no Bluetooth, no network.
      </h2>
      <div class="mt-10 plate">
        <figure role="img" aria-labelledby="flow-d">
          <FlowDiagram />
          <FlowDiagramNarrow />
          <figcaption id="flow-d" class="sr-only">
            The computer running MetaMask shows the unsigned transaction as a QR code. The offline phone
            running Bunker scans it, and after you approve, shows the signature as a QR code that the
            computer's webcam scans back.
          </figcaption>
        </figure>
      </div>
      <ol class="steps mt-10">
        <li class="step">
          <h3>MetaMask shows a QR code</h3>
          <p class="mt-2 muted">
            When you send or swap, MetaMask or Rabby displays the unsigned transaction as an animated QR
            code. This is <Ext href={SRC.erc4527.url}>ERC-4527</Ext>, the same QR standard Keystone uses.
          </p>
        </li>
        <li class="step">
          <h3>Bunker reads it and shows you</h3>
          <p class="mt-2 muted">
            The phone's camera scans the code. Bunker decodes the transaction itself and shows what it
            does in plain words.
          </p>
        </li>
        <li class="step">
          <h3>You approve with your fingerprint</h3>
          <p class="mt-2 muted">
            Fingerprint or PIN unlocks the key for this one signature. Bunker then shows the signature as
            a QR code.
          </p>
        </li>
        <li class="step">
          <h3>MetaMask scans it back</h3>
          <p class="mt-2 muted">
            Hold the phone up to the computer's webcam. MetaMask broadcasts the signed transaction. The
            phone never touched the internet.
          </p>
        </li>
      </ol>
    </Section>
  );
}

export function ClearSigning() {
  return (
    <Section id="clear" tone="light">
      <Kicker>05 · Clear signing</Kicker>
      <h2 id="clear-h" class="max-w-[46rem]">
        You see what you sign.
      </h2>
      <div class="mt-10 grid gap-10 md:grid-cols-[1fr_1.1fr] items-center">
        <figure>
          <div class="phone" role="img" aria-label="Example review screen: a token approval for an unlimited amount to an unknown contract, with two warnings">
            <div class="screen" aria-hidden="true">
              <p class="font-mono text-[0.8em] font-700 text-bnb tracking-wider">REVIEW · BNB SMART CHAIN</p>
              <p class="mt-2 text-[1.3em] font-700">Approve token spending</p>
              <dl class="mt-4">
                <dt>Token</dt>
                <dd>USDT (BEP-20)</dd>
                <dt>Spender</dt>
                <dd class="font-mono text-[0.85em]">0x7a2f…c91e</dd>
                <dt>Amount</dt>
                <dd class="text-danger">Unlimited</dd>
                <dt>Network fee</dt>
                <dd>max 0.0002 BNB</dd>
              </dl>
              <div class="mt-4 grid gap-2">
                <p class="warn">⚠ Unlimited approval: this contract could move all of your USDT.</p>
                <p class="warn">⚠ Spender is not a known contract.</p>
              </div>
              <p class="mt-4 text-center font-700 bg-bnb text-ink py-2.5">Sign</p>
            </div>
          </div>
          <figcaption class="mt-4 text-center muted text-[0.85em]">
            Illustration of a review screen. Values are examples, and the app's layout may differ.
          </figcaption>
        </figure>
        <div>
          <p class="lead">
            Hot wallets can be tricked into showing one thing while asking you to sign another. Bunker
            does not trust their description. It decodes every transaction on the phone and computes the
            hash it signs itself.
          </p>
          <ul class="warn-list mt-8 grid gap-5">
            <li>
              <strong>Unknown tokens</strong> are flagged, so a look-alike token cannot pass as the real
              one.
            </li>
            <li>
              <strong>Unlimited approvals</strong> are called out before you grant them.
            </li>
            <li>
              <strong>High network fees</strong> get a warning.
            </li>
            <li>
              <strong>Anything it can't show in full, it refuses.</strong> No blind signing, ever.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

const SIGNS: [string, string, "yes" | "wip" | "no"][] = [
  ["BNB transfers", "Recipient and amount, on BNB Smart Chain.", "yes"],
  ["BEP-20 transfers and approvals", "Token, recipient or spender, and amount, with warnings for unknown tokens and unlimited approvals.", "yes"],
  ["Swaps: KyberSwap, Velora, 1inch", "Decoded with descriptors from the open ERC-7730 clear-signing registry.", "yes"],
  ["Swaps: PancakeSwap", "Support is being built.", "wip"],
  ["Ondo tokenized-stock orders", "Buy and sell orders for Ondo stock tokens, decoded through their ERC-7730 descriptors.", "yes"],
  ["Anything else", "If Bunker can't show it in full, it won't sign it.", "no"],
];

export function Signs() {
  const chip = (k: "yes" | "wip" | "no") =>
    k === "yes" ? (
      <span class="chip chip-yes">Signs</span>
    ) : k === "wip" ? (
      <span class="chip chip-wip">In progress</span>
    ) : (
      <span class="chip chip-no">Refuses</span>
    );
  return (
    <Section id="signs" tone="dark">
      <Kicker>06 · What it signs</Kicker>
      <h2 id="signs-h" class="max-w-[46rem]">
        BNB Smart Chain, read out line by line.
      </h2>
      <ul class="mt-10 grid gap-4 md:grid-cols-2">
        {SIGNS.map(([title, body, k]) => (
          <li class="plate !pt-7">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h3 class="text-[1.1em]">{title}</h3>
              {chip(k)}
            </div>
            <p class="mt-2 muted">{body}</p>
          </li>
        ))}
      </ul>
      <p class="mt-8 muted">
        Swap descriptors follow <Ext href={SRC.erc7730.url}>ERC-7730</Ext> and come from the public{" "}
        <Ext href={SRC.erc7730Registry.url}>ERC-7730 registry</Ext>. Chain ID 56 only; testnet (97) can be
        switched on.
      </p>
    </Section>
  );
}

export function Security() {
  const items: [string, string][] = [
    ["No internet permission", "The app cannot open a network connection: Android enforces it. Airplane mode is the second wall, and the banner tells you when it is down."],
    ["Hardware-backed key", "The recovery phrase is encrypted under a key held in the phone's StrongBox security chip, or its TEE where there is no StrongBox. The key can't be copied off the phone."],
    ["Unlocked per signature", "Every signature needs your fingerprint or PIN. Nothing stays unlocked between transactions."],
    ["Decoded on the phone", "Bunker parses the transaction and computes the hash it signs. Nothing on the review screen comes from the hot wallet's description."],
    ["Refuses, never skips", "Unknown contract calls, other chains and anything it can't display are rejected outright."],
    ["Open source, reviewed", "Apache-2.0. The core and app have had an independent security review, and its findings are fixed."],
  ];
  return (
    <Section id="security" tone="concrete">
      <Kicker>07 · Security model</Kicker>
      <h2 id="security-h" class="max-w-[46rem]">
        Thick walls, one small door.
      </h2>
      <p class="lead mt-5">The camera is the only way in. A QR code on the screen is the only way out.</p>
      <ul class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map(([t, b]) => (
          <li class="plate !pt-7">
            <h3 class="text-[1.1em] text-bnb">{t}</h3>
            <p class="mt-2">{b}</p>
          </li>
        ))}
      </ul>
      <div class="mt-10 plate max-w-[50rem]">
        <h3 class="text-[1.1em]">What Bunker can't protect you from</h3>
        <ul class="mt-3 grid gap-2 list-disc pl-6">
          <li>Approving a transaction after reading it. Bunker shows you; you decide.</li>
          <li>Someone who finds your 24 words. Keep them on paper, somewhere safe, never in a photo or a cloud note.</li>
          <li>A phone that was already compromised before you installed Bunker. Factory-reset it first.</li>
          <li>Physical attacks on the chip itself. A phone is not a dedicated secure element; see the comparison below.</li>
        </ul>
      </div>
    </Section>
  );
}

export function Compare() {
  const cols = ["Browser wallet", "Hardware wallet", "Bunker"];
  const rows: [string, string, string, string][] = [
    ["Where the key lives", "On the computer you browse with", "In a dedicated secure element", "In an offline phone, encrypted under StrongBox or TEE"],
    ["Network exposure", "Online all the time", "None; connects by USB or Bluetooth", "None; no internet permission, QR codes only"],
    ["Resistance to physical attack", "None", "Best: chips built to resist lab attacks", "Good: the phone's StrongBox chip or TEE, but not a wallet-grade secure element"],
    ["Supply chain", "Download from an extension store", "A device shipped to you, which can be tampered with in transit", "Software you install on a phone you already own, checked by signature"],
    ["What you see before signing", "A web page in the same browser as the attacker", "A small screen; clear signing varies by app", "A full phone screen; refuses what it can't show"],
    ["Cost", "Free", "Buy a device", "Free, on a phone you already have"],
  ];
  return (
    <Section id="compare" tone="light">
      <Kicker>09 · Comparison</Kicker>
      <h2 id="compare-h" class="max-w-[46rem]">
        Hardware-wallet separation at old-phone price.
      </h2>
      <p class="lead mt-5">
        Be clear about what you get. A dedicated secure element is still the gold standard against
        physical attacks. Bunker gives you the separation that matters most, the key off your online
        computer, without buying or waiting for a device.
      </p>
      <div class="mt-10">
        <table class="cmp">
          <caption class="sr-only">Browser wallet, hardware wallet and Bunker compared</caption>
          <thead>
            <tr>
              <th scope="col">
                <span class="sr-only">Property</span>
              </th>
              {cols.map((c, i) => (
                <th scope="col" class={i === 2 ? "us" : ""}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([h, a, b, c]) => (
              <tr>
                <th scope="row">{h}</th>
                <td data-label={cols[0]}>{a}</td>
                <td data-label={cols[1]}>{b}</td>
                <td data-label={cols[2]} class="us">
                  {c}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function WhyNow() {
  return (
    <Section id="why" tone="dark">
      <Kicker>10 · Why now</Kicker>
      <div class="grid gap-10 md:grid-cols-[1fr_1.2fr] items-center">
        <div>
          <p class="stat !text-[clamp(4rem,14vw,8rem)]">709+</p>
          <p class="mt-2 text-[1.15em] font-700">
            tokenized stocks and ETFs, tradable 24/7 on BNB Chain.
            <Src s={SRC.bnbStreet} />
          </p>
        </div>
        <div>
          <h2 id="why-h">Your portfolio never closes. Neither do attackers.</h2>
          <p class="lead mt-5">
            When shares sit in a wallet around the clock, the key behind them needs to be safe around the
            clock too. Bunker clear-signs Ondo tokenized-stock buy and sell orders, so you see the order
            before you approve it.
          </p>
        </div>
      </div>
    </Section>
  );
}

// Claims in this section were supplied by the maintainer; keep them exact.
// Titan M2 ships in Pixel 6 and later (not Pixel 8 only). No attestation
// claims: Bunker does not do device attestation yet.
export function Setup() {
  const tiers: [string, string, string, string][] = [
    [
      "Best",
      "Pixel 8 or newer with GrapheneOS",
      "chip-yes",
      "Titan M2 chip, hardware memory tagging, hardened OS.",
    ],
    [
      "Good",
      "Pixel 6 or newer",
      "chip-wip",
      "The Titan M2 holds the seed key; Bunker asks for StrongBox.",
    ],
    [
      "Works",
      "Any Android 8 or newer",
      "chip-plain",
      "The key is kept in the phone's TEE. Bunker's Settings shows which storage it got.",
    ],
  ];
  return (
    <Section id="setup" tone="dark">
      <Kicker>08 · Recommended setup</Kicker>
      <h2 id="setup-h" class="max-w-[46rem]">
        Any old Android works. Some work better.
      </h2>
      <ol class="mt-10 grid gap-5 md:grid-cols-3">
        {tiers.map(([tier, phone, chip, body]) => (
          <li class="plate !pt-7">
            <span class={`chip ${chip}`}>{tier}</span>
            <h3 class="mt-3 text-[1.15em]">{phone}</h3>
            <p class="mt-2">{body}</p>
          </li>
        ))}
      </ol>
      <div class="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h3 class="text-[1.2em]">How Bunker uses the chip</h3>
          <p class="mt-3">
            Bunker generates the seed-encryption key inside StrongBox where it is available. The key can't
            be exported, and each signature needs your PIN or fingerprint.
          </p>
          <h3 class="text-[1.2em] mt-8">Why GrapheneOS</h3>
          <ul class="mt-3 grid gap-2 list-disc pl-6">
            <li>Verified boot of its own signed system, with the bootloader locked.</li>
            <li>A hardened memory allocator.</li>
            <li>Memory tagging (MTE) on Pixel 8 and newer.</li>
            <li>No Google Play services by default.</li>
          </ul>
        </div>
        <div class="plate !pt-7">
          <h3 class="text-[1.2em]">Setup tips</h3>
          <ul class="warn-list mt-4 grid gap-4">
            <li>
              <strong>A strong device passphrase</strong>, not only a fingerprint.
            </li>
            <li>
              <strong>Airplane mode with every radio off</strong>: Wi-Fi, Bluetooth, NFC and mobile data.
            </li>
            <li>
              <strong>Charge from a wall adapter</strong>, never from a computer.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
