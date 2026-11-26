import lockup from "../assets/brand/lockup.svg";

const links = [
  ["#how", "How it works"],
  ["#security", "Security"],
  ["#compare", "Compare"],
  ["#faq", "FAQ"],
];

export default function Nav() {
  return (
    <header class="nav">
      <nav class="wrap flex items-center justify-between gap-4 py-3" aria-label="Main">
        <a href="#top" class="flex items-center" aria-label="Bunker, back to top">
          <img src={lockup} alt="" width="134" height="26" class="h-6.5 w-auto" />
        </a>
        <ul class="hidden md:flex items-center gap-7 text-[0.9em]">
          {links.map(([href, label]) => (
            <li>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="#download" class="btn btn-primary !min-h-11 !py-1.5 !px-4 text-[0.9em]">
          Download
        </a>
      </nav>
    </header>
  );
}
