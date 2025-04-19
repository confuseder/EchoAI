from api import comp

upper = comp('upper', 'This api is used to convert the text to uppercase.')

upper.example('''
```eich
<upper>there will be all upper words</upper>
```
''', 'Convert the text to uppercase') 