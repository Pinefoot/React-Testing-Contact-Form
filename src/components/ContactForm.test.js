import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test("app has inputs visible", () => {
 const {getByLabelText} = render (<ContactForm/>)

 const labelText = getByLabelText(/First Name*/i);
 const lastNamelabelText = getByLabelText(/Last Name*/i);
 const emaillabelText = getByLabelText(/Email*/i)
 const messagelabelText = getByLabelText(/Message/i)

 expect(labelText).toBeVisible();
 expect(lastNamelabelText).toBeVisible();
 expect(emaillabelText).toBeVisible();
 expect(messagelabelText).toBeVisible();
});


test('form submit populates the requirements', ()=>{
    const {getByLabelText, getByTestId} = render(<ContactForm/>);
    const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput = getByLabelText(/Last Name*/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {target: {value: 'FirstName'}});
    fireEvent.change(lastNameInput, {target:{value:'LastName'}});
    fireEvent.change(emailInput, {target:{value: 'Email@email.com'}});
    fireEvent.change(messageInput, {target:{value:'This is a message for testing'}});

    const formText = getByTestId('contactForm');
    expect(formText).toBeInTheDocument();

})
