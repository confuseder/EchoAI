from api import comp

strike = comp('strike', 'This api is used to draw a line on the text.')

strike.attr('stroke', 'The stroke color of the line', 'string', "'black'")
strike.attr('stroke-width', 'The stroke width of the line', 'string', '1')
strike.attr('offset', 'The offset of the line', 'string', '0')

strike.example('''
```eich
<strike stroke="red" :stroke-width="2" offset="none">text with strike</strike>
```
''', 'Draw a line on the text with a red stroke and a stroke width of 2') 