// Every figure on the page links to one of these. Checked 2026-11-26.
// Add a source here before adding a number anywhere on the site.
export const SRC = {
  binanceWiki: {
    label: "Wikipedia: 2026 Binance hack",
    url: "https://en.wikipedia.org/wiki/2026_Binance_hack",
  },
  binanceTrm: {
    label: "TRM Labs",
    url: "https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history",
  },
  hacks2026: {
    label: "Altcoin Buzz, from DefiLlama",
    url: "https://www.altcoinbuzz.io/8-78-billion-lost-to-328-hacks-crypto-s-record-2026",
  },
  bitget: {
    label: "The Block",
    url: "https://theblock.co/news/markets/2026-09-24-more-than-170-million-in-crypto-moves-from-bitget-wallets-unidentified-address-416345",
  },
  ledgerCoindesk: {
    label: "CoinDesk, 13 Oct 2026",
    url: "https://www.coindesk.com/tech/2026/10/13/ledger-says-spy-chip-inside-cryptobilis-ledger-devices-transmitted-wallet-keys-over-mobile-network",
  },
  ledgerCoindeskRange: {
    label: "CoinDesk, 12 Oct 2026",
    url: "https://www.coindesk.com/tech/2026/10/12/ledger-says-unauthorized-implant-found-in-at-least-one-device-sold-by-cryptobilis",
  },
  ledgerHalborn: {
    label: "Halborn",
    url: "https://www.halborn.com/blog/post/explained-ledger-supply-chain-attack-october-2026",
  },
  ledgerGenuine: {
    label: "Ledger Donjon threat model",
    url: "https://donjon.ledger.com/threat-model/device-genuineness/",
  },
  bnbStreet: {
    label: "BNB Chain blog, 26 Jun 2026",
    url: "https://www.bnbchain.org/en/blog/bnb-street-is-open-24-7-access-709-tokenized-stocks-of-the-worlds-largest-companies-on-bnb-chain",
  },
  erc4527: {
    label: "ERC-4527",
    url: "https://eips.ethereum.org/EIPS/eip-4527",
  },
  erc7730: {
    label: "ERC-7730",
    url: "https://eips.ethereum.org/EIPS/eip-7730",
  },
  erc7730Registry: {
    label: "ERC-7730 registry",
    url: "https://github.com/ethereum/clear-signing-erc7730-registry",
  },
} as const;

export type Source = { label: string; url: string };

// Release locations.
export const RELEASE = {
  direct: {
    live: true,
    label: "Direct APK",
    host: "bunker.rotko.net",
    url: "https://bunker.rotko.net/Bunker-v0.1.2.apk",
  },
  fdroid: {
    live: true,
    label: "F-Droid repo",
    host: "foss.rotko.net",
    url: "https://foss.rotko.net/#bunker",
  },
  github: {
    live: true,
    label: "GitHub Releases",
    host: "github.com/rotkonetworks/bunker",
    url: "https://github.com/rotkonetworks/bunker/releases/latest",
  },
  signerIdentity: "release@rotko.net",
  signerKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIE0+JfF50nSlAguayT98Y72VbDlHpACf6m8s1gALvV5s",
  certSha256: "d728121670177cc1760883c755a692067b455faab015e0ba13c0a5d43031c340",
};
