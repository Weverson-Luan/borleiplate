# Model View ViewModel - MVVM

## O que é?

**Model View ViewModel (MVVM)** é um padrão de projeto usado no desenvolvimento de softwares, foi originado pela *Microsoft* como uma especialização do padrão *Model View Presenter (MVP)* e asemelha-se em alguns aspectos com o *Model View Controller (MVC)*. Seu foco é a implementação de UI em plataformas com suporte a programação orientada a eventos como o *Windows Presentation Foundation (WPF)* e o *Silverlight* na plataforma .NET. Visa estabelecer uma clara separação do *desenvolvimento de UI* do *back end/lógica de negócio*. Este conceito acabou se tornando possível em HTML5 através de frameworks como *AngularJS* e *KnockoutJS*, e no Java atavés do *ZK Framework*.

## Responsabilidades e características

### Model

No MVVM, o Model encapsula a lógica de negócios e os dados. O Model nada mais é do que o modelo de domínio de uma aplicação, ou seja, as classes de negócio que serão utilizadas em uma determinada aplicação. Ele também contém os papéis e a validação dos dados de acordo com o negócio, cuja aplicação em questão visa a atender.

#### Características comuns

- O Modelo são classes que encapsulam a lógica de negócios e os dados;
- O Modelo não referencia diretamente a View ou ViewModel;
- Ele provê eventos de notificação de mudança de estado. Isso facilita o preenchimento de dados na View;
- O Modelo de dados contém validação de dados e reporta os erros através de eventos;
- O Modelo de dados geralmente é utilizado com um repositório ou serviço.

### View

A responsabilidade da View é definir a aparência ou a estrutura que o usuário vê na tela. Sendo assim, a View não deve ter nenhuma outra responsabilidade ou qualquer regra de negócio. A View se liga ao ViewModel através de um conceito denominado **Binding**.

#### Características comuns

- A View é um elemento visual;
- Ela referencia a ViewModel através de bindings. Os controles da View são preenchidos com propriedades ou comandos, expostos pela ViewModel.

### ViewModel

A responsabilidade da ViewModel, no contexto do MVVM, é disponibilizar para a View uma lógica de apresentação. A View Model não tem nenhum conhecimento específico sobre a view, ou sobre como ela é implementada, nem o seu tipo. A ViewModel implementa propriedades e comandos para que a View possa preencher seus controles, e a notifica caso haja alteração de estado, através de eventos.

#### Características comuns

- A ViewModel é uma classe não visual, que expõe para a View uma lógica de apresentação
- É testável, independentemente da View ou do Model
- Coordena as iterações entre a View e o Model
- Não referencia a View, na verdade, não tem nenhum conhecimento sobre ela.
- Expõe propriedade e comando para que a View utilize para preencher seus controles, e notifica a View quando o estado de uma determinada propriedade muda através de eventos.
- Pode conter lógica de validação.

## Quando usar?

- Testabilidade
- Separação do desenv (designer programador)

## Referências

- [Understanding MVVM – A Guide For JavaScript Developers](http://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/)
- [Why MVVM and what are it's core benefits?](http://stackoverflow.com/questions/1644453/why-mvvm-and-what-are-its-core-benefits)
- [Model-View-ViewModel (MVVM) Explained](http://www.codeproject.com/Articles/100175/Model-View-ViewModel-MVVM-Explained)
- [Entendendo o Pattern Model-View-ViewModel (MVVM)](http://imasters.com.br/artigo/18900/desenvolvimento/entendendo-o-pattern-model-view-viewmodel-mvvm/)
