from api import comp

row = comp('row', 'This api is used to create a row element.')

row.example('''
```eich
<flexbox>
  <row>ROW 1</row>
  <row>ROW 2</row>
  <row>ROW 3</row>
</flexbox>
```

The three items will be sorted by row with same height.
''', 'Create a row with 3 items') 