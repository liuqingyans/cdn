export default {
  background: {
    color: {
      value: "#484848",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        // 吸引模式
        mode: "grab", // repulse 排斥模式
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 3,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      grab: {
        // 新增 grab 聚焦模式
        distance: 150,
        line_linked: {
          opacity: 1, // 聚焦时连接线变实
        },
      },
    },
  },
  particles: {
    color: {
      value: "random",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

/**
 * 
 我们有一个TSParticles的配置对象，我将逐项解释每个配置的作用。TSParticles是一个用于创建粒子效果的JavaScript库，常用于网页背景动画。

配置项解释如下：

1. `background`: 设置画布的背景。

- `color`: 背景颜色，这里设置为深灰色（"#484848"）。

2. `fpsLimit`: 帧率限制，这里设置为60帧每秒。这可以防止动画消耗过多资源。

3. `interactivity`: 设置交互相关的选项。

- `detectsOn`: 指定交互检测的容器，这里设置为"window"，表示在整个窗口内检测交互事件。

- `events`: 定义具体的交互事件。

- `onClick`: 鼠标点击事件。

- `enable`: 启用点击事件。

- `mode`: 点击时触发的模式，这里为"push"，表示点击时添加新粒子。

- `onHover`: 鼠标悬停事件。

- `enable`: 启用悬停事件。

- `mode`: 悬停时触发的模式，这里为"repulse"，表示粒子会被排斥。

- `resize`: 是否在窗口大小改变时重置画布，这里为true。

- `modes`: 定义各种交互模式的具体参数。

- `bubble`: 气泡模式（本例中未使用，但配置中定义，可能用于其他事件）。

- `distance`: 气泡效果的影响距离（400像素）。

- `duration`: 气泡效果的持续时间（2秒）。

- `opacity`: 气泡的透明度（0.8）。

- `size`: 气泡的大小（40像素）。

- `speed`: 气泡的速度（3）。

- `push`: 推送模式（用于点击事件）。

- `quantity`: 每次点击添加的粒子数量（4个）。

- `repulse`: 排斥模式（用于悬停事件）。

- `distance`: 排斥效果的作用距离（200像素）。

- `duration`: 排斥效果的持续时间（0.4秒）。

4. `particles`: 粒子的基本设置。

- `color`: 粒子的颜色（白色）。

- `links`: 粒子之间的连线设置。

- `color`: 连线的颜色（白色）。

- `distance`: 连线最大连接距离（150像素）。

- `enable`: 是否启用连线（true）。

- `opacity`: 连线的透明度（0.5）。

- `width`: 连线的宽度（1像素）。

- `collisions`: 粒子之间的碰撞检测（启用）。

- `move`: 粒子的移动设置。

- `direction`: 移动方向（"none"表示无固定方向）。

- `enable`: 是否移动（true）。

- `outMode`: 粒子超出画布边界时的行为（"bounce"表示反弹）。

- `random`: 是否随机移动（false，表示按照既定规则移动）。

- `speed`: 移动速度（6像素/帧）。

- `straight`: 是否直线移动（false，表示非直线移动，会有曲线轨迹）。

- `number`: 粒子的数量设置。

- `density`: 粒子密度设置。

- `enable`: 是否根据画布大小调整密度（true）。

- `value_area`: 单位面积内的粒子数量（800，即每800平方像素一个粒子）。

- `value`: 粒子的初始数量（80个）。

- `opacity`: 粒子的透明度（0.5）。

- `shape`: 粒子的形状（圆形）。

- `size`: 粒子的大小。

- `random`: 大小是否随机（true）。

- `value`: 粒子大小的基准值（5像素）。

5. `detectRetina`: 是否在高清屏（Retina）上自动调整以保持清晰度（true）。

总结：这个配置创建了一个深灰色背景的粒子动画，有80个白色圆形粒子，粒子间有白色连线，会移动并相互碰撞。当鼠标悬停时，粒子会排斥开；点击时会在点击位置添加4个新粒子。动画帧率限制在60FPS，并适配高清屏幕。

注意：以上配置中，`bubble`模式虽然定义了，但在事件中并未使用（事件中使用了push和repulse）。如果要在事件中使用气泡模式，需要在事件中指定`mode: "bubble"`。
 */
