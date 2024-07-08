import Button from './components/Button.tsx';
import Card from './components/Card.tsx';
import Container from './components/Container.tsx';
import IconButton from './components/IconButton.tsx';
import Input from './components/Input.tsx';
import Section from './components/Section.tsx';

function App() {
    return (
        <main>
            <Section title="Inputs:">
                <Input id="name" label="Your name" type="text" />
                <Input id="age" label="Your age" type="number" />
            </Section>
            <Section title="Buttons:">
                <p className="mt-2">
                    <Button
                        className="button"
                        onClick={() => alert("I'm a button")}
                    >
                        Button
                    </Button>
                </p>
                <p className="mt-2">
                    <Button
                        href="http://ya.ru"
                        className="button"
                        onClick={() => alert("I'm a anchor link")}
                    >
                        Anchor
                    </Button>
                </p>
            </Section>
            <Section title="Container template:">
                <Container
                    as={Button}
                    onClick={() => alert("I'm a container as a button")}
                    type="anchor"
                >
                    Click me!
                </Container>
            </Section>
            <Section title="Card:">
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
            </Section>
            <Section title="Reusable icon-button:">
                <IconButton
                    icon={() => <span>❤️</span>}
                    onClick={() => alert('Button clicked!')}
                    className="hover:text-teal-200"
                >
                    Like
                </IconButton>
            </Section>
        </main>
    );
}

export default App;
