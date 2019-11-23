function classnames(...names:(string|undefined)[]){

 return names.filter(v=>v).join(' ')
  //  false 的话会过滤掉   所以undefined会过滤掉
    
}

export default classnames