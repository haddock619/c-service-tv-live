const player = document.getElementById("player");
const channelsDiv = document.getElementById("channels");

const channels = [
  {name: "Chaîne 1", link: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"},
  {name: "Chaîne 2", link: "https://test-streams.mux.dev/test_001/stream.m3u8"}
];

channels.forEach(channel => {
  const btn = document.createElement("button");
  btn.textContent = channel.name;
  btn.onclick = () => player.src = channel.link;
  channelsDiv.appendChild(btn);
});
