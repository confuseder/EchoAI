from api import comp

align = comp('align', '<align> is used to align text, images, or other components.')
align.attr('type', 'The type of alignment', "`'left' | 'center' | 'right' | 'top' | 'bottom' | 'horizontal' | 'start' | 'end' | Array<AlignType>`", 'left')

align.example('''
```eich
<align type="center" animate="create,1000">this text will be shown in center</align>
```
''', 'Align the text in the center')

