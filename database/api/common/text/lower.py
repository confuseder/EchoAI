from api import comp

lower = comp('lower', 'This api is used to convert the text to lowercase.')

lower.example('''
```eich
<lower>THERE WILL BE ALL LOWER WORDS</lower>
```
''', 'Convert the text to lowercase') 