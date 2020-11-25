  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;


  var engine, world;
  var ground;
  var particles=[];
  var plinkos=[];
  var divisions=[];
  var divisionHeight=300;

  function setup() {
    engine = Engine.create();
    world = engine.world
    createCanvas(480,800);
    for(var k=0; k<=width;k=k+80){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }
  
    for(var j=40;j<=width;j=j+50){
      var p1 = new Plinko (j,175,15); 
      plinkos.push(p1);
      
    }
    for(var h=15;h<=width-10;h=h+50){
      var p2 = new Plinko (h,255,15); 
      plinkos.push(p2);
      
    }

    for(var g=40;g<=width;g=g+50){
      var p3 = new Plinko (g,345,15); 
      plinkos.push(p3);
      
    }
    for(var i=15;i<=width-10;i=i+50){
      var p4 = new Plinko (i,425,15); 
      plinkos.push(p4);
      
    }
    
    ground= new Ground(240,790,800,20);

    
  }

  function draw() {

    background("black");  
    Engine.update(engine);
    ground.display();
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
    for(var k=0;k<divisions.length;k++){
      divisions[k].display();
    }
    for(var j=0;j<plinkos.length;j++){
      plinkos[j].display();
      }
      for(var h=0;h<plinkos.length;h++){
        plinkos[h].display();
        }

        for(var g=0;g<plinkos.length;g++){
          plinkos[g].display();
          }
          for(var i=0;i<plinkos.length;i++){
            plinkos[i].display();
            }
           
            for(var t=0;t<particles.length;t++){
              particles[t].display();
            }
  }
