export default function DesafioLista() {
  return (
    <div>
      {gerarSpan(5)}
    </div>
  );
}

function gerarSpan(qtd: number) {
  let span = []
  for (let i = 1; i <= qtd; i++) {
    span.push(<span>{i},</span>)
  }
  return span
}

