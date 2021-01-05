
import Matter from '../../util/matter'

Page({
  data: {},
  onReady() {
    // debugger
  const  ctx = my.createCanvasContext('canvas');
    ctx.drawImage('/image/ant.png', 0, 0, 610, 610)
    // ctx.draw()

    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies
    var engine = Engine.create()
    var render = Render.create({
      canvas:canvas,
      engine: engine,
      options: {
        width: 800,
        height: 400,
        wireframes: false
      }
    })
    var boxA = Bodies.rectangle(400, 200, 80, 80)
    var ballA = Bodies.circle(380, 100, 40, 10)
    var ballB = Bodies.circle(460, 10, 40, 10)
    var ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true })
    World.add(engine.world, [boxA, ballA, ballB, ground])
    Engine.run(engine)
    Render.run(render)
  },
});
