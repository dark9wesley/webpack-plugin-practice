class CleanWebpackPlugin {
  apply(compiler){
    // 获取操作文件的对象
    const fs = compiler.outputFileSystem
    // emit是异步串行钩子
    compiler.hooks.emit.tapAsync('CleanWebpackPlugin', (compilation, callback) => {
      // 获取输出文件目录
      const outpath = compiler.options.output.path
      // 删除目录所有文件
      const err = this.removeFiles(fs, outpath)
      // 执行成功err为undefined，执行失败err就是错误原因
      callback(err)
    })
  }

  removeFiles(fs, path){
    try {
      // 读取当前目录下所有文件
      const files = fs.readdirSync(path)
      
      // 遍历文件，删除
      files.forEach(file => {
        // 获取文件完整路径
        const filePath = path + '/' + file
        //分析文件
        const fileStat = fs.statSync(filePath)
        // 判断是否是文件夹
        if(fileStat.isDirectory()){
          this.removeFiles(fs, filePath)
        }else{
          fs.unlinkSync(filePath)
        }
      })

      fs.rmdirSync(path);
    } catch (error) {
      return error
    }
  }
}

module.exports = CleanWebpackPlugin
