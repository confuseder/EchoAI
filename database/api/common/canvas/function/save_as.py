from api import comp

save_as = comp('save-as', 'save a (x,y) coordinate on the function according to the x coordinate')
save_as.attr('x', 'The x coordinate of the coordinate on the function you want to save', 'number')
save_as.attr('as', 'The name of the variable', 'string')
