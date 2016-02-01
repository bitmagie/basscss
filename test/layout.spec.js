
import addElement from './util/add-element'

describe('layout', () => {

  const container = addElement('div')
  const div = addElement('div', container)

  container.style.width = '768px'

  it('should set display inline', () => {
    div.className = 'inline'
    expect(div.computedStyle.display).to.equal('inline')
  })

  it('should set display inline-block', () => {
    div.className = 'inline-block'
    expect(div.computedStyle.display).to.equal('inline-block')
  })

  it('should set display block', () => {
    div.className = 'block'
    expect(div.computedStyle.display).to.equal('block')
  })

  it('should set display table', () => {
    div.className = 'table'
    expect(div.computedStyle.display).to.equal('table')
  })

  it('should set display table-cell', () => {
    div.className = 'table-cell'
    expect(div.computedStyle.display).to.equal('table-cell')
  })

  it('should set float left', () => {
    div.className = 'left'
    expect(div.computedStyle.float).to.equal('left')
  })

  it('should set float right', () => {
    div.className = 'right'
    expect(div.computedStyle.float).to.equal('right')
  })

  it('should set max-width 100%', () => {
    div.className = 'fit'
    expect(div.computedStyle.maxWidth).to.match(/100\%|768px/)
  })

  it('should set overflow hidden', () => {
    div.className = 'overflow-hidden'
    expect(div.computedStyle.overflow).to.equal('hidden')
  })

  it('should set overflow scroll', () => {
    div.className = 'overflow-scroll'
    expect(div.computedStyle.overflow).to.equal('scroll')
  })

  it('should set overflow auto', () => {
    div.className = 'overflow-auto'
    expect(div.computedStyle.overflow).to.equal('auto')
  })

})
