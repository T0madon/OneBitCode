document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("nome", input.value);
  input.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("nome");
  alert("A informação salva com a chave nome é: " + info);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const t = localStorage.getItem("text");
  alert("O texto salvo no local storage é: " + t);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // cookieName=value ; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 11, 19) + ";";
  const path = "path=/;";

  document.cookie = cookie + expiration + path;
  input.value = "";

  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value ; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 12, 19) + ";";
  const path = "path=/;";

  document.cookie = cookie + expiration + path;
  input.value = "";

  console.log(document.cookie);
});
