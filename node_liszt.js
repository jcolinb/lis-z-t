'use strict'

const first = ({$}) => $

const rest = ({$$}) => $$

const cons = ($) => ($$=null) => ({$,$$})

const pair = (left) => (right=null) => ({left,right})

const map = (fn) => (ls) =>
      ls && cons(fn(first(ls)))(map(fn)(rest(ls)))

const filter = (p) => (ls) =>
      ls 
      && ((p(first(ls))) 
            ? cons(first(ls))(filter(p)(rest(ls)))
            : filter(p)(rest(ls)))

const reduce = (fn,a) => (ls) =>
      (!ls || a === undefined)
        ? a || null
        : reduce(fn,fn(a,first(ls)))(rest(ls))

const length = reduce((a,c) => a+1,0)

const last = (ls) => !rest(ls) && ls || last(rest(ls)) 

const reverse = reduce((a,c) => cons(c)(a),null)

const append = (l) => (r) => reduce((a,c)=>cons(c)(a),r)(reverse(l))

const list = (a) => (b=null) => 
      (!b) 
        ? (a.$) 
          ? a 
          : cons(a)(null)
        : list(append((a.$) ? a : cons(a)(null))(cons(b)(null)))

const pipe = (a) => (fn=null) => 
      (!fn) 
        ? (x) => reduce((a,c)=>c(a),x)(a()) 
        : pipe((first(a)) ? a(fn) : list(a)(fn))

const pluck = (prop) => pipe(filter(({left})=> left === prop))(map(({right})=> right))(first)()

const dig = map((a) => a())

const inspect = reduce((a,c) => a+' '+`${c}`,'LIS(Z)T ')

const snitch = (tag) => (ls) => 
      ls 
      || console.log(`${tag}: I got nothin\'`) 
      ||  null

module.exports = {first
                  ,rest
                  ,cons
                  ,map
                  ,filter
                  ,reduce
                  ,length
                  ,pipe
                  ,pluck
                  ,last
                  ,append
                  ,reverse
                  ,list
                  ,pair
                  ,dig
                  ,inspect
                  ,snitch}
