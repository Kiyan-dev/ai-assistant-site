async function sendMessage() {
  const input = document.getElementById("userInput").value;

  const response = await fetch("https://your-backend-url.vercel.app/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });

  const data = await response.json();
  document.getElementById("chatOutput").innerText = data.reply;
}
