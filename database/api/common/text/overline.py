from api import comp

overline = comp('overline', 'This api is used to draw a line on the text.')

overline.attr('stroke', 'The stroke color of the line', 'string', "'black'")
overline.attr('stroke-width', 'The stroke width of the line', 'string', '1')
overline.attr('offset', 'The offset of the line', 'string', '0')

overline.example('''
```eich
<overline stroke="red" :stroke-width="2" offset="none">text with overline</overline>
```
''', 'Draw a line on the text with a red stroke and a stroke width of 2') 