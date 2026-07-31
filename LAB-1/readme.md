# EventLoop

Js is synchronous and single threaded bydefault

## There can be async behaviour

- with BrowserAPI- setTimeout,setInterval,setIntermediate,nexTrick
- with promises
- with event handlers

##

- A function not executed immediately but it must be executed after a while it has some status during the execution
- At final it may resolved ()=>Sucess
- reject()=>unsucess

## Call back

- that pass as argument or the parameter to another function

#

- modern javascript is divided into two categories

1. CommonJS(.cjs) -> supports OOPS -> require
2. ModuleJS (.mjs) -> Follow modular approach -> import

#

- Priority (Promise,nextTick,setImmediate/setTimeout)
