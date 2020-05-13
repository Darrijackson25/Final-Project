function App(){
  var canvas = document.getElementById("canvas");
    this.context = canvas.getContext('2d');
    document.addEventListener('mousedown', this.onClick.bind(this), false);
}

App.prototype.onClick = function(event){
 if(event.which === 1){
        var color = [];
        for(var i=0; i<3; i++){
            color.push(Math.floor(Math.random()*256));
        }
        this.fill('rgb('+color.join(',')+')');
    }
};

App.prototype.fill = function(color){
 this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.context.canvas.width,
    this.context.canvas.height);
};


function run(){
    new App();
}

window.onload = run;
run();
