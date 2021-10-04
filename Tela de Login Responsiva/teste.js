let dados = [
  {
    usuario: "usuario",
    senha: "usuario",
  },
  {
    usuario: "usuario1",
    senha: "usuario1",
  },
  {
    usuario: "usuario2",
    senha: "usuario2",
  },
  {
    usuario: "usuario3",
    senha: "usuario3",
  },
  {
    usuario: "usuario4",
    senha: "usuario4",
  },
  {
    usuario: "usuario5",
    senha: "usuario5",
  },
];

function novo() {
  var newusuario = document.getElementById("newusuario").value;
  var newsenha = document.getElementById("newsenha").value;
  var rptsenha = document.getElementById("rptsenha").value;

  if (newusuario == "") {
    alert("usuario requerido.");
    return;
  } else if (newsenha == "") {
    alert("Senha requerida.");
    return;
  } else if (rptsenha == "") {
    alert("Repetir senha.");
    return;
  } else if (newsenha != rptsenha) {
    alert("As senhas não conhecidem.");
    return;
  } else {
    let valores = new Object();
    valores.usuario = newusuario;
    valores.senha = newsenha;
    dados.push(valores);
    console.log(valores);
    alert("Olá, " + newusuario, +"Você já pode estar logando no sistema");
  }
}

function login() {
  let usuario = document.getElementById("usuario").value;
  usuario = usuario.toLowerCase();

  let senha = document.getElementById("senha").value;
  senha = senha.toLowerCase();

  for (let i = 0; i < dados.length; i++) {
    if (usuario == dados[i].usuario && senha == dados[i].senha) {
      console.log(`parabens,vc conseguiu acessar`);
      window.location.href = "bv.html";
      return;
    }
  }
}
