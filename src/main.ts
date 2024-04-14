const canvas = document.createElement('canvas')

function draw() {
    const ctx = canvas.getContext('2d')
    if (ctx) {
        const rectangle = new Path2D();
        rectangle.rect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgb(100 0 0)'
        ctx.fill(rectangle);

    } else {
        console.log('failed to draw')
    }
}