import { useRef } from 'react';

import Button from './components/Button.tsx';
import Card from './components/Card.tsx';
import Container from './components/Container.tsx';
import Form, { type FormHandle } from './components/Form.tsx';
import IconButton from './components/IconButton.tsx';
import Input from './components/Input.tsx';
import List from './components/List.tsx';
import Section from './components/Section.tsx';

function App() {
    const users = [
        { id: 'u1', name: 'Max' },
        { id: 'u2', name: 'Manuel' },
        { id: 'u3', name: 'Randy' },
        { id: 'u4', name: 'Ozzy' },
    ];

    const hobbies = ['Sports', 'Reading', 'Cooking'];

    const input = useRef(null);

    const customForm = useRef<FormHandle>(null);

    function handleSave(data: unknown) {
        const extractedData = data as { name: string; age: string };
        console.log(extractedData);
        customForm.current?.clear();
    }

    return (
        <main>
            <Section title="Inputs:">
                <Input id="name" label="Your name" type="text" ref={input} />
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
            <Section title="Reusable IconButton:">
                <IconButton
                    icon={() => <span>❤️</span>}
                    onClick={() => alert('Button clicked!')}
                    className="hover:text-teal-200"
                >
                    Like
                </IconButton>
            </Section>
            <Section title="Reusable List">
                <List
                    items={users}
                    renderItem={(user) => (
                        <li
                            className="rounded border p-2 hover:border-teal-200 hover:text-teal-200"
                            key={user.id}
                        >
                            {user.name}
                        </li>
                    )}
                    className="flex gap-4"
                />
            </Section>
            <Section title="Wrapper Form component:">
                <Form onSave={handleSave} ref={customForm}>
                    <Input type="text" label="Name" id="name1" />
                    <Input type="number" label="Age" id="age1" />
                    <p>
                        <Button className="button">Save</Button>
                    </p>
                </Form>
            </Section>
        </main>
    );
}

export default App;
