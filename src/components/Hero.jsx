import React, { useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-scroll';
import * as THREE from 'three';
import heroImage from '../assets/about.jpeg';

const AnimatedTextLine = ({ children, phase = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textNode = textRef.current;
    if (!textNode) return undefined;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(640, 128, false);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPhase: { value: phase },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;

        uniform float uTime;
        uniform float uPhase;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          float stream = uv.x * 3.4 - uTime * 0.38 + uPhase;
          float ripple = sin(stream * 6.2831 + sin(uv.y * 7.0 + uTime * 0.7)) * 0.5 + 0.5;
          float pulse = sin((uv.x + uv.y) * 11.0 - uTime * 1.15 + uPhase) * 0.5 + 0.5;

          vec3 deep = vec3(0.22, 0.13, 0.08);
          vec3 copper = vec3(0.69, 0.39, 0.18);
          vec3 honey = vec3(0.96, 0.68, 0.35);
          vec3 olive = vec3(0.34, 0.38, 0.20);

          vec3 color = mix(deep, copper, smoothstep(0.12, 0.9, ripple));
          color = mix(color, honey, smoothstep(0.64, 1.0, pulse) * 0.55);
          color = mix(color, olive, smoothstep(0.18, 0.92, sin(stream * 2.1) * 0.5 + 0.5) * 0.2);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let frameId;
    let lastPaint = 0;
    const paint = (time) => {
      material.uniforms.uTime.value = time * 0.001;
      renderer.render(scene, camera);

      if (time - lastPaint > 48) {
        textNode.style.backgroundImage = `url(${renderer.domElement.toDataURL('image/webp', 0.78)})`;
        lastPaint = time;
      }

      frameId = requestAnimationFrame(paint);
    };

    frameId = requestAnimationFrame(paint);

    return () => {
      cancelAnimationFrame(frameId);
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [phase]);

  return (
    <span
      ref={textRef}
      className="inline bg-clip-text text-transparent md:inline-block"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[95vh] items-center justify-center overflow-hidden pt-16 pb-8 md:pt-32 lg:pt-40"
    >
      <div className="absolute inset-0 bg-[#f5ecdd]" />
      <img
        src={heroImage}
        alt="Ajmalath Zaitooniyya"
        className="absolute inset-0 h-full w-full object-cover object-center lg:object-contain lg:object-right"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f5ecdd_0%,rgba(245,236,221,0)_16%,rgba(245,236,221,0)_84%,#f5ecdd_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#f5ecdd_0%,rgba(245,236,221,0)_16%,rgba(245,236,221,0)_84%,#f5ecdd_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f0e4]/24 via-[#f2e7d6]/12 to-transparent lg:from-[#f8f0e4]/38 lg:via-[#f2e7d6]/10 lg:to-transparent" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mt-8 min-w-0 max-w-3xl text-center md:mt-0 md:w-[52%] md:max-w-[38rem] md:text-left lg:w-[44%] xl:w-[42%]">

          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 max-w-full [overflow-wrap:anywhere] font-serif text-4xl font-bold leading-[1.18] text-[#1f1711] md:text-5xl md:leading-[1.08] lg:text-[clamp(3rem,4vw,3.75rem)]"
          >
            <span className="inline-block">
              Not your typical
            </span>
            <br />
            <span className="inline-block">
              psychologist
            </span>
            <br />
            <span className="inline-block">
              <span className="bg-gradient-to-r from-[#6f4324] via-[#8f5a30] to-[#c78a4f] bg-clip-text text-transparent">
                Not your typical
              </span>
            </span>
            <br />
            <span className="inline-block">
              <span className="bg-gradient-to-r from-[#6f4324] via-[#8f5a30] to-[#c78a4f] bg-clip-text text-transparent">
                coach
              </span>
            </span>
          </Motion.h1>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-8 text-[#2f2218] md:mx-0 md:text-xl"
          >
            <p>
              <AnimatedTextLine phase={0.1}>
                This isn&apos;t a perfect little polished corner of the internet.
              </AnimatedTextLine>
              <br className="hidden md:block" />
              <AnimatedTextLine phase={1.8}>
                This is my space, real and unfiltered,
              </AnimatedTextLine>
              <br className="hidden md:block" />
              <AnimatedTextLine phase={3.2}>
                built for people tired of pretending everything is fine.
              </AnimatedTextLine>
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 md:justify-start"
          >
            {/* <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="group flex w-full cursor-pointer items-center justify-center rounded-full bg-[#7b4f2f] px-8 py-3.5 font-medium text-[#fff7ed] shadow-lg shadow-[#7b4f2f]/20 transition-all hover:bg-[#94613a] hover:shadow-xl sm:w-auto"
            >
              Explore Coaching
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link> */}
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="flex w-full cursor-pointer items-center justify-center rounded-full border border-[#b89775] bg-[#fff8ee]/70 px-8 py-3.5 font-medium text-[#5e4633] backdrop-blur-sm transition-all hover:border-[#9f7a56] hover:bg-[#94613A] sm:w-auto"
            >
              Read More
            </Link>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
