from api import comp

lr = comp('lr', 'This api is used to draw a line on the screen.')

lr.example('''
```eich
this is a row<lr/>this is another row
```
''', 'break a row.') 