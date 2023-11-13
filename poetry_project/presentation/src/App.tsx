import { memo, useEffect, useState } from 'react';
import { CodeBlock } from 'react-code-blocks';
import './App.css';
import Slide from './Slide';
import SliderProgress from './SliderProgress';

interface SlideProps {
  title: string;
  children: React.ReactNode;
}

function App() {
  const props: SlideProps[] = [{
    title: "Apprendre Poetry en 5 minutes",
    children: (<div>
      <p>Wallah c'est vrai</p>
    </div>)
  }, {
    title: "Mon fidèle compagnon, Milou",
    children: <img width={300} src="https://cdn001.tintin.com/public/tintin/img/static/milou/milou_v3.png" />
  }, {
    title: "Qui a déjà utilisé un package manager ?",
    children: <div className="centered"><img src="https://www.babelio.com/users/QUIZ_Tintin--24-Albums-24-Questions-Assez-Difficile_6498.jpeg" /><p>A main levé les sangs</p></div>
  }, {
    title: "Poetry, c'est quoi ?",
    children: <ul><li>Un package manager pour Python</li><li>Un outil de build</li><li>Un outil de packaging</li></ul>
  }, {
    title: "Comment l'installer ?",
    children: <div className='centered'><CodeBlock text="curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -" language='shell' /><p>Ou RTFM</p></div>
  }, {
    title: "Créer un project avec Poetry",
    children: <div className='centered'><CodeBlock text="poetry new my-project" codeContainerStyle={{
      fontSize: "2rem"
    }} language='shell' />
      <ul>
        <li>my-project/</li>
        <li>├── poetry.lock</li>
        <li>├── pyproject.toml</li>
        <li>├── README.md</li>
        <li>├── my-project/</li>
        <li>│       └── __init__.py</li>
        <li>└── tests/</li>
        <li>│         └── __init__.py</li>
      </ul>

    </div>

  }, {
    title: "Fichiers importants",
    children: <ul><li>pyproject.toml -&gt; metadata du projet et déclaration des dépendances</li><li>poetry.lock -{'>'} déclaration de la version des dépendances et des dépendances des dépendances</li></ul>
  }, {
    title: "Mais Tristan, comment je fais pour ajouter une dépendance ?",
    children: <div className='centered'><CodeBlock text="poetry add <nom-de-la-dépendance>" codeContainerStyle={{
      fontSize: "2rem"
    }} language='shell' />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFBtTHWjGvVTTTvU-J9Xdsm5aB2kxewDU7Z3gTlKAB97MwQ1BEIR-BXvu7FIMxtHVvho&usqp=CAU"/>
    </div>
  },{
    title: "Comment je fais pour run mon code ?",
    children: <div className='centered'><CodeBlock text="poetry run python ./my-project/main.py" codeContainerStyle={{
      fontSize: "2rem"
    }} language='shell' />
    <p>Et pour les tests ?</p>
    <CodeBlock text="poetry run pytest" codeContainerStyle={{
      fontSize: "2rem"
    }} language='shell' />
    </div>
  },{
    title: "Et git dans tout ça ?",
    children: <div className='centered'>
      <ul>
        <li>.gitignore</li>
        <li>pyproject.toml</li>
        <li>poetry.lock</li>
        <li>Makefile</li>
      </ul>
    </div>
  },{
    title: "Fin !!",
    children: (<div className='centered'>
      <a href="https://python-poetry.org/docs/">Read the fucking manual</a>
      <q>Michel Facerias</q>
      <img src="https://cdn-s-www.lalsace.fr/images/2C7C6228-C3CA-4811-8CF1-FB65B99537DE/NW_raw/milou-petit-shih-tzu-recupere-par-la-spa-de-haute-alsace-etait-couvert-de-2-8-kg-de-poils-colles-et-d-excrements-photo-l-alsace-isabelle-laine-1638546196.jpg" width={400}/>
      </div>)
  }, 
  {
    title: "RDV sur git",
    children: (
      <div className='centered'>
        <img src="data:image/jpeg;base64,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"/>
      <p>Objectif : faire tourner le code de cette présentation sur votre machine</p>
      </div>
    )
  }
  ];

  const [focusedSlide, setFocusedSlide] = useState(0);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      if (focusedSlide === 0) return;
      setFocusedSlide(focusedSlide - 1);
    } else if (event.key === "ArrowRight") {
      if (focusedSlide === props.length - 1) return;
      setFocusedSlide(focusedSlide + 1);
    }
  }


  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [focusedSlide, props.length]);


  return (
    <div className="App">
      <Slide title={props[focusedSlide].title}>
        {props[focusedSlide].children}
      </Slide>
      <SliderProgress current={focusedSlide + 1} total={props.length} />
    </div>
  );
}

export default App;
