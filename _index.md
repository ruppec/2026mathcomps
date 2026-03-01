# Introduction

The notion of creating a deductive formalization of mathematical
properties through visualizations and intuitions of geometry dates back
to ancient Greece. Notably, in his 299 B.C. book, *The Elements*, Euclid
posited as an axiom that parallel lines do not meet. In a painitng,
lines that might be parallel in the real world appear to meet at a
vanishing point.

Projective geometry provides a natural and conceptually complete setting
for many geometric theorems. Statements about parallel lines, conic
sections, and algebraic varieties often become simpler and more unified
when expressed projectively. However, standard visualizations often
treat points at infinity as artifacts rather than intrinsic components
of the geometry.

To an observer living inside projective space, no point would be
distinguished as infinite. The geometry is homogeneous, as every point
admits identical local structure, and there is no intrinsic notion of
boundary. The apparent singularity of infinity arises only from
extrinsic representations. In this work, we develop a rendering
framework that allows the viewer to inhabit $\mathbb{RP}^3$ directly,
removing the artificial distinction between finite and infinite points.
To accomplish this, we use the identification
$\mathbb{RP}^3 \cong S^3 / \{\pm 1\},$ and view real projective 3-space
as the antipodal quotient of the 3-sphere. Rather than projecting
projective space into Euclidean coordinates, we perform ray marching
directly along geodesics of $S^3$ and preserve the intrinsic geometry.
Surfaces defined by homogeneous equations are evaluated on the sphere,
and antipodal symmetry ensures the correct projective identification.

