const sistema = {
  nome: "Meu Computador",
  pastas: [
    {
      nome: "Documentos",
      arquivos: ["curriculo.pdf", "contrato.docx", "orcamento.xlsx"],
      pastas: [
        {
          nome: "Projetos",
          arquivos: ["app.js", "index.html", "style.css"],
          pastas: [
            {
              nome: "Backend",
              arquivos: ["server.js", "config.json"],
              pastas: [],
            },
            {
              nome: "Mobile",
              arquivos: ["main.dart", "pubspec.yaml"],
              pastas: [],
            },
          ],
        },
      ],
    },
    {
      nome: "Downloads",
      arquivos: ["instalador.exe", "manual.pdf"],
      pastas: [],
    },
    {
      nome: "Imagens",
      arquivos: ["foto1.jpg", "foto2.png"],
      pastas: [
        {
          nome: "Viagem",
          arquivos: ["praia.png", "montanha.jpg"],
          pastas: [
            {
              nome: "Drone",
              arquivos: ["vista1.png", "vista2.png"],
              pastas: [],
            },
          ],
        },
      ],
    },
  ],
};


console.log(buscarArquivo(sistema, "server.js")); // true
console.log(buscarArquivo(sistema, "relatorio.docx")); // false
