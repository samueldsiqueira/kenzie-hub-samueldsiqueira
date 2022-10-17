import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 500px;
	background-color: var(--color-gray-3);
	margin: 0 auto;
	gap: 0.5rem;
	padding: 20px;
	border-radius: 5px;
	label {
		width: 90%;
	}
	.btn-large {
		width: 90%;
	}

    input {
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height);
    color: var(--color-gray-0);
    background-color: var(--color-gray-2);
    border: 1px solid transparent;
    width: 90%;
    border-radius: var(--border-radius);
    padding: var(--spacing-2);
    transition: var(--transition);
  }

  input:focus {
    outline: none;
    border: 1px solid var(--color-gray-0);
    color: var(--color-gray-0);
  }

  input::placeholder {
      font-weight: 400;
      color: var(--color-gray-0);
  }

  input:disabled {
    background-color: var(--color-gray-1);
    cursor: not-allowed;
  }

  p{
    color: var(--color-error);
    font-size: 0.5rem;
  }

select{
    width: 90%;
    padding: var(--spacing-2);
    color: var(--color-gray-0);
    background-color: var(--color-gray-2);
    border-radius: var(--border-radius);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-regular);

}
	.register-description {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;

		.signin-button {
			color: var(--color-gray-0);
			background-color: var(--color-gray-1);
			text-align: center;
			padding: 0 32px;
			height: 48px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 5px;

			&:hover {
				filter: brightness(0.9);
			}
		}
	}
`;

export default Form;

