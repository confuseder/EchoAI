from api import comp

underline = comp('underline', 'This api is used to draw a underline on the text.')

underline.attr('stroke', 'The stroke color of the line', 'string', "'black'")
underline.attr('stroke-width', 'The stroke width of the line', 'string', '1')
underline.attr('offset', 'The offset of the line', 'string', '0')

underline.example('''
```eich
<underline stroke="red" :stroke-width="2" offset="none">text with underline</underline>
```
''', 'Draw a line on the text with a red stroke and a stroke width of 2') 