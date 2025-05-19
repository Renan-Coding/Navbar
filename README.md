# Ponderada de UX: Figma to Code

**Autores**: Anna Giulia Riciopo e Renan Reis

## Links Úteis 

- [Repositório](https://github.com/Renan-Coding/Navbar)
- [Figma](https://www.figma.com/design/sXBJt234LgdUhqpgudShvI/Figma-to-Code---S4M6?node-id=0-1&t=PN09Mdt2Bi94Ia8D-1)

## Relato de Desenvolvimento

&emsp;Para esta atividade, escolhemos como componente a navbar do projeto que estamos desenvolvendo. No Figma, estruturamos o design da navbar em duas instâncias distintas: uma para o botão de adicionar arquivo, que ao ser acionado expande um pop-up, e outra para a própria navbar, que altera o destaque dos botões conforme são pressionados.

&emsp;O processo de criação do protótipo do componente no Figma foi relativamente tranquilo, especialmente com o uso do Auto Layout para garantir responsividade e organização dos elementos. No entanto, enfrentamos dificuldades significativas ao utilizar o Dev Mode do Figma para exportar o código HTML/CSS.

&emsp;Os códigos gerados automaticamente pelo Figma não refletiam fielmente o design elaborado. Em alguns casos, os códigos nem conseguiam exibir os ícones corretamente, o que comprometeu a reprodução visual do componente. Para contornar essas limitações, recorremos a uma inteligência artificial que nos auxiliou a formular o código necessário.

&emsp;Com o suporte da IA, conseguimos obter um resultado bastante semelhante ao design original. Ainda assim, algumas diferenças permaneceram: o pop-up do botão de adicionar arquivo aparece centralizado na tela, ao invés de posicionado diretamente sobre o botão, e os ícones utilizados são parecidos, mas não idênticos aos do protótipo.

&emsp;Em resumo, o processo foi produtivo e nos permitiu compreender melhor as possibilidades e limitações do Dev Mode do Figma, assim como a importância de complementar ferramentas automáticas com recursos adicionais para alcançar um resultado mais fiel ao design.

## Instruções de Instalação e Execução

### Pré-requisitos
- Um navegador web (Chrome, Safari, Edge).
- Um servidor web local, como o Live Server, utilizado no VS Code.

### Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/Renan-Coding/Navbar.git
```

2. Navegue até o diretório do projeto:
```bash
cd Navbar
```

3. Você pode executar o projeto de duas maneiras:

   **Opção 1 - Utilizando Live Server**
   ```bash
   Instalar a extensão Live Server
   Ativar o localhost, apertando em "Go Live" no canto inferior direito
   ```


   **Opção 2 - Usando um servidor local (recomendado):**
   - Ou se preferir usar o Node.js:
     ```bash
     npx serve
     ```

### Estrutura do Projeto
- `index.html` - Estrutura principal da página
- `style.css` - Estilos e animações
- `script.js` - Funcionalidades interativas

### Funcionalidades
- Navbar responsiva com botões interativos
- Pop-up para adicionar arquivo
- Destaque visual nos botões ao serem pressionados