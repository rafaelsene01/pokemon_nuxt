import { name, wait } from '@/plugins/utils'

describe('Validators utils', () => {
  it('Wait', async (done) => {
    await wait(0)
    done()
  })

  it('Name', () => {
    expect(name('')).toBeFalsy()
    expect(name('Rafael')).toBe('Rafael')
  })
})