In Sec. [2](#sec:background){reference-type="ref"
reference="sec:background"}, we review the structure of $\mathbb{RP}^3$
and its realization as the antipodal quotient of $S^3$. Sec.
[3](#sec:framework){reference-type="ref" reference="sec:framework"}
describes our intrinsic ray-marching framework and numerical methods.
Our implementation is outlined in
[4](#sec:implementation){reference-type="ref"
reference="sec:implementation"}. In Sec.
[5](#sec:examples){reference-type="ref" reference="sec:examples"} we
present examples of projective varieties visualized using this approach.
We conclude with a discussion of implications and future directions.

# Mathematical Background {#sec:background}

## Real Projective 3-Space

The geometric space under consideration in this work is real projective
3-space, denoted $\mathbb{RP}^3$. Formally, it is defined as the space
of all one-dimensional linear subspaces of $\mathbb{R}^4$, or,
equivalently, $$\mathbb{RP}^3 = (\mathbb{R}^4 \setminus \{0\}) / \sim,$$
where $x \sim \lambda x$ for every nonzero scalar
$\lambda \in \mathbb{R}$. A point in $\mathbb{RP}^3$ therefore
represents an entire line through the origin in $\mathbb{R}^4$. Using
homogeneous coordinates, we write such a point as
$$[x_0 : x_1 : x_2 : x_3] := [\lambda x_0 : \lambda x_1 : \lambda x_2 : \lambda x_3]
\quad \text{for all } \lambda \neq 0.$$ Projective space may
additionally be understood as a completion of Euclidean space. In fact,
we recover standard Euclidean coordinates via
$$[x_0 : x_1 : x_2 : x_3] \mapsto\left(\frac{x_1}{x_0},\, \frac{x_2}{x_0},\, \frac{x_3}{x_0}\right),$$
where we have identified $\mathbb{R}^3$ with the affine chart
$[x_0 : x_1 : x_2 : x_3]$, such that $x_0 \neq 0$. The remaining points,
i.e., those with $x_0 = 0$, are often described as "points at
infinity.\" In this interpretation, parallel lines in $\mathbb{R}^3$
intersect at a unique point at infinity determined by their direction,
similar to how railroad tracks vanish at a different point in the
horizon depending on what angle they take with your vision.

This language of infinity can be misleading. The distinction between
finite and infinite points depends entirely on the choice of affine
chart. Changing coordinates moves the hyperplane $x_0 = 0$ to another
location, altering which points are labeled infinite. From the intrinsic
perspective of $\mathbb{RP}^3$, there is no preferred hyperplane and
therefore no distinguished set of infinite points. Every point possesses
identical local geometric structure.

Consider the identification
$$\mathbb{RP}^3 \cong S^3 / \{\pm 1\},\quad\text{where }S^3 = \{ x \in \mathbb{R}^4 : \|x\| = 1 \}.$$
Here, $S^3$ is the unit 3-sphere. Note that each line through the origin
intersects $S^3$ in exactly two antipodal points. Identifying these
antipodal pairs of intersection points produces $\mathbb{RP}^3$. Thus,
projective space inherits the smooth compact structure of the sphere
modulo symmetry.

Rather than embedding $\mathbb{RP}^3$ into Euclidean space and treating
infinity as limiting, we perform geometric computations directly on
$S^3$ and enforce antipodal identification. Thus, surfaces and
intersections that would appear to escape to infinity in Euclidean
coordinates remain entirely visible and continuous within the projective
model, and the geometry becomes globally coherent.

## Spherical Geometry

In Euclidean space, the paths that minimize distance, or the geodesics,
are the straight ones: straight lines extend infinitely and distances
are measured with respect to a flat metric. On the sphere, however, the
natural notion of a straight line is a great circle geodesic, a curve
that locally minimizes distance while remaining on the surface. These
great circles are compact and obtained by intersecting the sphere with
two-dimensional places through the origin in $\mathbb{R}^4$.

To an observer living in $S^3$, these geodesics would appear to be the
straightest possible paths available, even though they appear curved
when viewed extrinsically. Were they to ride a bike on this surface,
traveling along a great circle would not require any turning of the
handle bars. This distinction is essential to our visualizations, as we
do not treat the sphere as a curved object sitting inside a
higher-dimensional flat space. Instead, we treat the sphere as the
ambient space itself.

Geometrically, $S^3$ has constant positive curvature. This curvature
explains several features, including the tendency for geodesics to bend
towards one another, that triangles have angle sums greater than pi, and
the compactness of the global topology. This compactness gives us a
powerful result about the space: rays [JS: (specify that they follow
geodesics?)]{style="color: blue"} never diverge or escape. Projective
phenomena that appear unbounded in Euclidean coordinates become fully
contained when viewed on $S^3$.

Because $S^3$ is compact and geodesics are periodic, rays don't escape
to infinity.

After identifying antipodal points to obtain $\mathbb{RP}^3$, the space
remains compact but becomes non-simply connected.

-   explain intrinsic viewpoint

-   contrast with Euclidean intuition

-   short discussion of curvature and topology

# Rendering Framework {#sec:framework}

## Ray Marching on $S^3$

In Euclidean ray tracing, rays follow the straight line geodesics which
originate at a camera position and travel outward until they intersect a
surface. Implicitly, the trajectory of these rays is governed by the
flat Euclidean metric. In our setting, we treat $S^3$ as the ambient
space itself, and thus the rays should instead follow geodesics of
$S^3$.

Given a point $p \in S^3$ and a unit tangent vector $v \in T_p S^3$ with
$\langle p, v \rangle = 0$, the geodesic through $p$ in direction $v$ is
given by $$\gamma(t) = \cos(t)\, p + \sin(t)\, v.$$ Since
$\|\gamma(t)\|=1$, this curve remains on $S^3$ for all $t$ and traces
out a great circle. Rendering, therefore, is simply evaluating surfaces
along such geodesics. However, rather than solving for the first
intersection of a geodesic with a surface as we would with ray tracing,
we instead utilize ray marching. Here, we incrementally step forward
along $\gamma(t)$ and test for intersections.

We concern ourselves with surfaces specified by homogeneous polynomials
$F:\mathbb{R}^4\to\mathbb{R}$, where the level sets
$F(x_0,x_1,x_2,x_3) = 0$ define how the surfaces present themselves in
our space [JS: (change i dont like wording i
think)]{style="color: blue"}. Detecting an intersection is just a
root-finding problem for the single-variable function
$$f(t) = F(\gamma(t)).$$ We march forward in the parameter $t$ with step
size $\Delta t$, and a sign change in $f(t)$ from step $t$ to
$t+\Delta t$ indicates that the surface has been crossed. We then refine
the intersection points using a bracketing method. We approximate the
restriction of $F$ along the ray using the Bernstein basis, which
provides stable bounds and allows us to guarantee convergence within a
chosen tolerance. [JS: idk anything about
Bernstein]{style="color: blue"}

Great circles on $S^3$ satisfy the periodicity constraint
$\gamma(t)=\gamma(2\pi+t)$. In addition, under the aforementioned
antipodal quotient $\mathbb{RP}^3 \cong S^3/\{\pm 1\}$, we have that
$[\gamma(t)]=[\gamma(\pi+t)]$. Thus, it suffices to impose a maximum
parameter length of $\pi$ to avoid the ray redundantly traversing the
space.

After determining the first intersection point
$x_\text{hit}:=\gamma(t_\text{hit})$, we compute the surface normals
intrinsically by projecting the Euclidean gradient
$\nabla F|_{x_\text{hit}}\in\mathbb{R}^4$ onto the tangent space of
$S^3$ [JS: (equationhere?)]{style="color: blue"}. The resulting normal
vector is used for shading and lighting calculations.

We also incorporate a path tracing option to model lighting. Secondary
rays are generated at intersection points to simulate reflection and
global illumination effects. These rays again follow geodesics in $S^3$,
ensuring that lighting computations are consistent with the intrinsic
geometry. This enhances depth perception and helps communicate accurate
geometric structure.

maybe not necessary?

-   explain why homogeneous formulation is natural

-   discuss normalization

## Bernstein Basis Approximation

To compute ray surface intersections reliably, we approximate certain
functions using the Bernstein basis. For a polynomial of degree $n$ in
one variable on the interval $[0,1]$, the Bernstein basis consists of
the functions $$B_{k}^{n}(t) = \binom{n}{k} t^{k}(1-t)^{n-k}, 
\quad k = 0, \dots, n.$$ Any polynomial $p(t)$ of degree at most $n$ can
be written uniquely as $$p(t) = \sum_{k=0}^{n} c_k B_k^n(t).$$

One important benefit of using the Bernstein basis is that it allows for
control over the range of the function. On $[0,1]$, the polynomial
$p(t)$ is within the convex hull of its coefficients $\{c_k\}$. The
minimum and maximum values of $p(t)$ are bounded by the minimum and
maximum of the coefficients. This property makes the Bernstein form
numerically stable and well-suited for root-finding, since it allows us
to find whether a function can change sign on a given interval.

Intersection detection reduces to finding roots of a function
$$f(t) = F(\gamma(t)),$$ where $\gamma(t)$ is a geodesic on $S^3$. After
restricting to a bounded parameter interval, we approximate $f(t)$ in
Bernstein form. If all Bernstein coefficients have the same sign, then
no root occurs in that interval. If the coefficients change sign, we
subdivide the interval and repeat the test.

Therefore the Bernstein basis helps us avoid unstable cancellation
effects that can arise and allows us to certify the presence or absence
of roots with a specific tolerance. It enables accurate rendering
without requiring closed-form intersection formulas.

# Implementation {#sec:implementation}

## WebGPU Architecture

Our implementation uses the the [wgpu]{.smallcaps} crate which is a
cross-platform graphics API patterned off of the WebGPU standard,
written in pure Rust. This allows our code to compile to DirectX12 for
Windows, Metal for iOS and MacOS, Vulkan for Windows Linux and Android,
for WebGL and WebGPU for the web by compiling to WebAssembly. The tested
platforms are Vulkan on Linux, Metal on MacOS, and WebGL for the web. We
use WGSL for our shading language.

The main advantage of using [wgpu]{.smallcaps} is the cross-platform
support and the memory-safety guarantees offered by Rust. The WebGPU
standard as implemented gives us enough control over the rendering
pipeline to be efficient while abstracting way some of the unnecessary
and less-portable features of Vulkan. Also, the option of using WebGPU
allows for the possibility of using compute shaders or general-purpose
storage buffers in future iterations of the software.

## Lowering\... (TBD)

We additionally provide an implementation of a symbolic polynomial
library in Rust, which is used to formulate implicit surfaces and
perform polynomial arithmetic, such as the symbolic calculation of
derivatives, on the CPU. These expressions are then expanded into
monomial terms using a user-specified ordering and baked into WGSL code
for use as SDFs on the GPU.

# Examples {#sec:examples}

Discuss examples we have rendered and their significance

-   (Jake) Bezout's theorem, group law on elliptic curves, existence
    theorem

    -   visualize a projection from a higher affine space onto our
        space, and compare the image of a variety defined by an ideal in
        that higher space and its image versus the variety defined by
        the intersection of the defining ideal and our space (the
        zariski closure)

## Symmetric Cubic Surfaces

## Cubic Curves on Quartic Surfaces

The shader implements an intrinsic numerical scheme for computing
intersections between geodesics in $S^3$ and homogeneous quartic
hypersurfaces. Let $$F : \mathbb{R}^4 \to \mathbb{R}$$ be a homogeneous
polynomial of degree four. The zero set of $F$ determines a quartic
hypersurface in $\mathbb{R}^4$, and its intersection with $S^3$ brings
it down to a quartic surface in $\mathbb{RP}^3$.

Quartic surfaces are constructed in one implementation by

and in another by combining two homogeneous cubic polynomials that
define elliptic curves. Let $$C_1(x_0,x_1,x_2,x_3), \qquad 
C_2(x_0,x_1,x_2,x_3)$$ be homogeneous cubic polynomials whose vanishing
loci define projective elliptic curves. From these, one forms a quartic
polynomial by a homogeneous combination such as
$$F = C_1 \cdot L_1 + C_2 \cdot L_2,$$ where $L_1$ and $L_2$ are chosen
so that $F$ has degree four.

## Bezout's Theorem

visualize a projection from a higher affine space onto our space, and
compare the image of a variety defined by an ideal in that higher space
and its image versus the variety defined by the intersection of the
defining ideal and our space (the zariski closure)

# Discussion and Conclusion

-summarize contributions -educational implications? -future directions

thurston paper

On Maximal Homogeneous 3-Geometries and Their Visualization Emil molnar

Projective geometry and duality for graphics, games and visualization
Vaclav Skala
