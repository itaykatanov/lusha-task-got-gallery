import React from 'react';
import { render, screen } from '@testing-library/react';
import {Card} from '../components/Card';
import {Character} from "../types";

const character: Character =   {
    id: 4,
    firstName: "Sansa",
    lastName: "Stark",
    fullName: "Sansa Stark",
    title: "Lady of Winterfell",
    family: "House Stark",
    image: "sansa-stark.jpeg",
    imageUrl: "https://thronesapi.com/assets/images/sansa-stark.jpeg"
}

test('renders Card component', () => {
    render(<Card imageSrc={character.imageUrl} name={character.fullName} title={character.title} house={character.family}/>);
    const linkElement = screen.getByText("Sansa Stark");
    expect(linkElement).toBeVisible();
});
