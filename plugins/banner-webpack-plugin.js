class Banner {
  constructor(options = {}){
    this.options = options
  }

  apply(compiler){
    compiler.hooks.emit.tapAsync('Banner', (compilation, callback) => {
      // 1.获取输出资源 compilation。assets
      // 2.过滤文件 只保留js、css资源
      const extensions = ['js', 'css'] 
      const assets = Object.keys(compilation.assets).filter(assetPath => {
        const spiltArray = assetPath.split('.')
        const extension = spiltArray[spiltArray.length - 1]
        return extensions.includes(extension)
      });
      // 3.遍历剩下资源并添加上注释
      const prefix = `/** 
 * Author: ${this.options.author} 
 */`
      assets.forEach(asset => {
        const source = compilation.assets[asset].source()
        const content = prefix + source
        compilation.assets[asset] = {
          source: () => content,
          size: () => content.length
        }
      })

      callback()
    })
  }
}

module.exports = Banner;
