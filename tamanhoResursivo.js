const disco = {
  nome: "Disco Local (C:)",
  arquivos: [{ nome: "bootmgr", tamanho: 2 }],
  pastas: [
    {
      nome: "Usuários",
      arquivos: [],
      pastas: [
        {
          nome: "Aluno",
          arquivos: [
            { nome: "curriculo.pdf", tamanho: 1 },
            { nome: "foto-perfil.png", tamanho: 3 },
          ],
          pastas: [
            {
              nome: "Música",
              arquivos: [
                { nome: "rock.mp3", tamanho: 8 },
                { nome: "pop.mp3", tamanho: 7 },
              ],
              pastas: [],
            },
            {
              nome: "Videos",
              arquivos: [
                { nome: "viagem.mp4", tamanho: 400 },
                { nome: "aula.mp4", tamanho: 350 },
              ],
              pastas: [],
            },
          ],
        },
      ],
    },
    {
      nome: "Programas",
      arquivos: [
        { nome: "chrome.exe", tamanho: 250 },
        { nome: "vscode.exe", tamanho: 180 },
      ],
      pastas: [
        {
          nome: "Node",
          arquivos: [{ nome: "node.exe", tamanho: 90 }],
          pastas: [],
        },
      ],
    },
  ],
};

console.log(tamanhoTotal(disco));
