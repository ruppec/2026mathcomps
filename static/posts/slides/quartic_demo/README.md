# Welcome
This website is joint work of Katie Hess, [Charlie Ruppe](ruppec.github.io), and
Jake Schaefer.

We aim to generate new visualizations of projective varieties by adapting ray tracing for the spherical geometry on real projective 3-space.

We anticipate using other techniques and perhaps other geometries (hyperbolic, product geometries) to showcase various relationships in algebraic geometry.

# Compilation
Run `cargo build` to build the project and `cargo run` to run the project.

To use on the web run `wasm-pack build --target web` which builds to `/pkg/`
Then you must somehow include this output in a webpage.
Included is `example.html` which does this in a very barebones way.

*IMPORTANT:* You must actually serve this html file from an html server instead
of just opening the file locally on your computer. We recommend using the
`miniserve` Rust crate and using the command

``` miniserve . --index example.html ```

Or if you have python3:

``` python3 -m http.server 8080```

to serve on localhost:8080.
