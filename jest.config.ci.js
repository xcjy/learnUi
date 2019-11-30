const base=require('./jest.config')
module.exports=Object.assign({},base,{
    
    reporters: ["jest-junit"],
    collectCoverage: true,  // 是否收集覆盖率
    collectCoverageFrom:["lib/**/*.{ts,tsx}","!**/node_modules/**"],
    coverageDirectory:'coverage',
    coverageReporters: ['text', 'lcov'],
})