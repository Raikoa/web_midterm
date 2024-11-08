class GradientPainter {
    static get inputProperties() {
      return ['--gradient-start', '--gradient-end'];
    }
  
    paint(ctx, geom, properties) {
      const gradient = ctx.createLinearGradient(0, 0, geom.width, geom.height);
      gradient.addColorStop(0, properties.get('--gradient-start').toString());
      gradient.addColorStop(1, properties.get('--gradient-end').toString());
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, geom.width, geom.height);
    }
  }
  
  registerPaint('grad', GradientPainter);