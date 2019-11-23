import classnames from '../classnames'
describe("classnames function tests", () => {
  it("接受一个className", () => {
    const result = classnames('a')
    expect(result).toEqual('a')
  })
  it('接受两个className', () => {
    const result = classnames('a', 'b')
    expect(result).toEqual('a b')
  })
  it('参数undefined 情况', () => {
    const result = classnames('a', undefined)
    expect(result).toEqual('a')
  })
  it('无参数', () => {
    const result = classnames()
    expect(result).toEqual('')
  })


})
