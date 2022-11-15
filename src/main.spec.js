import {getByText, fireEvent} from '@testing-library/dom'

import {describe, it, expect} from 'vitest'

const appContainer = document.createElement('vanilla-mfe')

document.body.appendChild(appContainer)

import './main'

describe('main', () => {
    it('renders correctly', () => {
        expect(getByText(document.body, 'Click on the Vite logo to learn more')).toBeDefined()
    })

    it('count increments correctly', () => {
        const initialCountButton = document.getElementById('counter')
        expect(initialCountButton).toBeDefined()
        expect(initialCountButton.innerHTML).toEqual('count is 0')

        fireEvent.click(initialCountButton)

        expect(initialCountButton.innerHTML).toEqual('count is 1')
    })
})