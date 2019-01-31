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

A pipe constructor for function composition:

```
const hey = pipe(outOfDreams)(intoCar)(); // like list, a final call returns the pipe
hey(you); // you're in my car
pipe(outOfDreams)(intoCar)()(you); // or inline
```

All lists are immutable, for great good.

don't fear the recur.