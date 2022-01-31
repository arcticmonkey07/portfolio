"use strict";
var container, canvas, ctx, center, gradient, tick, simplex, particleProps, positions, velocities, lifeSpans, speeds, sizes, hues, particleCount = 1700,
    particlePropCount = 9,
    particlePropsLength = particleCount * particlePropCount,
    rangeY = 200,
    baseTTL = 50,
    rangeTTL = 150,
    baseSpeed = .1,
    rangeSpeed = 2,
    baseRadius = 1,
    rangeRadius = 4,
    baseHue = 720,
    rangeHue = 200,
    noiseSteps = 8,
    xOff = .00125,
    yOff = .00125,
    zOff = 5e-4,
    backgroundColor = "hsla(260,40%,5%,1)";

function setup() {
    createCanvas(), resize(), initParticles(), draw()
}

function initParticles() {
    var e;
    for (tick = 0, simplex = new SimplexNoise, particleProps = new Float32Array(particlePropsLength), e = 0; e < particlePropsLength; e += particlePropCount) initParticle(e)
}

function initParticle(e) {
    var a, t, r, n, c, i;
    a = rand(canvas.a.width), t = center[1] + randRange(rangeY), r = baseTTL + rand(rangeTTL), n = baseSpeed + rand(rangeSpeed), c = baseRadius + rand(rangeRadius), i = baseHue + rand(rangeHue), particleProps.set([a, t, 0, 0, 0, r, n, c, i], e)
}

function drawParticles() {
    var e;
    for (e = 0; e < particlePropsLength; e += particlePropCount) updateParticle(e)
}

function updateParticle(e) {
    var a, t, r, n, c, i, s, o, l, p, d = 1 + e,
        u = 2 + e,
        b = 3 + e,
        g = 4 + e,
        h = 5 + e,
        v = 6 + e,
        x = 7 + e,
        P = 8 + e;
    t = particleProps[e], r = particleProps[d], a = simplex.noise3D(t * xOff, r * yOff, tick * zOff) * noiseSteps * TAU, n = lerp(particleProps[u], cos(a), .5), c = lerp(particleProps[b], sin(a), .5), i = particleProps[g], s = particleProps[h], drawParticle(t, r, l = t + n * (o = particleProps[v]), p = r + c * o, i, s, particleProps[x], particleProps[P]), i++, particleProps[e] = l, particleProps[d] = p, particleProps[u] = n, particleProps[b] = c, particleProps[g] = i, (checkBounds(t, r) || s < i) && initParticle(e)
}

function drawParticle(e, a, t, r, n, c, i, s) {
    ctx.a.save(), ctx.a.lineCap = "round", ctx.a.lineWidth = i, ctx.a.strokeStyle = "hsla(".concat(s, ",100%,60%,").concat(fadeInOut(n, c), ")"), ctx.a.beginPath(), ctx.a.moveTo(e, a), ctx.a.lineTo(t, r), ctx.a.stroke(), ctx.a.closePath(), ctx.a.restore()
}

function checkBounds(e, a) {
    return e > canvas.a.width || e < 0 || a > canvas.a.height || a < 0
}

function createCanvas() {
    container = document.querySelector(".content--canvas"), (canvas = {
        a: document.createElement("canvas"),
        b: document.createElement("canvas")
    }).b.style = "\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t", container.appendChild(canvas.b), ctx = {
        a: canvas.a.getContext("2d"),
        b: canvas.b.getContext("2d")
    }, center = []
}

function resize() {
    var e = window,
        a = e.innerWidth,
        t = e.innerHeight;
    canvas.a.width = a, canvas.a.height = t, ctx.a.drawImage(canvas.b, 0, 0), canvas.b.width = a, canvas.b.height = t, ctx.b.drawImage(canvas.a, 0, 0), center[0] = .5 * canvas.a.width, center[1] = .5 * canvas.a.height
}

function renderGlow() {
    ctx.b.save(), ctx.b.filter = "blur(8px) brightness(200%)", ctx.b.globalCompositeOperation = "lighter", ctx.b.drawImage(canvas.a, 0, 0), ctx.b.restore(), ctx.b.save(), ctx.b.filter = "blur(4px) brightness(200%)", ctx.b.globalCompositeOperation = "lighter", ctx.b.drawImage(canvas.a, 0, 0), ctx.b.restore()
}

function renderToScreen() {
    ctx.b.save(), ctx.b.globalCompositeOperation = "lighter", ctx.b.drawImage(canvas.a, 0, 0), ctx.b.restore()
}

function draw() {
    tick++, ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height), ctx.b.fillStyle = backgroundColor, ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height), drawParticles(), renderGlow(), renderToScreen(), window.requestAnimationFrame(draw)
}
if (window.innerWidth > 1000) {
  window.addEventListener("load", setup), window.addEventListener("resize", resize);
  }