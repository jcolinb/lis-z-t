## liszt.js
### js with a lisp

An implementation of singly-linked lists in vanillajs, and associated utilities:
map,filter,reduce,first,rest,cons,reverse,last,append,and pair.

A constructor/append shortcut: list

```
const Billies = list('Joel'); // function
Billies(); // list('Joel')
Billies('Ocean')(); // list('Joel' 'Ocean')
```

All lists are immutable, for great good.

don't fear the recur.