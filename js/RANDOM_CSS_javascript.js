var RANDOM_CSS = {
  cssfiles : ['style1.css','style2.css','style3.css','style4.css'],
  pathtocss : 'css/',
  getrandomcss : function() { return this.cssfiles[Math.floor(Math.random()*this.cssfiles.length)]; },
  getlinktag : function() { return '<link rel="stylesheet" type="text/css" href="'+this.pathtocss+this.getrandomcss()+'" />'; },
  printlinktag : function() { document.write(this.getlinktag()); }
};
