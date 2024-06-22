import Button from './components/Button.tsx';
import Input from './components/Input.tsx';

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text"/>
      <Input id="age" label="Your age" type="number"/>
      <p>
      <Button>Button</Button>
      </p>
      <p>
      <Button href='http://ya.ru' className='button'>Anchor</Button>
      </p>
    </main>
  ) 
}

export default App;
