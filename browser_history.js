function BrowserHostory() {
    this.history = [];
    this.index = -1
  
    this.visit = function(url) {
      this.history[++this.index] = url
    }
  
    this.current = function() {
      if (this.index === -1) {
        return "Blank page"
      } else {
        return this.history[this.index]
      }
  
    }
  
    this.backward = function() {
      this.index = Math.max(-1, --this.index)
    }
  
    this.forward = function() {
      this.index = Math.min(++this.index, this.history.length - 1)
    }
  }
  
  const bh = new BrowserHostory()
  
  
  bh.visit("a")
  bh.visit("b")
  bh.visit("c")
  bh.backward()
  bh.backward()
  bh.backward()
  bh.backward()
  console.log(bh.current())
  bh.forward()
  bh.forward()
  bh.forward()
  bh.forward() 