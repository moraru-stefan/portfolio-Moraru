export function setCardGlow(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function setHeroGlow(e) {
  const r = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  const px = Math.max(0, Math.min(100, (x / r.width) * 100));
  const py = Math.max(0, Math.min(100, (y / r.height) * 100));
  const nx = (px - 50) / 50;
  const ny = (py - 50) / 50;

  e.currentTarget.style.setProperty("--hero-mx", `${px.toFixed(2)}%`);
  e.currentTarget.style.setProperty("--hero-my", `${py.toFixed(2)}%`);
  e.currentTarget.style.setProperty("--hero-shift-x", `${(nx * 10).toFixed(2)}px`);
  e.currentTarget.style.setProperty("--hero-shift-y", `${(ny * 8).toFixed(2)}px`);
  e.currentTarget.classList.add("is-hovering");
}

export function resetHeroGlow(e) {
  e.currentTarget.style.setProperty("--hero-mx", "50%");
  e.currentTarget.style.setProperty("--hero-my", "50%");
  e.currentTarget.style.setProperty("--hero-shift-x", "0px");
  e.currentTarget.style.setProperty("--hero-shift-y", "0px");
  e.currentTarget.classList.remove("is-hovering");
}
