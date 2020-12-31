import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator'

test('Calculate Sum, Sub, Mul, Div', () => {
    const { getByText, getByTestId, debug, getByRole } = render(<Calculator a={2} b={3} />)

    const sumBtn = getByText(/Addition/i)
    userEvent.click(sumBtn)
    expect(getByText(5)).toHaveTextContent(5)
    
    const subBtn = getByText(/Subtraction/i)
    userEvent.click(subBtn)
    expect(getByText(-1)).toHaveTextContent(-1)

    const mulBtn = getByText(/Multiplication/i)
    userEvent.click(mulBtn)
    expect(getByText(6)).toHaveTextContent(6)

    const divBtn = getByText(/Division/i)
    userEvent.click(divBtn)
    expect(getByText(0.6666666666666666)).toHaveTextContent(0.6666666666666666)
})
