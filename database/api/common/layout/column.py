from api import comp

column = comp('column', 'A kind of flexbox component, used under flexbox to divide the flexbox into multiple columns.')

column.attr('direction', 'The direction of the flex items within the flex container. Options are `row`, `column`.', "'row' | 'column'", "'row'")
column.attr('justify', 'The alignment of the flex items along the main axis. Options are `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`.', "'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'", "'start'")
column.attr('align', 'The alignment of the flex items along the cross axis. Options are `start`, `end`, `center`, `stretch`, `baseline`.', "'start' | 'end' | 'center' | 'stretch' | 'baseline'", "'start'")
column.attr('grow', 'The flex grow factor of the flex item.', 'number', '0')
column.attr('shrink', 'The flex shrink factor of the flex item.', 'number', '1')
column.attr('basis', 'The initial main size of the flex item.', 'string | number')
column.attr('wrap', 'The wrapping behavior of the flex container. Options are `nowrap`, `wrap`, `wrap-reverse`.', "'nowrap' | 'wrap' | 'wrap-reverse'", "'nowrap'")
column.attr('gap', 'The gap between flex items.', 'string | number', '0')

column.example('''
The following code will create a column with 3 items.

```eich
<flexbox>
  <column>ITEM 1</column>
  <column>ITEM 2</column>
  <column>ITEM 3</column>
</flexbox>
```
''', 'Create a column with 3 items')
