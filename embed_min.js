// Create the iframe element
var iframeSrc = window.blocConfig.blocId;

console.log("iframeSrc", iframeSrc);

var iframe = document.createElement("iframe");
iframe.id = "myIframe";
iframe.src = `https://embed.askbloc.ai/bloc/${iframeSrc}`;
iframe.style.position = "fixed";
iframe.style.width = "100px";
iframe.style.height = "100px";
iframe.style.border = "none";
iframe.style.bottom = 0;
iframe.style.right = 0;
iframe.style.zIndex = 1050;
iframe.style.background = "transparent";
document.body.appendChild(iframe);

// Add event listener to receive messages from the parent source
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event) {
  var parameter = event.data;
  if (typeof parameter === "object" && parameter !== null) {
    parameter = JSON.stringify(parameter);
  }

  if (parameter === "open") {
    document.getElementById("myIframe").style.width = "350px";
    document.getElementById("myIframe").style.height = "600px";
  } else if (parameter === "close") {
    setTimeout(() => {
      document.getElementById("myIframe").style.width = "100px";
      document.getElementById("myIframe").style.height = "100px";
    }, 1000);
  }
}
