async function askAI() {
  const input = document.getElementById("userMessage").value;

  const res = await fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  document.getElementById("aiReply").innerText = data.reply;
}
