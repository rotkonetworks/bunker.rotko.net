import lockup from "../assets/brand/lockup.svg";
import { RELEASE } from "../data";
import { Ext, Kicker, Section } from "./ui";

function Channel(props: { label: string; host: string; live: boolean; url: string; note: string }) {
  return (
    <div class="plate !pt-7">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <h3 class="text-[1.15em]">{props.label}</h3>
        <span class={props.live ? "chip chip-yes" : "chip chip-wip"}>{props.live ? "Available" : "Coming soon"}</span>
      </div>
      <p class="mt-2 font-mono text-[0.85em] muted">{props.host}</p>
      <p class="mt-3 muted">{props.note}</p>
      <div class="mt-5">
        {props.live && props.url ? (
          <Ext href={props.url} class="btn btn-primary">
            Open {props.label}
          </Ext>
        ) : (
          <span class="btn btn-off">
            Not released yet
          </span>
        )}
      </div>
    </div>
  );
}

export function Download() {
  const signers = `echo '${RELEASE.signerIdentity} ${RELEASE.signerKey}' > allowed_signers`;
  return (
    <Section id="download" tone="concrete">
      <Kicker>11 · Download</Kicker>
      <h2 id="download-h" class="max-w-[46rem]">
        Install Bunker.
      </h2>
      <p class="lead mt-5">
        Add our F-Droid repository at foss.rotko.net for updates, or download the signed APK from
        GitHub. Both carry the same signing key. Start on BNB Smart Chain Testnet with a small amount
        before you move real funds.
      </p>
      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <Channel
          {...RELEASE.fdroid}
          note="Add the repo to the F-Droid app on an online phone, or download the APK and copy it across before sealing the bunker phone."
        />
        <Channel {...RELEASE.github} note="Signed APK with SHA256SUMS and SHA256SUMS.sig attached to each release." />
      </div>

      <div class="mt-12">
        <h3 class="text-[1.2em]">Verify before you install</h3>
        <p class="mt-3 muted">
          Each release ships the APK with <code>SHA256SUMS</code> and <code>SHA256SUMS.sig</code>, signed
          with an SSH release key. Check the signature, then the checksum, on a computer you trust:
        </p>
        <pre class="code mt-5" tabindex="0" aria-label="Verification commands">
          <code>
            {signers}
            {"\n"}
            {`ssh-keygen -Y verify -f allowed_signers -I ${RELEASE.signerIdentity} -n file -s SHA256SUMS.sig < SHA256SUMS`}
            {"\n"}
            {"sha256sum -c SHA256SUMS"}
          </code>
        </pre>
        <p class="mt-4 muted text-[0.9em]">
          The release key will be published here and in the repository with the first release. Both
          commands must succeed: "Good signature" from the first, "OK" for the APK from the second.
        </p>
      </div>
    </Section>
  );
}

const FAQ: [string, () => any][] = [
  [
    "Is it safe to use an old phone?",
    () => (
      <>
        <p>
          Yes, for this job, as long as it stays offline. Most attacks on phones arrive over the network:
          messages, web pages, app updates. Bunker's phone has no network: the app has no internet
          permission and the phone lives in airplane mode.
        </p>
        <p>
          Factory-reset the phone before installing Bunker, install nothing else, and never take it out of
          airplane mode. An old phone with a hardware security chip (StrongBox) is better than one without.
        </p>
      </>
    ),
  ],
  [
    "What if I lose the phone?",
    () => (
      <p>
        Your 24 words restore everything. Install Bunker on another phone and import them, or use any
        BIP39 wallet: Bunker's accounts are at the standard Ethereum path <code>m/44'/60'/0'/0/i</code>. A
        thief who finds the phone still needs your fingerprint or PIN.
      </p>
    ),
  ],
  [
    "Can I split my backup so no single paper holds it?",
    () => (
      <p>
        Coming in the first release: Bunker can restore a 24-word phrase from Banana Split QR shares. Create
        them at <a href="https://bs.parity.io" rel="noopener noreferrer">bs.parity.io</a>, ideally on a
        computer that is offline while you use it, since the phrase is typed into that page. For new wallets,
        Bunker can also split the secret into SLIP-39 word shares (for example any 2 of 3) on the phone itself,
        restorable in Bunker, Trezor or Keystone. A SLIP-39 wallet has no 24-word form.
      </p>
    ),
  ],
  [
    "Which phones work?",
    () => (
      <p>
        Android 8 or newer, with a working camera. Phones with a StrongBox security chip keep the key there;
        others use the phone's TEE. A fingerprint reader is convenient, but set a strong device passphrase too. See{" "}
        <a href="#setup">Recommended setup</a> for which phones we suggest.
      </p>
    ),
  ],
  [
    "Is it free?",
    () => (
      <p>
        Yes. Bunker is free and open source under the Apache-2.0 licence. No ads, no accounts, no
        tracking. This website has none either.
      </p>
    ),
  ],
  [
    "Does it work with my Ledger or Keystone accounts?",
    () => (
      <p>
        No. Bunker holds its own recovery phrase; it doesn't connect to other hardware wallets. To move
        funds, create a Bunker wallet, pair it with MetaMask and send to its address.
      </p>
    ),
  ],
  [
    "Can I try it on testnet?",
    () => (
      <p>
        Yes. Bunker signs for BNB Smart Chain (chain ID 56) by default, and BNB Smart Chain testnet (chain
        ID 97) can be switched on.
      </p>
    ),
  ],
];

export function Faq() {
  return (
    <Section id="faq" tone="light">
      <Kicker>12 · FAQ</Kicker>
      <h2 id="faq-h">Questions</h2>
      <div class="mt-10 max-w-[52rem]">
        {FAQ.map(([q, a]) => (
          <details class="faq">
            <summary>{q}</summary>
            <div class="answer">{a()}</div>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer class="dark border-t-2 border-[#2e353d]">
      <div class="wrap py-12 grid gap-6 md:grid-cols-[1fr_auto] items-start">
        <div>
          <img src={lockup} alt="Bunker" width="268" height="52" class="h-9 w-auto" />
          <p class="mt-4 muted max-w-[38rem]">
            Free, open-source (Apache-2.0) offline signer for BNB Smart Chain. Built by{" "}
            <Ext href="https://rotko.net">Rotko Networks</Ext>. Not affiliated with BNB Chain, Binance,
            MetaMask or Rabby.
          </p>
        </div>
        <ul class="grid gap-2 muted text-[0.9em]">
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#security">Security model</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
          <li>No cookies, trackers or third-party requests.</li>
        </ul>
      </div>
    </footer>
  );
}
