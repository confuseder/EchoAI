from api import comp

block = comp('block', 'This is a block container api. The styles include dimensions, colors, margins, padding, and borders, which are applied reactively using the effect function')

block.attr('width', 'Specifies the width of the block.', 'string', "'auto'")
block.attr('height', 'Specifies the height of the block.', 'string', "'auto'")
block.attr('fill', 'Specifies the background fill color.', 'string', "'none'")
block.attr('margin', 'Sets the margin on all sides.', 'string | number', '0')
block.attr('margin-top', 'Sets the top margin.', 'string | number', '0')
block.attr('margin-right', 'Sets the right margin.', 'string | number', '0')
block.attr('margin-bottom', 'Sets the bottom margin.', 'string | number', '0')
block.attr('margin-left', 'Sets the left margin.', 'string | number', '0')
block.attr('padding', 'Sets the padding on all sides.', 'string | number', '0')
block.attr('padding-top', 'Sets the top padding.', 'string | number', '0')
block.attr('padding-right', 'Sets the right padding.', 'string | number', '0')
block.attr('padding-bottom', 'Sets the bottom padding.', 'string | number', '0')
block.attr('padding-left', 'Sets the left padding.', 'string | number', '0')
block.attr('border', 'Defines the border style.', 'string | number', "'none'")
block.attr('border-radius', 'Specifies the border radius.', 'string | number', '0')
block.attr('border-width', 'Defines the border width.', 'string | number', '0')
block.attr('border-color', 'Specifies the border color.', 'string', "'none'")

block.example('''
```eich
<block :width="100" :height="100" fill="lightblue" :margin="10" :padding="10" border="solid" :border-radius="5" :border-width="2" border-color="red">
  Hello World
</block>
```
''', 'Create a block with a width of 100, height of 100, background color of lightblue, margin of 10, padding of 10, border of solid, border radius of 5, border width of 2, and border color of red')
