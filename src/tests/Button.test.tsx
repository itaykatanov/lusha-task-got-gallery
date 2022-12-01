import React from 'react';
import { render, screen } from '@testing-library/react';
import {Button} from "../components/Button";


it('should render Button component', () => {
    render(<Button text={"Load more"} disabled={false} onClick={() => {}}/>);
    const linkElement = screen.getByText("Load more");
    expect(linkElement).not.toBeDisabled();
});

it('should render disabled Button component', () => {
    render(<Button text={"Load more"} disabled={true} onClick={() => {}}/>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
});