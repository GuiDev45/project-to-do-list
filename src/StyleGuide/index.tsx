export default function StyleGuide() {
  return (
    <div className="p-8 space-y-10 bg-guiBackground">
      {/* Cabeçalhos */}
      <div>
        <h1 className="text-gh1 font-bold text-gColor2">
          H1 - Título Principal
        </h1>
        <h2 className="text-gh2 font-semibold text-gColor2">H2 - Subtítulo</h2>
        <h3 className="text-gh3 font-medium text-gColor2">H3 - Seção</h3>
        {/* Não vai ter nível 4, 5 e 6 */}
        {/*
        <h4 className="text-xl font-medium text-gColor2">
          H4 - Título de Quarta Nível
        </h4>
        <h5 className="text-lg font-medium text-gColor2">
          H5 - Título de Quinta Nível
        </h5>
        <h6 className="text-base font-medium text-gColor2">
          H6 - Título de Sexta Nível
        </h6>
        */}
      </div>

      {/* Parágrafos */}
      <div>
        <p className="text-lg text-gColor6">
          Parágrafo padrão - Texto informativo para o conteúdo.
        </p>
        <p className="text-base text-gColor6">
          Parágrafo secundário - Informações adicionais ou observações.
        </p>
      </div>

      {/* Botões */}
      <div className="space-x-4">
        <button className="px-4 py-2 bg-primary text-gColor6 rounded-md">
          Botão Primário
        </button>
        <button className="px-4 py-2 bg-secondary text-gColor6 rounded-md">
          Botão Secundário
        </button>
        <button className="px-4 py-2 bg-accent text-gColor6 rounded-md">
          Botão de Destaque
        </button>
        <button className="px-4 py-2 bg-gray-400 text-gColor6 rounded-md">
          Botão Desativado
        </button>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Input padrão"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Input secundário"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <textarea
          placeholder="Textarea"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        ></textarea>
        <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>
        <input type="checkbox" id="checkbox" className="mr-2" />
        <label htmlFor="checkbox" className="text-gray-800">
          Checkbox
        </label>
        <input type="radio" id="radio1" name="radio" className="mr-2" />
        <label htmlFor="radio1" className="text-gray-800">
          Opção 1
        </label>
        <input type="radio" id="radio2" name="radio" className="mr-2" />
        <label htmlFor="radio2" className="text-gray-800">
          Opção 2
        </label>
      </div>

      {/* Cartões */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h4 className="text-lg font-bold text-primary">Cartão Primário</h4>
          <p className="text-gray-600">
            Este é um cartão de exemplo com a cor primária.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h4 className="text-lg font-bold text-secondary">
            Cartão Secundário
          </h4>
          <p className="text-gray-600">
            Este é um cartão de exemplo com a cor secundária.
          </p>
        </div>
      </div>

      {/* Listas */}
      <div>
        <h4 className="text-lg font-bold text-primary">Listas</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Item da lista não ordenada 1</li>
          <li>Item da lista não ordenada 2</li>
          <li>Item da lista não ordenada 3</li>
        </ul>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Item da lista ordenada 1</li>
          <li>Item da lista ordenada 2</li>
          <li>Item da lista ordenada 3</li>
        </ol>
      </div>

      {/* Tabelas */}
      <div>
        <h4 className="text-lg font-bold text-primary">Tabela</h4>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Cabeçalho 1</th>
              <th className="border border-gray-300 p-2">Cabeçalho 2</th>
              <th className="border border-gray-300 p-2">Cabeçalho 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Dado 1</td>
              <td className="border border-gray-300 p-2">Dado 2</td>
              <td className="border border-gray-300 p-2">Dado 3</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Dado 4</td>
              <td className="border border-gray-300 p-2">Dado 5</td>
              <td className="border border-gray-300 p-2">Dado 6</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Outros Elementos */}
      <div>
        <h4 className="text-lg font-bold text-primary">Outros Elementos</h4>
        <blockquote className="border-l-4 border-gray-500 pl-4 italic">
          Citação - Este é um exemplo de citação.
        </blockquote>
        <hr className="my-4 border-gray-300" />
        <footer className="text-gray-500">
          Rodapé - Informações sobre a página ou direitos autorais.
        </footer>
      </div>
    </div>
  );
}
