import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AddToCart } from './index'

// The two tests marked with concurrent will be run in parallel
describe('AtButton', () => {
  it('should render', async () => {
    const productId = 1
    render(<AddToCart productId={productId} />)
    expect(screen.getByText(productId)).toBeDefined()
  })
})
