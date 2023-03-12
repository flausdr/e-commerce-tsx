import React from "react"

interface ValidationErrors {
    required: string;
    email: string;
    passwordIn: string;
}

export class Validation {
    errors: ValidationErrors = {
        required: 'This field is required',
        email: 'Incorrect email address',
        passwordIn: 'Min length 8 characters',
    };
    
    createMessageError = (className: string = '', error: string): HTMLHeadElement => {
        const messageError: HTMLHeadElement = document.createElement('h6');
        messageError.classList.add('msg-err', className);
        messageError.innerText = error;
        return messageError;
    }

    removeMessageError = (e: string): void => {
        const element = document.querySelector(e);
        if (element && element.parentNode) {
            element.remove();
        }
    }

    regularInput = (input: any, errorsId: string, regexp: any, text: any): void => {
        this.removeMessageError(errorsId);
        input.classList.remove('border-red-700', 'border-2');
        if (!input.value.match(regexp)) {
            input.classList.add('border-red-700', 'border-2');
            input.insertAdjacentElement('afterend', text);
        }
    }

    isRequired = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, id } = e.target;
        const trimmedValue = value.trim();
        const text = this.createMessageError(`${id}-required`, this.errors.required);

        this.removeMessageError(`.${id}-required`);
        e.target.classList.remove('border-red-700', 'border-2');
        if (trimmedValue.length === 0) {
            e.target.classList.add('border-red-700', 'border-2');
            e.target.insertAdjacentElement('afterend', text);
        }
    }

    validationEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id } = e.target;
        const text = this.createMessageError(`${id}-email`, this.errors.email)

        this.regularInput(e.target, `.${id}-email`, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, text);
    }

    validationPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id } = e.target;
        const text = this.createMessageError(`${id}-password`, this.errors.passwordIn);

        this.regularInput(e.target, `.${id}-password`, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s:])([^\s]){8,}$/, text);
    }
}