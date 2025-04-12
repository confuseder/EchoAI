from api import comp

transform = comp('transform', 'Transform the css of DOM element.')

transform.attr('translate', 'Tranform the element by translating it by the given value.', 'number | array')
transform.attr('angle', 'Tranform the element by rotating it by the given value.', 'number&AngleUnit')
transform.attr('scale', 'Tranform the element by scaling it by the given value.', 'number | array')

transform.example('''
```eich
<transform :translate="[10, 20]" :angle="45deg" :scale="1.5">
  <div>The element will be translated by 10, rotated by 45 degrees, and scaled by 1.5.</div>
</transform>
```
''', 'Transform the element by translating it by the given value, rotating it by the given value, and scaling it by the given value') 