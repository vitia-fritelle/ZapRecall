import TelaInicial from './pages/Page1/Page1';
import Tela2 from './pages/Page2/Page2';
import './App.css';
import React, { useState } from 'react';

export enum Page {
    Page1,
    Page2
}

export type Quizz = {
    question: string,
    answer: string
}

const quizzesReact: Quizz[] = [
    {
        question: 'O que é JSX?',
        answer: 'JSX é uma sintaxe para escrever HTML dentro do JS'
    },
    {
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula'
    },
    {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões'
    },
    {
        question: 'O ReactDOM nos ajuda __',
        answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        question: 'Usamos props para __',
        answer: 'passar diferentes informações para componentes'
    },
    {
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas'
                +'devem renderizar a tela novamente'
    }
];

const quizzesAngular: Quizz[] = [
    {
        question: "Qual o decorator usado para configura seu módulo de classe?",
        answer: "@NgModule"
    },
    {
        question: "Que caracter é utilizado para encadear múltiplos pipes?",
        answer: "|"
    },
    {
        question: "RxJS pode ser utilizado para __",
        answer: "Browser e Cliente"
    }, 
    {
        question: "O que faz o comando .subscribe?",
        answer: "Faz um stream de dados de forma síncrona e assíncrona"
    },
    {
        question:"O que significa AOT?",
        answer:"ahead-of-time compilation"
    },
    {
        question:"Router é parte de @angular/core?",
        answer:"Sim"
    }
];

const quizzesVue = [
    {
        question:"O que é uma instância Vue?",
        answer:"É a raiz de um aplicativo Vue"
    },
    {
        question:"Qual a diferença entre v-if e v-show?",
        answer:"v-if não renderizará o elemento no DOM se a expressão for avaliada como false. No caso de v-show, ele renderizará o elemento no DOM não importa o quê, mas ficará oculto se false"
    },
    {
        question:"O que são props?",
        answer:"Props são atributos personalizados que você pode registrar em um componente."
    },
    {
        question:"O que são mixins?",
        answer:"São uma forma flexível que permite a distribuição de funções entre os componentes."
    },
    {
        question:"O que é o Vue Router?",
        answer:"É o roteador oficial do Vue.js para a criação de páginas com diferentes rotas."
    }
];

const decks = [
    {name: 'React', deck: quizzesReact},
    {name: 'Angular', deck: quizzesAngular},
    {name: 'Vue', deck: quizzesVue}
]

const App = () => {
    const [page, setPage] = useState(Page.Page1);
    const [metaZaps, setMetaZaps] = useState(1);
    const [quizzes, setQuizzes]: [
        Quizz[], 
        (quizzes: Quizz[]) => void
    ] = useState(Array(0));

    const pages = [
        <TelaInicial setPage={() => setPage(Page.Page2)} 
                     setMeta={setMetaZaps}
                     decks={decks}
                     setQuizzes={setQuizzes}/>, 
        <Tela2 meta={metaZaps} quizzes={quizzes}/>
    ];
    return (
        <div className="App">
            {pages[page]}
        </div>
    );
}

export default App;
