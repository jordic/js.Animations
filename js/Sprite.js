


(function() {	

	if(!jQuery.GT)
		jQuery.GT = {}

	var counter = 0;
	jQuery.GT.Sprite = function()
	{
		var def = {
			node: 'body',
			sprite: '<h1>X</h1>',
			x: 0, 
			y: 0,
			z: 0
		}
		
		var o, ct = 0;
		var that = this, pt;
					
		this.init = function(op) {
		  
		  o = that.opts = $.extend(def, op);	
		  
			// adds sprite to DOM
			counter++
			o.z = counter
			pt = that.pt = jQuery(o.sprite).attr('id', 'sprite'+counter);
			that.id = '#sprite'+counter
			that.pt.css({	
				position:'absolute',
				overflow: 'hidden',
				top: o.y,
				left: o.x, 
				'z-index': o.z
					})
			if(o.width)
				that.pt.width(o.width)
			if(o.height)
				that.pt.height(o.height)
		  
		  this._scaleX = this._scaleY = this._rotate = 1;
			
			that._x = o.x; that._y = o.y; that._z = o.z;
			
			//pt.data('item', that)
			//console.log(that.pt.fn)
			jQuery.extend( that.pt, that )
			
			return that;
			
		}
		
		this.addChild = function()
		{
			jQuery(o.node).append(that.pt);
			return that;
		}
		
		this.destroy = function()
		{
			pt.remove()
		}
		
		/* x, y, z setters */
		this.x = function(v) {
			
			if(!v) return that._x
			pt.css('left', v); 
			that._x = v;
			return that; 
			}
		this.y = function(v) { 
		  
		  if(!v) return that._y
			pt.css('top', v); 
			that._y = v;
			return that; 
			}
		this.z = function(v) { 
		  if(!v) return that._z
			pt.css('z-index', v); 
			that._z = v;
			return that; 
			}
		
		return this
		//z.data('ele', this)
		//z.prototype = pt
		//return that
				
	}
	
	
	
	jQuery.GT.make_sprite = function( opts ) {
		k = new jQuery.GT.Sprite();
		return k.init(opts);
	}
	
	jQuery.fn.sp = function(){
		return this.data('ele')
	}
	

	
$.extend(jQuery.GT.Sprite.prototype, {
  // s'han d'implementar metodes per mozilla i ie.... :P
  rotate: function(angle) {
    if(!angle) return this._rotate;
    this._rotate = angle;
    this.apply_transform();
  }, 
  scale: function(valx, valy) {
    if(!valy)
  		valy = valx
  	this._scaleX = valx;
  	this._scaleY = valy;
  	this.apply_transform();
  },
  scaleX : function(v)
  {
    if(!v) return this._scaleX;
    this._scaleX = v;
  	this.apply_transform();
  },
  scaleY: function(v)
  {
    if(!v) return this._scaleY;
    this._scaleY = v;
  	this.apply_transform();
  },
  apply_transform: function()
  {
    this.pt.css('-webkit-transform', 'rotate('+ this._rotate +'deg) scale('+this._scaleX+','+ this._scaleY + ')')
  },
  origin: function(x,y) {
  	this.pt.css('-webkit-transform-origin', x + 'px');
  }

})
	
	
}());