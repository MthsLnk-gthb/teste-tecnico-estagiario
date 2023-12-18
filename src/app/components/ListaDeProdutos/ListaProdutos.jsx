import './listaProdutos.css'

export default function ListaDeProdutos({produtos}){
    return (
      <article className='lista-dos-produtos'>
        {produtos.map((produto) => (
          <section key={produto.id} className='box-do-produto'>
            <h1>{produto.nome}</h1>
            <p>Preço: <span>${produto.preco}</span></p>
          </section>
        ))}
      </article>
    );
}