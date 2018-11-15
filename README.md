# Description
Function that creates a list from a given expresion, an interval and n restrictions.

# Usage

```javascript
comprehensionList(x => x * 10)
    ([10, 30])
    (x => x % 2 === 0, x => x <= 18  || x >= 22)
```

# Result

[ 100, 120, 140, 160, 180, 220, 240, 260, 280, 300 ]