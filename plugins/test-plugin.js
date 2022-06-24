class TestPlugin {
  constructor(){
    console.log('TestPlugin loaded');
  }

  apply(compiler){
    console.log('TestPlugin applied');
    console.log('compiler', compiler);

    compiler.hooks.environment.tap('TestPlugin', () => {
      console.log('TestPlugin environment hook')
    })

    compiler.hooks.emit.tap('TestPlugin', (compilation) => {
      console.log('TestPlugin emit 111');
      console.log('compilation', compilation);
    })

    compiler.hooks.emit.tapAsync('TestPlugin', (compilation, callback) => {
      setTimeout(() => {
        console.log('TestPlugin emit 222');
        callback()
      }, 2000)
    })

    compiler.hooks.emit.tapPromise('TestPlugin', (compilation, callback) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('TestPlugin emit 333');
          resolve()
        }, 2000)
      })
    })
  }
}

module.exports = TestPlugin
