## 🏠 Página Inicial (`HomePage`)

### Objetivo

Permitir que o usuário escolha se está entrando como **médico(a)** ou **enfermeiro(a)**.

### Estrutura e Estilo

```tsx
<div className="max-w-screen-md mx-auto w-full h-screen flex justify-center items-center px-2">
```

* `max-w-screen-md`: largura máxima de **até 768px**.
* `mx-auto`: centraliza horizontalmente.
* `w-full`: ocupa toda a largura.
* `h-screen`: altura total da tela.
* `flex justify-center items-center`: centraliza o conteúdo vertical e horizontalmente.
* `px-2`: espaçamento interno lateral.

---

```tsx
<div className="bg-white w-full sm:w-2/4 flex flex-col items-center border border-black rounded-xl gap-5 py-7 px-5">
```

* `bg-white`: fundo branco.
* `w-full sm:w-2/4`: ocupa toda a largura, ou metade da largura em telas maiores (`sm` = mínimo 640px).
* `flex flex-col items-center`: flexbox em coluna e centralização dos filhos.
* `border border-black`: borda preta.
* `rounded-xl`: cantos bem arredondados.
* `gap-5`: espaçamento entre os elementos filhos.
* `py-7 px-5`: padding vertical e horizontal.

---

```tsx
<p className="font-bold bg-[#FFB8B8] mb-8 p-2 rounded-2xl">
```

* `font-bold`: texto em negrito.
* `bg-[#FFB8B8]`: fundo rosa claro personalizado.
* `mb-8`: margem inferior.
* `p-2`: padding interno.
* `rounded-2xl`: cantos bastante arredondados.

---

```tsx
<Link href={"/loginMedico"} className="w-32 text-center bg-[#FFB8B8] p-2 rounded-2xl">
```

* Rota: vai para `/loginMedico`.
* `w-32`: largura fixa (\~128px).
* `text-center`: centraliza o texto.
* `bg-[#FFB8B8]`: fundo rosa claro.
* `p-2`: espaçamento interno.
* `rounded-2xl`: bordas arredondadas.

---

## 👨‍⚕️ Página de Login do Médico (`LoginMedico`)

### Objetivo

Permitir que o médico insira seu **CRM** e **senha**, com opção para redefinir senha ou se cadastrar.

### Cabeçalho

```tsx
<div className="w-full flex items-center justify-between">
```

* Linha horizontal com:

  * Ícone de voltar
  * Texto centralizado
  * Espaçador vazio

---

```tsx
<FiArrowLeft className="w-8 h-fit" />
```

* Ícone de seta (voltar).
* `w-8`: largura de 32px.
* `h-fit`: altura ajustada ao conteúdo.

---

```tsx
<p className="font-bold text-xl border-b-2 border-[#FFB8B8] pb-2">
```

* Texto com:

  * Negrito (`font-bold`)
  * Tamanho grande (`text-xl`)
  * Linha inferior (`border-b-2`) rosa claro
  * Espaço inferior (`pb-2`)

---

### Inputs

```tsx
<input type="number" placeholder="CRM" className="bg-[#F4EEEE] py-2 px-2 rounded-md" />
<input type="text" placeholder="Senha" className="bg-[#F4EEEE] py-2 px-2 rounded-md" />
```

* Campos de entrada com:

  * Cor de fundo clara
  * Padding interno
  * Bordas arredondadas (`rounded-md`)
  * Placeholder explicando o que digitar

---

### Botão de Acesso

```tsx
<button className="text-center bg-[#FFB8B8] px-4 py-2 rounded-2xl">
```

* `bg-[#FFB8B8]`: cor rosa
* `rounded-2xl`: bordas bem arredondadas
* `px-4 py-2`: espaçamento interno

---

### Links de ajuda

```tsx
<Link href="" className="border-b-2 border-[#FFB8B8] pb-2">
```

* Link com sublinhado rosa.
* Um para "Esqueceu a senha?"
* Outro para "Não possui conta? Cadastre-se"

---

## 🔄 Navegação

No Next.js, a navegação funciona automaticamente com a estrutura de pastas:

* `app/page.tsx` → rota `/`
* `app/loginMedico/page.tsx` → rota `/loginMedico`

O componente `<Link>` do `next/link` cria essa navegação sem recarregar a página.
