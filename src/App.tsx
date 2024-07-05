import Button from './components/Button.tsx';
import Card from './components/Card.tsx';
import Container from './components/Container.tsx';
import Input from './components/Input.tsx';

function App() {
    return (
        <main>
            <Input id="name" label="Your name" type="text" />
            <Input id="age" label="Your age" type="number" />
            <p>
                <Button>Button</Button>
            </p>
            <p>
                <Button href="http://ya.ru" className="button">
                    Anchor
                </Button>
            </p>
            <Container as={Button} onClick={() => alert('Hi!!')} type="anchor">
                Click me!
            </Container>
            <section className="mt-4">
                <p className="mb-2">Card:</p>
                <Card
                    title="My Card"
                    actions={
                        <Button
                            onClick={() => alert('Button clicked!')}
                            className="button"
                        >
                            Click Me!
                        </Button>
                    }
                >
                    <p>Some content</p>
                </Card>
            </section>
        </main>
    );
}

export default App;
